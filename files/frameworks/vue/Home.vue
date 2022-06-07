<template>
  <div id="app">
    <h2>Web3Auth X Vue.js</h2>
    <section style="{ fontSize: '12px' }">
      <button class="rpcBtn" @click="login" style="cursor: pointer">Login</button>
      <button class="rpcBtn" @click="getUserInfo" style="cursor: pointer">Get User Info</button>
      // REPLACE-getRPCFunctionsButtons-

      <button class="rpcBtn" @click="logout" style="cursor: pointer">Logout</button>
    </section>
    <div id="console" style="white-space: pre-line">
      <p style="white-space: pre-line"></p>
    </div>
  </div>
</template>

<script lang="ts">

import { ref, onMounted } from "vue";
// REPLACE-getModuleImport-


export default {
  name: "Home",
  props: {
    msg: String,
  },
  setup() {
    const loading = ref<boolean>(false);
    const loginButtonStatus = ref<string>("");
    const connecting = ref<boolean>(false);
    let provider = ref<SafeEventEmitterProvider | any>(null);
    const clientId = "YOUR_CLIENT_ID"; // get from https://dashboard.web3auth.io

    // REPLACE-getConstructorCode-


    onMounted(async () => {
      try {
        loading.value = true;

        // REPLACE-getOpenloginAdapter-


        // REPLACE-getInitCode-


      } catch (error) {
        uiConsole("error", error);
        uiConsole("error", error);
      } finally {
        loading.value = false;
      }
    });

    const login = async () => {
      if (!web3auth) {
        uiConsole("web3auth not initialized yet");
        return;
      }
      // REPLACE-getConnectCode-

      provider = web3authProvider;
    };

    const getUserInfo = async () => {
      if (!web3auth) {
        uiConsole("web3auth not initialized yet");
        return;
      }
      const user = await web3auth.getUserInfo();
      uiConsole(user);
    };

    const logout = async () => {
      if (!web3auth) {
        uiConsole("web3auth not initialized yet");
        return;
      }
      await web3auth.logout();
      provider = null;
    };

    // REPLACE-getRPCFunctions-

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
      login,
      logout,
      getUserInfo,
      // REPLACE-getRPCFunctionsReturnsVue-

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
