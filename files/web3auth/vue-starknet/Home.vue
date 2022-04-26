<template>
  <div id="app">
    <h2>Web3Auth X Vue.js</h2>
    <section
      :style="{
        fontSize: '12px',
      }"
    >
      <button class="rpcBtn" v-if="!provider" @click="connect()" style="cursor: pointer">Connect</button>
      <button class="rpcBtn" v-if="provider" @click="logout()" style="cursor: pointer">Logout</button>
      <button class="rpcBtn" v-if="provider" @click="getUserInfo()" style="cursor: pointer">Get User Info</button>
      <button class="rpcBtn" v-if="provider" @click="onGetStarkHDAccount()" style="cursor: pointer">Get Stark Accounts</button>
      <button class="rpcBtn" v-if="provider" @click="onDeployAccount()" style="cursor: pointer">Deploy Account</button>
    </section>
    <div id="console" style="white-space: pre-line">
      <p style="white-space: pre-line"></p>
    </div>
  </div>
</template>

<script lang="ts">
import { ADAPTER_STATUS, CONNECTED_EVENT_DATA, SafeEventEmitterProvider } from "@web3auth/base";
import { LOGIN_MODAL_EVENTS } from "@web3auth/ui";
import { Web3Auth } from "@web3auth/web3auth";
import { ref, onMounted } from "vue";
// REPLACE-web3authChainRpcImport-

export default {
  name: "Home",
  props: {
    msg: String,
  },
  setup() {
    const loading = ref<boolean>(false);
    const loginButtonStatus = ref<string>("");
    const connecting = ref<boolean>(false);
    const provider = ref<SafeEventEmitterProvider | null>(null);
    const clientId = "YOUR_CLIENT_ID"; // get from https://dashboard.web3auth.io

    // REPLACE-const web3AuthInitParams = {};-

    // REPLACE-const web3AuthCtorParams = {};-

    let web3auth = new Web3Auth(web3AuthCtorParams);
    onMounted(async () => {
      try {
        loading.value = true;

        web3auth = new Web3Auth(web3AuthCtorParams);

        // REPLACE-const web3AuthOpenloginConfigure = {};-

        subscribeAuthEvents();

        await web3auth.initModal(initParams);
      } catch (error) {
        console.log("error", error);
        uiConsole("error", error);
      } finally {
        loading.value = false;
      }
    });

    function subscribeAuthEvents() {
      web3auth.on(ADAPTER_STATUS.CONNECTED, async (data: CONNECTED_EVENT_DATA) => {
        uiConsole("connected to wallet", data);
        provider.value = web3auth.provider;
      });
      web3auth.on(ADAPTER_STATUS.CONNECTING, () => {
        uiConsole("connecting");
        connecting.value = true;
      });
      web3auth.on(ADAPTER_STATUS.DISCONNECTED, () => {
        uiConsole("disconnected");
        provider.value = null;
      });
      web3auth.on(ADAPTER_STATUS.ERRORED, (error) => {
        uiConsole("errored", error);
      });
      web3auth.on(LOGIN_MODAL_EVENTS.MODAL_VISIBILITY, (isVisible: boolean) => {
        connecting.value = isVisible;
      });
    }
    async function connect() {
      try {
        const web3authProvider = await web3auth.connect();
        provider.value = web3authProvider;
      } catch (error) {
        console.error(error);
        uiConsole("error", error);
      }
    }
    async function logout() {
      await web3auth.logout();
      provider.value = null;
    }
    async function getUserInfo() {
      const userInfo = await web3auth.getUserInfo();
      uiConsole(userInfo);
    }

    async function onGetStarkHDAccount() {
      await getStarkHDAccount();
    }

    async function onDeployAccount() {
      await deployAccount();
    }

    function uiConsole(...args: any[]): void {
      const el = document.querySelector("#console>p");
      if (el) {
        el.innerHTML = JSON.stringify(args || {}, null, 2);
      }
    }
    return {
      loading,
      loginButtonStatus,
      connecting,
      provider,
      web3auth,
      connect,
      logout,
      subscribeAuthEvents,
      getUserInfo,
      onGetStarkHDAccount,
      onDeployAccount,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
