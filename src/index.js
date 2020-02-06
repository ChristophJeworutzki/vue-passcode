import Vue from "vue";
import VuePasscode from "./components/VuePasscode.vue";

function install(Vue, options = {}) {
  Vue.component(options.name || "VuePasscode", VuePasscode);
}

export default install;

if (typeof window !== undefined && window.Vue && window.Vue === Vue) {
  install(window.Vue);
}

export { VuePasscode };
