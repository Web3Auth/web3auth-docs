export default {
  name: "main.js",
  language: "js",
  code: `
import Vue from "vue";

import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
`.trim(),
};
