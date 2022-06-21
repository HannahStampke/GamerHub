const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

class Game extends Model {}

Game.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    game_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genre_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "genre",
        key: "id",
      },
    },
    filename: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "game",
  }
);

module.exports = Game;
