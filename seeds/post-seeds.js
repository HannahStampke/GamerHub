const {Post} = require("../models");

const postData = [
    {
        post_text: "Want to play warzone for some dubs.",
        user_id: 4,
        game_id: 7,
        platform_id: 1,
        session_time: '2020-01-01T12:00:00.000Z',
        gamer_level: "intermediate",
        intensity: "sweaty",
    },
    {
        post_text: "casual minecraft session.",
        user_id: 3,
        game_id: 4,
        platform_id: 3,
        session_time: '2021-01-01T12:00:00.000Z',
        gamer_level: "intermediate",
        intensity: "low",
    },
    {
        post_text: "I'm playing Fortnite for the first time.",
        user_id: 2,
        game_id: 3,
        platform_id: 2,
        session_time: '2022-01-01T12:00:00.000Z',
        gamer_level: "intermediate",
        intensity: "low",
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;