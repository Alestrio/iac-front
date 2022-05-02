import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";


const app = createApp(App);

// It is important to register the components here !!
import Header from "./components/Header.vue";

app.component('Header', Header);

app.use(router);
app.mount("#app");