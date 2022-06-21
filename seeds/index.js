const platformSeeds = require('./platform-seeds');
const userSeeds = require('./user-seeds');
const gameSeeds = require('./game-seeds');
const postSeeds = require('./post-seeds');
const commentSeeds = require('./comment-seeds');
const genreSeeds = require('./genre-seeds');

const sequelize = require('../config/connection.js');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await platformSeeds();
    console.log('\n----- PLATFORMS SEEDED -----\n');

    await genreSeeds();
    console.log('\n----- GENRES SEEDED -----\n');

    await gameSeeds();
    console.log('\n----- GAMES SEEDED -----\n');

    await userSeeds();
    console.log('\n----- USERS SEEDED -----\n');

    await postSeeds();
    console.log('\n----- POSTS SEEDED -----\n');

    await commentSeeds();
    console.log('\n----- COMMENTS SEEDED -----\n');
    
    process.exit(0);
};

seedAll();
