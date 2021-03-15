import { IntegrationBuilder } from "./interfaces";
import directAuthIntegrationBuilder from "./direct-auth";
import torusWalletIntegrationBuilder from "./torus-wallet";

const integrationBuilders: IntegrationBuilder[] = [
  torusWalletIntegrationBuilder,
  // directAuthIntegrationBuilder,
];

export * from "./interfaces";

export default integrationBuilders;
