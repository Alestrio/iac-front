/*
 *   Copyright (c) 2022 Alexis LEBEL
 *   All rights reserved.
 */
import { createStore } from "vuex";
import { auth } from "./auth.module";

const store = createStore({
  modules: {
    auth,
  },
});

export default store;