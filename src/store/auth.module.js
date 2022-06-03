/*
 *   Copyright (c) 2022 Alexis LEBEL
 *   All rights reserved.
 */

import authService from "../services/auth.service";

const user = JSON.parse(localStorage.getItem("user"));
const access_token = localStorage.getItem("access_token");

const initialState = user
    ? { status: { loggedIn: true }, user }
    : { status: { loggedIn: false }, user: null };

export const auth = {
    namespaced: true,
    state: initialState,
    actions: {
        login({ commit }, user) {
            return authService.login(user).then(
                user => {
                    commit("loginSuccess", user);
                    return user;
                },
                error => {
                    commit("loginFailure");
                    return Promise.reject(error);
                }
            );
        },

        logout({ commit }) {
            authService.logout();
            commit("logout"); // Appel d'une mutation
        },

        register({ commit }, user) {
            return authService.register(user).then(
                response => {
                    commit("registerSuccess", response); // commit permet de modifier le state (ici le state est initialState)
                    return Promise.resolve(response.data); /* renvoie un objet Promise (valeur pouvant être disponible
                        maintenant, dans le futur, ou jamais, équivalent de ? en Kotlin) qui contient les données
                        de l'utilisateur. */
                },
                error => {
                    commit("registerFailure");
                    return Promise.reject(error);
                }
            );
        }
    },
    mutations: {
        /* Les mutations sont des fonctions qui modifient le state.
        * Cela permet une modification du state de manière asynchrone (évenementielle).
        * Ils sont appelées par les commits.
        */
        loginSuccess(state, user) {
            state.status.loggedIn = true;
            state.user = user;
        },
        loginFailure(state) {
            state.status.loggedIn = false;
            state.user = null;
        },
        logout(state) {
            state.status.loggedIn = false;
            state.user = null;
        },
        registerSuccess(state, user) {
            state.status.loggedIn = false;
        },
        registerFailure(state) {
            state.status.loggedIn = false;
        }
    }
};


            