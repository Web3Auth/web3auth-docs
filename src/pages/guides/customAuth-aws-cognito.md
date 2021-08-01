---
title: How to Integrate Torus CustomAuth and AWS Cognito
image: "/contents/TorusXAWSCognito.png"
description: Learn to use Torus CustomAuth with AWS Cognito.
order: 13
---

import Tabs from "@theme/Tabs";

import TabItem from "@theme/TabItem";

## Introduction

This tutorial will guide you on how to integrate CustomAuth with AWS cognito service.

In this example we will be using the aws cognito hosted UI with following login providers:-
-  AWS cognito email password login provider
-  Google Login Provider

You can enable other providers from aws cognito console based on your requirements. In this example we are using above
login providers for a reason that we will going to use `email` as `jwt verifier id` field which will be available in both `AWS cognito email password login provider` and `Google Login Provider` jwt tokens , which means that a user who is using same email in above login providers will get same `private key` returned from torus nodes.

It will make more sense later in this tutorial.

You can find
[the source code of this is example on Github](https://github.com/torusresearch/torus-direct-web-sdk/tree/master/examples/aws-cognito-example).

## Configuring Cognito user pool login provider in aws cognito.

- Go to your aws account and open aws cognito service.

- Create a new user pool by following this aws guide: `https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-as-user-directory.html`

- Note down your `user pool id` and `region` after creating new pool.

- Add a new app client to the user pool from `App clients` tab under your pool settings.

- Note down the `clientId` for this app client.

- Add a domain to your app's hosted ui in from `App integeration's domain name` section

- Update app client settings for the new app client under `App client settings` tab to set desired oauth flows
and redirect endpoints.

## Configuring google login provider in aws cognito
- Go to `identity providers` tab under federation tab and select google. It will require you to enter your google's app client id and secret which you can obtain here: `https://console.cloud.google.com/apis/dashboard`

- While configuring your google app oauth client for web, make sure to enter your cognito hosted ui
domain in the `Authorized Javascript Origins` list and `<AWS_COGNITO_HOSTED_UI_DOMAIN>/oauth2/idpresponse` end point in the Authorized redirect URIs list.

- Go back to your aws console and enter your google app client id and secret key.

- As we mentioned before that we are going to use `email` as jwt verifier field so we need to capture email for user's
google login and map it to email field in user pool's email field, in order to do this go to `Attribute Mapping` section
under `Federation` tab. Select google and then check google's attribute email field should be mapped to user pool attribute email field, if is not mapped then map it and save your changes.

- Now your google login provider is configured, its time to enable it in your `App client settings` in aws console.

- Now go to your hosted app domain , it should show you default ui for both google and cognito user pool provider.

- Now lets move to configure torus customAuth.

## Register your Torus CustomAuth application

In order to use Torus Custom SDK, you'll need to create a project in
[Developer Dashboard](https://developer.tor.us).

Do the following steps in order to create your custom verifier:-

1. Login in to developer dashboard, go to `Custom Auth` tab.

2. Click on  create verifier button.

3. Enter your custom verifier information as follows:-

    - Enter your unique verifier identifier, it will represent your application on torus network. You will need to use this value later while initializing your sdk.

    - Select network option:-
      - `'Testnet'`:- Select testnet for development mode. Your verifier will be deployed on ropsten testnet and torus test network.
      - `'Mainnet'`:- Select mainnet for production mode. Your verifier will be deployed on ethereum mainnet and torus main network.
    - Select Verifier type as: "Custom"

    - Enter JWT Verifier ID as : "email". You can also use "sub" as your jwt verifier id but then your user's will get diffrent private keys accross diffrent login providers even if they use same email address. You can set this field based on your application needs provided that it should be a unique identifier for user.

    - Your JWK endpoint endpoint for aws cognito will look like this - `https://cognito-idp.{region}.amazonaws.com/{userPoolId}/.well-known/jwks.json` , get values of `region` and `userPoolId` from your aws cognito console.

    - Enter JWT validation fields:-
      - `iss`: It shoudl be `https://cognito-idp.{region}.amazonaws.com/{userPoolId}, replace region and userPoolId that we noted earlier while creating cognito user pool.

      - `aud`: It should be your client id that your noted earlier while creatin app client in aws cognito console.

    - Save you verifier and it will be deployed in 5-10 minutes.


## Let's get started with code by installing depedency using npm

[TorusDirectWebSDK](https://www.npmjs.com/package/@toruslabs/torus-direct-web-sdk)
[JWTDecode](https://www.npmjs.com/package/jwt-decode)

```shell
npm i @toruslabs/torus-direct-web-sdk --save
npm i jwt-decode --save
```


## Login with Aws cognito hosted ui

In order to login with aws cognito hosted ui, we can simply redirect user to hosted ui app domain with following params
appended to ui url:-

```js
const clientId = process.env.REACT_APP_COGNITO_CLIENT_ID;
const AWS_COGNITO_USER_POOL_DOMAIN = process.env.REACT_APP_AWS_COGNITO_USER_POOL_DOMAIN;
export const AWS_COGNITO_LOGIN_ROUTE = `${AWS_COGNITO_USER_POOL_DOMAIN}/login`;

const AWS_COGNITO_LOGIN_PARAMS = {
  client_id: clientId,
  response_type: "token",
  scope: "email openid profile",
  redirect_uri: "http://localhost:3000/redirect", // congito will redirect user here after login
};
```

> Note: `redirect_uri` should be added in app client settings in aws console. User will be redirected to `redirect_uri`
after login with `id_token`, which we will use to get user's torus key.

To login a user we are appending above login params to hosted ui login route and redirecting user to it.

```js
    import { AWS_COGNITO_LOGIN_PARAMS, AWS_COGNITO_LOGIN_ROUTE } from "./config";

    ...
    ...

    login = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const finalUrl = new URL(AWS_COGNITO_LOGIN_ROUTE);
        const finalJwtParams = JSON.parse(JSON.stringify(AWS_COGNITO_LOGIN_PARAMS));
        Object.keys(finalJwtParams).forEach((key) => {
        if (finalJwtParams[key]) finalUrl.searchParams.append(key, finalJwtParams[key]);
        });
        window.location.href = finalUrl.href;
    };
```

## Handling login result:-

After user is logged in to aws cognito ui, user will be redirected back to our app on `redirect_ui` route.
We will parse redirected url hash params to decode the `id_token` in order to get torus key.

- Import dependencies in redirect page:-

```js
    import jwtDecode from "jwt-decode";
    import TorusDirectSdk, { TorusKey } from "@toruslabs/torus-direct-web-sdk";
```

- Parse redirect url hash params:-
```js
 componentDidMount = async () => {
    try {
      const url = new URL(window.location.href);
      const cleanUrl = window.location.origin + window.location.pathname;
      window.history.replaceState(null, "", cleanUrl);
      const hash = url.hash.substr(1);
      const { error, hashParameters } = this.handleRedirectParameters(hash);
      if (error) {
        this.setState({ consoleText: error });
        return;
      }
      const torusKeyResult = await this.getTorusKeyResult(hashParameters);
      console.log(torusKeyResult);
      if (torusKeyResult) {
        this.setState({ consoleText: typeof torusKeyResult === "object" ? JSON.stringify(torusKeyResult) : torusKeyResult });
      }
    } catch (error) {
      console.log(error);
      this.setState({ consoleText: error.message });
    }
  };

  handleRedirectParameters = (hash: string): { error: string; hashParameters: Record<string, string> } => {
    const hashParameters: Record<string, string> = hash.split("&").reduce((result: Record<string, string>, item) => {
      const [part0, part1] = item.split("=");
      result[part0] = part1;
      return result;
    }, {});
    let error = "";
    if (Object.keys(hashParameters).length > 0) {
      error = hashParameters.error_description || hashParameters.error || error;
    }
    return { error, hashParameters };
  };

}
```

- Fetch torus key using parsed login response hash params:-

  Here we are decoding the `id_token` to get `jwt verifier id` field which is `email` in our case, as we configured it while creating verifier.

 > Note:- You cannot use reuse a `id_token` in `getTorusKey` function. It will give `Duplicate token error`

```js
  // this the verifier identifier which you entered to identify your verifier while creating custom verifier
  const TORUS_DIRECT_SDK_VERIFIER_NAME = "your-custom-verifier-identifier";

  getTorusKeyResult = async (loginResponse: Record<string, string>): Promise<TorusKey | undefined> => {
    const torusdirectsdk = new TorusDirectSdk({
      baseUrl: `${window.location.origin}`,
      redirectPathName: "/",
      enableLogging: true,
      network: "testnet", // details for test net
    });
    const idToken = loginResponse.id_token;
    const decodedToken = jwtDecode(idToken) as any;

    // note that we are passing decodedToken.email in this function which is important.
    // we must pass the value of the field which was defined as jwt verifier id field while creating custom verifier.
    return torusdirectsdk?.getTorusKey(
      TORUS_DIRECT_SDK_VERIFIER_NAME,
      decodedToken.email,
      { verifier_id: decodedToken.email },
      loginResponse.id_token
    );
  };
```

## Logout:-

To logout from congito you can simply redirect user to logout page of hosted aws cogito ui:-

```js
    const clientId = process.env.REACT_APP_COGNITO_CLIENT_ID;

    const AWS_COGNITO_LOGOUT_ROUTE = `${AWS_COGNITO_USER_POOL_DOMAIN}/logout`;

    const AWS_COGNITO_LOGOUT_PARAMS = {
    client_id: clientId,
    logout_uri: "http://localhost:3000",
    };
    logout = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
        const finalUrl = new URL(AWS_COGNITO_LOGOUT_ROUTE);
        const finalJwtParams = JSON.parse(JSON.stringify(AWS_COGNITO_LOGOUT_PARAMS));
        Object.keys(finalJwtParams).forEach((key) => {
            if (finalJwtParams[key]) finalUrl.searchParams.append(key, finalJwtParams[key]);
        });
        window.location.href = finalUrl.href;
        } catch (error) {
        console.error(error, "login caught");
        }
    };

```

## Conclusion

You can use the above private key which is returned as response of `getTorusKey` in your web3 SDK.
