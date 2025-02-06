class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    static readUsers() {
        const fs = require('fs');
        const path = require('path');
        const userFilePath = path.join(__dirname, '../users.json');

        if (!fs.existsSync(userFilePath)) {
            return [];
        }
        const data = fs.readFileSync(userFilePath);
        return JSON.parse(data);
    }

    static writeUsers(users) {
        const fs = require('fs');
        const path = require('path');
        const userFilePath = path.join(__dirname, '../users.json');

        fs.writeFileSync(userFilePath, JSON.stringify(users, null, 2));
    }

    static createUser(userData) {
        const users = User.readUsers();
        const newUser = new User(userData.name, userData.email, userData.password);
        users.push(newUser);
        User.writeUsers(users);
        return newUser;
    }

    static updateUser(email, updatedData) {
        const users = User.readUsers();
        const userIndex = users.findIndex(user => user.email === email);
        if (userIndex !== -1) {
            users[userIndex] = { ...users[userIndex], ...updatedData };
            User.writeUsers(users);
            return users[userIndex];
        }
        return null;
    }

    static deleteUser(email) {
        const users = User.readUsers();
        const updatedUsers = users.filter(user => user.email !== email);
        User.writeUsers(updatedUsers);
        return updatedUsers;
    }
}

module.exports = User;