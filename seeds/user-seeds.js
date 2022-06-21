const {User} = require("../models");

const userData = [
    {
        username: "damien",
        password: "damienpassword",
        email: "damien@email.com",
        platform_id: 1,
        discord_id: "damien"
    },
    {
        username: "hannah",
        password: "hannahpassword",
        email: "hannah@email.com",
        platform_id: 2,
        discord_id: "hannah",
        psn_id: "hannah"
    },
    {
        username: "tim",
        password: "timpassword",
        email: "tim@email.com",
        platform_id: 3,
        xbox_id: "tim"
    },
    {
        username: "damneet",
        password: "damneetpassword",
        email: "damneet@email.com",
        platform_id: 5,
        steam_id: "damneet"
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;