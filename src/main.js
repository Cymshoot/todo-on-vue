import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import AppIcon from "./components/AppIcon.vue";
import AppButton from "./components/AppButton.vue";
import AppCheckbox from "./components/AppCheckbox.vue";

createApp(App)
  .component("AppIcon", AppIcon)
  .component("AppButton", AppButton)
  .component("AppCheckbox", AppCheckbox)
  .mount("#app");
