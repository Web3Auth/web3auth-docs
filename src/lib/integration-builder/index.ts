import { IntegrationBuilder } from "./interfaces";
import web3authIntegrationBuilder from "./web3auth";

const integrationBuilder: IntegrationBuilder = web3authIntegrationBuilder;

export * from "./interfaces";
export * from "./web3auth";
export default integrationBuilder;
