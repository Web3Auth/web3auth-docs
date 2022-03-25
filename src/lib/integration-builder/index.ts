import directAuthIntegrationBuilder from "./customauth";
import { IntegrationBuilder } from "./interfaces";
import openLoginIntegrationBuilder from "./open-login";
import torusWalletIntegrationBuilder from "./wallet";

const integrationBuilders: Record<string, IntegrationBuilder> = {
  "open-login": openLoginIntegrationBuilder,
  wallet: torusWalletIntegrationBuilder,
  customauth: directAuthIntegrationBuilder,
};

export * from "./interfaces";

export default integrationBuilders;
