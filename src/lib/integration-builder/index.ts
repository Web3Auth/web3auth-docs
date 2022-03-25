import directAuthIntegrationBuilder from "./customauth";
import { IntegrationBuilder } from "./interfaces";
import plugnplayIntegrationBuilder from "./plugnplay";
import torusWalletIntegrationBuilder from "./wallet";

const integrationBuilders: Record<string, IntegrationBuilder> = {
  plugnplay: plugnplayIntegrationBuilder,
  wallet: torusWalletIntegrationBuilder,
  customauth: directAuthIntegrationBuilder,
};

export * from "./interfaces";

export default integrationBuilders;
