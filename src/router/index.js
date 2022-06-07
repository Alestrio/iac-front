/*
 *   Copyright (c) 2022 Alexis LEBEL
 *   All rights reserved.
 */
import { createRouter, createWebHistory } from "vue-router";
import Auth from "../views/Auth/Auth.vue";
import Dashboard from "../views/Dashboard/Dashboard.vue";
import Editeur from "../views/Editeur/Editeur.vue";
import Logs from "../views/Logs/Logs.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "Auth",
      component: Auth,
    },
    {
      path: "/",
      name: "Dashboard",
      component: Dashboard,
    },
    {
      path: "/editeur",
      name: "Editeur",
      component: Editeur,
    },
    {
      path: "/logs",
      name: "Logs",
      component: Logs,
    }
  ],
});

export default router;
