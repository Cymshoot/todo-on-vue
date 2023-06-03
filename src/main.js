import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import { createPinia } from "pinia";

import "./style.css";

import App from "./App.vue";
import AppIcon from "./components/AppIcon.vue";
import AppButton from "./components/AppButton.vue";
import AppCheckbox from "./components/AppCheckbox.vue";
import PageMain from "./pages/PageMain.vue";
import PageArchive from "./pages/PageArchive.vue";

const routes = [
  { path: "/", component: PageMain },
  { path: "/archive", component: PageArchive },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const pinia = createPinia();

createApp(App)
  .component("AppIcon", AppIcon)
  .component("AppButton", AppButton)
  .component("AppCheckbox", AppCheckbox)
  .use(router)
  .use(pinia)
  .mount("#app");
