<template>
  <div id="app">
    <h2>
      <a target="_blank" href="http://web3auth.io/" rel="noreferrer">
      Web3Auth
      </a>
      Vue.js Ethereum Example
    </h2>
    <button
      v-if="!provider"
      class="card"
      @click="login"
      style="cursor: pointer"
      >
    Login
    </button>
    <div v-if="provider">
      <div class="flex-container">
        <div>
          <button class="card" @click="getUserInfo" style="cursor: pointer">
          Get User Info
          </button>
        </div>
        <div>
          <button
            class="card"
            @click="authenticateUser"
            style="cursor: pointer"
            >
          Get ID Token
          </button>
        </div>
        // REPLACE-getRPCFunctionsButtons-
        <button class="card" @click="logout" style="cursor: pointer">
        Logout
        </button>
      </div>
    </div>
    <div id="console" style="white-space: pre-line">
      <p style="white-space: pre-line">Logged in Successfully!</p>
    </div>
  </div>
</template>

<script lang="ts">

// HIGHLIGHTSTART-buildingApp
import { ref, onMounted } from "vue";
// HIGHLIGHTEND-buildingApp
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
    let provider = ref<IProvider | any>(null);

    // HIGHLIGHTSTART-registerApp
    const clientId = "YOUR_WEB3AUTH_CLIENT_ID"; // get from https://dashboard.web3auth.io
    // HIGHLIGHTEND-registerApp

    // REPLACE-getConstructorCode-


    // REPLACE-getOpenloginAdapter-


    onMounted(async () => {
      try {
        loading.value = true;
        // REPLACE-getInitCode-

        if (web3auth.provider) {
          provider = web3auth.provider;
        };
      } catch (error) {
        console.log("error", error);
      } finally {
        loading.value = false;
      }
    });

    const login = async () => {
      if (!web3auth) {
        console.log("web3auth not initialized yet");
        return;
      }
      // REPLACE-getLoginCode-

    };

    const authenticateUser = async () => {
      if (!web3auth) {
        uiConsole("web3auth not initialized yet");
        return;
      }
      // HIGHLIGHTSTART-getWeb3AuthIdToken
      const idToken = await web3auth.authenticateUser();
      // HIGHLIGHTEND-getWeb3AuthIdToken
      uiConsole(idToken);
    };
    const getUserInfo = async () => {
      if (!web3auth) {
        uiConsole("web3auth not initialized yet");
        return;
      }
      // HIGHLIGHTSTART-getUserInfo
      const user = await web3auth.getUserInfo();
      // HIGHLIGHTEND-getUserInfo
      uiConsole(user);
    };

    const logout = async () => {
      if (!web3auth) {
        uiConsole("web3auth not initialized yet");
        return;
      }
      // HIGHLIGHTSTART-logout
      await web3auth.logout();
      // HIGHLIGHTEND-logout
      provider = null;
      loggedin.value = false;
    };

    // REPLACE-getRPCFunctions-


    return {
      loading,
      loginButtonStatus,
      connecting,
      provider,
      web3auth,
      login,
      authenticateUser,
      logout,
      getUserInfo,
      // REPLACE-getRPCFunctionsReturnsVue-

    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#app {
  width: 80%;
  margin: auto;
  padding: 0 2rem;
}
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
.card {
  margin: 0.5rem;
  padding: 0.7rem;
  text-align: center;
  color: #0070f3;
  background-color: #fafafa;
  text-decoration: none;
  border: 1px solid #0070f3;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  width: 100%;
}
.card:hover,
.card:focus,
.card:active {
  cursor: pointer;
  background-color: #f1f1f1;
}
.flex-container {
  display: flex;
  flex-flow: row wrap;
}
.flex-container > div {
  width: 100px;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;
}
#console {
  width: 100%;
  height: 100%;
  overflow: auto;
  word-wrap: break-word;
  font-size: 16px;
  font-family: monospace;
  text-align: left;
}
</style>
