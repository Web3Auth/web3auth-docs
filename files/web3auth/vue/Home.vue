<template>
  <div id="app">
    <h2>Web3Auth X Vue.js</h2>
    <section
      :style="{
        fontSize: '12px',
      }"
    >
      <button class="rpcBtn" v-if="!provider" @click="connect" style="cursor: pointer">Connect</button>
      <button class="rpcBtn" v-if="provider" @click="logout" style="cursor: pointer">Logout</button>
      <button class="rpcBtn" v-if="provider" @click="getUserInfo" style="cursor: pointer">Get User Info</button>
      <button class="rpcBtn" v-if="provider" @click="getAccount" style="cursor: pointer">Get User Account</button>
    </section>
    <div id="console" style="white-space: pre-line">
      <p style="white-space: pre-line"></p>
    </div>
  </div>
</template>

<script lang="ts">
import { ADAPTER_STATUS, CHAIN_NAMESPACES, CONNECTED_EVENT_DATA, CustomChainConfig } from "@web3auth/base";
import { LOGIN_MODAL_EVENTS } from "@web3auth/ui";
import { Web3Auth } from "@web3auth/web3auth";
import Web3 from "web3";

import Vue from "vue";
import config from "../config";

const ethChainConfig: Partial<CustomChainConfig> & Pick<CustomChainConfig, "chainNamespace"> = {
  chainNamespace: CHAIN_NAMESPACES.EIP155,
  chainId: "0x4",
  // rpcTarget: `https://ropsten.infura.io/v3/776218ac4734478c90191dde8cae483c`,
  // displayName: "ropsten",
  // blockExplorer: "https://ropsten.etherscan.io/",
  ticker: "ETH",
  tickerName: "Ethereum",
};
export default Vue.extend({
  name: "EthereumChain",
  data() {
    return {
      loading: false,
      loginButtonStatus: "",
      connecting: false,
      provider: undefined,
      web3auth: new Web3Auth({ chainConfig: { chainNamespace: CHAIN_NAMESPACES.EIP155 }, clientId: config.clientId, enableLogging: true }),
    };
  },
  async mounted() {
    try {
      this.loading = true;
      this.web3auth = new Web3Auth({
        chainConfig: ethChainConfig,
        clientId: config.clientId,
        authMode: "DAPP",
        enableLogging: true,
      });

      this.subscribeAuthEvents(this.web3auth);
      await this.web3auth.initModal();
    } catch (error) {
      console.log("error", error);
      this.console("error", error);
    } finally {
      this.loading = false;
    }
  },
  methods: {
    subscribeAuthEvents(web3auth: Web3Auth) {
      web3auth.on(ADAPTER_STATUS.CONNECTED, async (data: CONNECTED_EVENT_DATA) => {
        this.console("connected to wallet", data);
        this.provider = web3auth.provider;
        this.loginButtonStatus = "Logged in";
      });
      web3auth.on(ADAPTER_STATUS.CONNECTING, () => {
        this.console("connecting");
        this.connecting = true;
        this.loginButtonStatus = "Connecting...";
      });
      web3auth.on(ADAPTER_STATUS.DISCONNECTED, () => {
        this.console("disconnected");
        this.loginButtonStatus = "";
        this.provider = undefined;
      });
      web3auth.on(ADAPTER_STATUS.ERRORED, (error) => {
        console.log("error", error);
        this.console("errored", error);
        this.loginButtonStatus = "";
      });
      web3auth.on(LOGIN_MODAL_EVENTS.MODAL_VISIBILITY, (isVisible) => {
        this.connecting = isVisible;
      });
    },
    async connect() {
      try {
        const web3authProvider = await this.web3auth.connect();
        this.provider = web3authProvider;
      } catch (error) {
        console.error(error);
        this.console("error", error);
      }
    },
    async logout() {
      await this.web3auth.logout();
      this.provider = undefined;
    },
    async getUserInfo() {
      const userInfo = await this.web3auth.getUserInfo();
      this.console(userInfo);
    },
    async getAccount() {
      const web3 = new Web3(this.provider as any);
      const accounts = await web3.eth.getAccounts();
      this.console(accounts[0]);
    },
    console(...args: unknown[]): void {
      const el = document.querySelector("#console>p");
      if (el) {
        el.innerHTML = JSON.stringify(args || {}, null, 2);
      }
    },
  },
});
</script>
