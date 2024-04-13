//  Bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import "@popperjs/core";

//  Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faMoon, faSquare } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
library.add(faMoon, faSun, faSquare, faSquareCheck, faHeart);

// CSS
import "./assets/main.css";

// Vue
import { createApp } from "vue";
import App from "./App.vue";

// Pinia
import { createPinia } from "pinia";

// Router
import router from "./router";

// Mount App
const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);
app.use(createPinia());
app.use(router);

app.mount("#app");
