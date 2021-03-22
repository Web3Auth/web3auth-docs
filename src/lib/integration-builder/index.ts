import { IntegrationBuilder } from "./interfaces";
import directAuthIntegrationBuilder from "./direct-auth";
import torusWalletIntegrationBuilder from "./torus-wallet";
import openLoginIntegrationBuilder from "./open-login";

const integrationBuilders: Record<string, IntegrationBuilder> = {
  "open-login": openLoginIntegrationBuilder,
  "torus-wallet": torusWalletIntegrationBuilder,
  "direct-auth": directAuthIntegrationBuilder,
};

export * from "./interfaces";

export default integrationBuilders;
