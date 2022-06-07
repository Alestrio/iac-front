/*
 *   Copyright (c) 2022 Alexis LEBEL
 *   All rights reserved.
 */


/******************************************
 * This is the authentication service
 * This is a class providing three methods:
 * - login: login a user
 * - logout: logout a user
 * - register: register a user
 * 
 * when the user is logged in, the user's token is stored in the local storage (in the browser)
 ******************************************/

import axios from 'axios';

const api_url = import.meta.env.VITE_APP_API_ADDR;

class AuthService {
    async login(user) {
        const params = new URLSearchParams();
        params.append('username', user.username);
        params.append('password', user.password);

        // gathering the token
        const response = await axios
            .post(api_url + '/token', params)
            .then(response => {
                if (response.data.access_token) {
                    localStorage.setItem('access_token', response.data.access_token);
                }
                return response.data;
            })
            .catch(error => {
                console.log(error);
                return error.response.data;
            });

        // gathering the user with /users/me
        console.log(localStorage.getItem('access_token'));
        const userResponse = await axios
            .get(api_url + '/users/me/', {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('access_token')
                }
            })
            .then(response => {
                localStorage.setItem('user', JSON.stringify(response.data));
            });
    }

    logout() {
        localStorage.removeItem('access_token');
        localStorage.removeItem('user');
    }

    register(user) {
        return axios
            .post(api_url + '/users/register', {
                username: user.username,
                password: user.password,
                email: user.email
            });
    }
}

export default new AuthService();