/*
 *   Copyright (c) 2022 Alexis LEBEL
 *   All rights reserved.
 */


/****************
 * This is the auth header. It provides a helper method checking the local storage for the token,
 * and returning the bearer authorization header if the user is logged in.
 ****************/

export default function authHeader() {
    let user = JSON.parse(localStorage.getItem('user'));
    let access_token = localStorage.getItem('access_token');

    if (user && access_token) {
        return { Authorization: 'Bearer ' + access_token };
    }
    else {
        return {};
    }
}