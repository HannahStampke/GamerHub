const {User} = require("../models");

const userData = [
    {
        username: "damien",
        password: "damienpassword",
        email: "damien@email.com",
        discord_id: "damien"
    },
    {
        username: "hannah",
        password: "hannahpassword",
        email: "hannah@email.com",
        discord_id: "hannah",
        psn_id: "hannah"
    },
    {
        username: "tim",
        password: "timpassword",
        email: "tim@email.com",
        xbox_id: "tim"
    },
    {
        username: "damneet",
        password: "damneetpassword",
        email: "damneet@email.com",
        discord_id: "damneet"
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;