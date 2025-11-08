import "./assets/main.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import './assets/tailwind.css';
import { library, config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-free/css/all.min.css";
/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import VueTelInput from "vue-tel-input";
import "vue-tel-input/vue-tel-input.css";
import router from "./router";
import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import { createNotivue } from "notivue";
import "notivue/notification.css"; // Only needed if using built-in notifications
import "notivue/animations.css"; // Only needed if using built-in animations
import { useUserData } from "./localstorage";
import 'animate.css';


const pinia = createPinia();
const useUser = useUserData();
useUser.initializeUser();

const notivue = createNotivue({
  enqueue: false, // default
  limit: 1, // default
});
const app = createApp(App);
app.use(router);
app.use(VueTelInput);
app.use(notivue);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(pinia);
app.mount("#app");
