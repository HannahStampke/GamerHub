const { Game } = require("../models");

const gameData = [
  {
    game_name: "Valorant",
    genre_id: 6,
  },
  {
    game_name: "Overwatch",
    genre_id: 6,
  },
  {
    game_name: "Fortnite",
    genre_id: 9,
  },
  {
    game_name: "Minecraft",
    genre_id: 4,
  },
  {
    game_name: "Counter Strike: Global Offensive",
    genre_id: 6,
  },
  {
    game_name: "League of Legends",
    genre_id: 7,
  },
  {
    game_name: "Call of Duty: Warzone",
    genre_id: 6,
  },
  {
    game_name: "Dota 2",
    genre_id: 7,
  },
  {
    game_name: "Rocket League",
    genre_id: 3,
  },
  {
    game_name: "Forza Horizon 5",
    genre_id: 3,
  },
];

const seedGames = () => Game.bulkCreate(gameData);

module.exports = seedGames;
