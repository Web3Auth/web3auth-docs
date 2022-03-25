import { IntegrationBuilder } from "./interfaces";
import directAuthIntegrationBuilder from "./customauth";
import torusWalletIntegrationBuilder from "./wallet";
import plugnplayIntegrationBuilder from "./plugnplay";

const integrationBuilders: Record<string, IntegrationBuilder> = {
  plugnplay: plugnplayIntegrationBuilder,
  wallet: torusWalletIntegrationBuilder,
  customauth: directAuthIntegrationBuilder,
};

export * from "./interfaces";

export default integrationBuilders;
