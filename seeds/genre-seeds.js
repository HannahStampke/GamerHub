const {Genre} = require("../models");

const genreData = [
    {
        genre_name: "Action-adventure",
    },
    {
        genre_name: "RPG",
    },
    {
        genre_name: "Simulation and sports",
    },
    {
        genre_name: "Sandbox",
    },
    {
        genre_name: "RTS",
    },
    {
        genre_name: "Shooters",
    },
    {
        genre_name: "MOBA",
    },
    {
        genre_name: "Puzzlers and party games",
    },
    {
        genre_name: "Survival and horror",
    },
    {
        genre_name: "Horror",
    },
];

const seedGenres = () => Genre.bulkCreate(genreData);

module.exports = seedGenres;