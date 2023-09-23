import { createApp } from "vue";
import App from "./App.vue";

// Vuetify
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import router from "./routing-rule";
import { createPinia } from "pinia";
import piniaPersistedstatePlugin from "pinia-plugin-persistedstate";

const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);
app.use(vuetify);
app.use(router);

const pinia = createPinia();
pinia.use(piniaPersistedstatePlugin);
app.use(pinia);
app.mount("#app");
