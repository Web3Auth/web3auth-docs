import { IntegrationBuilder } from "./interfaces";
import web3authIntegrationBuilder from "./web3auth";

const integrationBuilders: Record<string, IntegrationBuilder> = {
  plugnplay: web3authIntegrationBuilder,
};

export * from "./interfaces";

export default integrationBuilders;
