import { IntegrationBuilder } from "./interfaces";
import directAuthIntegrationBuilder from "./customauth";
import torusWalletIntegrationBuilder from "./wallet";
import openLoginIntegrationBuilder from "./open-login";

const integrationBuilders: Record<string, IntegrationBuilder> = {
  "open-login": openLoginIntegrationBuilder,
  wallet: torusWalletIntegrationBuilder,
  customauth: directAuthIntegrationBuilder,
};

export * from "./interfaces";

export default integrationBuilders;
