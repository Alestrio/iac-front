/*
 *   Copyright (c) 2022 Alexis LEBEL
 *   All rights reserved.
 */

/**********
 * This is the model for the user.
 **********/

class User {
    constructor(username, password, email) {
        this.username = username;
        this.password = password;
        this.email = email;
    }
}

export default User;