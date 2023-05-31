import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import AppIcon from "./components/AppIcon.vue";
import AppButton from "./components/AppButton.vue";

createApp(App)
  .component("AppIcon", AppIcon)
  .component("AppButton", AppButton)
  .mount("#app");
