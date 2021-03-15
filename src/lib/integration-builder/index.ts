import { IntegrationBuilder } from "./interfaces";
import directAuthIntegrationBuilder from "./direct-auth";
import torusWalletIntegrationBuilder from "./torus-wallet";

const integrationBuilders: Record<string, IntegrationBuilder> = {
  "torus-wallet": torusWalletIntegrationBuilder,
  "direct-auth": directAuthIntegrationBuilder,
};

export * from "./interfaces";

export default integrationBuilders;
