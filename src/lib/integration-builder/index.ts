import directAuthIntegrationBuilder from "./customauth";
import { IntegrationBuilder } from "./interfaces";
import plugnplayIntegrationBuilder from "./plugnplay";

const integrationBuilders: Record<string, IntegrationBuilder> = {
  plugnplay: plugnplayIntegrationBuilder,
  customauth: directAuthIntegrationBuilder,
};

export * from "./interfaces";

export default integrationBuilders;
