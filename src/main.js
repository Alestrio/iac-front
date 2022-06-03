/*
 *   Copyright (c) 2022 Alexis LEBEL
 *   All rights reserved.
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";
import store from "./store";


const app = createApp(App);

// It is important to register the components here !!
import Header from "./components/Header.vue";

app.component('Header', Header);

app.use(router);
app.use(store);
app.mount("#app");