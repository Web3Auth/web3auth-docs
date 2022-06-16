export function getConstructorCode(isWhitelabeled: boolean, isCustomAuth: boolean): string {
  let whitelabelCode: string = "";
  let customAuthCode: string = "";
  if (isWhitelabeled) {
    whitelabelCode = `
        whiteLabel: {
          name: "YOUR_APP_NAME",
          logoLight: "URL_TO_APP_LOGO_FOR_LIGHT_THEME",
          logoDark: "URL_TO_APP_LOGO_FOR_DARK_THEME",
          defaultLanguage: "en", // or other language
          dark: true // or false,
          theme: {},
        },
    `;
  }
  if (isCustomAuth) {
    customAuthCode = `
        loginConfig: {
          jwt: {
            name: "BRAND_NAME",
            verifier: "VERIFIER_NAME",
            typeOfLogin: "jwt",
            clientId: "CLIENT_ID"
          },
        },
    `;
  }
  return `
      const web3auth = new Web3Auth(WebBrowser, {
        clientId: "CLIENT_ID",
        network: OPENLOGIN_NETWORK.TESTNET, // or other networks
${whitelabelCode}
${customAuthCode}
      });
    `;
}

export function getModuleImport(mode: "expo" | "bare"): string {
  if (mode === "expo") {
    return `
import { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Web3Auth, { LOGIN_PROVIDER, OPENLOGIN_NETWORK } from "@web3auth/react-native-sdk";
import Constants, { AppOwnership } from "expo-constants";
import * as Linking from "expo-linking";
import * as WebBrowser from "expo-web-browser";
import { Buffer } from "buffer";

global.Buffer = global.Buffer || Buffer;
    `;
  }
  if (mode === "bare") {
    return `
import React, { useState } from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import * as WebBrowser from 'react-native-web-browser';
import Web3Auth, {
  LOGIN_PROVIDER,
  OPENLOGIN_NETWORK,
} from 'web3auth-react-native-sdk';
    `;
  }
}

export function getRNResolvedRedirectUrl(mode: "expo" | "bare"): string {
  if (mode === "expo") {
    return `
const resolvedRedirectUrl =
  Constants.appOwnership == AppOwnership.Expo || Constants.appOwnership == AppOwnership.Guest
    ? Linking.createURL("web3auth", {})
    : Linking.createURL("web3auth", { scheme: scheme });
    `;
  }
  if (mode === "bare") {
    return "const resolvedRedirectUrl = `${scheme}://openlogin`;";
  }
  throw new Error("invalid mode");
}

export function getInitCode(isCustomAuth: boolean, isEmailPasswordless: boolean): string {
  let customAuthCode: string = "";
  if (isCustomAuth) {
    customAuthCode = `
        extraLoginOptions: {
          domain: "any_nonempty_string",
          verifierIdField: "sub",
          id_token: "JWT_TOKEN",
        },
    `;
  } else if (isEmailPasswordless) {
    customAuthCode = `
        extraLoginOptions: {
          login_hint: "email@example.com",
        },
    `;
  }
  return `
      const state = await web3auth.login({
        loginProvider: LOGIN_PROVIDER.GOOGLE,
        redirectUrl: resolvedRedirectUrl,
${customAuthCode}
      });
    `;
}
