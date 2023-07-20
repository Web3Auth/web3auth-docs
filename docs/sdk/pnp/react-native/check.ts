/**
   * You can get your clientId/projectId by registering your
   * dapp on {@link "https://dashboard.web3auth.io"| developer dashboard}
   */
clientId: string;

/**
 * network specifies the openlogin sdk url to be used.
 *
 * - `'mainnet'`: https://app.openlogin.com will be used which is the production version.
 * - `'cyan'`: https://cyan.openlogin.com will be used which is the production cyan version.
 * - `'testnet'`: https://testing.openlogin.com will be used which is the testing version.
 * - `'development'`: http://localhost:3000 will be used for development purpose.
 */
network: OPENLOGIN_NETWORK_TYPE;

/**
 * redirectUrl is the dapp's url where user will be redirected after login.
 *
 * @remarks
 * Register this url at {@link "https://dashboard.web3auth.io"| developer dashboard}
 * else initialization will give error.
 */
redirectUrl?: string;

/**
 * loginConfig enables you to pass your own login verifiers configuration for various
 * loginProviders.
 *
 * loginConfig is key value map where each key should be a valid loginProvider and value
 * should be custom configuration for that loginProvider
 *
 * @remarks
 * You can deploy your own verifiers from {@link "https://dashboard.web3auth.io"| developer dashboard}
 * to use here.
 *
 */
loginConfig?: LoginConfig;

/**
 * webauthnTransport enables you to configure the transport type user can use
 * for saving their share.
 *
 * @defaultValue ["internal"]
 *
 * @remarks
 * This is only available for v1 users.
 */
webauthnTransports?: AuthenticatorTransport[];

/**
 * options for whitelabling default openlogin modal.
 */
whiteLabel?: WhiteLabelData;

/**
 * setting to "local" will persist social login session accross browser tabs.
 *
 * @defaultValue "local"
 */
storageKey?: "session" | "local";

/**
 * How long should a login session last at a minimum in seconds
 *
 * @defaultValue 86400 seconds
 * @remarks Max value of sessionTime can be 7 * 86400 (7 days)
 */
sessionTime?: number;

/**
 * This parameter will be used to enable mfa factors and set priority on UI listing.
 * List of factors available
 * backUpShareFactor | socialFactor | passwordFactor
 * @defaultValue false
 */
mfaSettings?: MfaSettings;

sdkUrl?: string;

useCoreKitKey?: boolean;
