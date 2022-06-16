const { Game } = require("../models");

const gameData = [
  {
    game_name: "Valorant",
    genre_id: 6,
    filename: 'Valorant_img.jpg',
  },
  {
    game_name: "Overwatch",
    genre_id: 6,
    filename: 'Overwatch_img.jpg',
  },
  {
    game_name: "Fortnite",
    genre_id: 9,
    filename: 'Fortnite_img.jpg',
  },
  {
    game_name: "Minecraft",
    genre_id: 4,
    filename: 'Minecraft_img.jpg',
  },
  {
    game_name: "Counter Strike: Global Offensive",
    genre_id: 6,
    filename: 'CSGO_img.jpg',
  },
  {
    game_name: "League of Legends",
    genre_id: 7,
    filename: 'League_of_legends_img.jpg',
  },
  {
    game_name: "Call of Duty: Warzone",
    genre_id: 6,
    filename: 'COD_warzone_img.jpg',
  },
  {
    game_name: "Dota 2",
    genre_id: 7,
    filename: 'Dota_2_img.jpg',
  },
  {
    game_name: "Rocket League",
    genre_id: 3,
    filename: 'Rocket_league_img.jpg',
  },
  {
    game_name: "Forza Horizon 5",
    genre_id: 3,
    filename: 'Forza_Horizon_5_img.jpg',
  },
];

const seedGames = () => Game.bulkCreate(gameData);

module.exports = seedGames;
