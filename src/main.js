import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import AppIcon from "./components/AppIcon.vue";

createApp(App).component("AppIcon", AppIcon).mount("#app");
