const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

const bcrypt = require("bcrypt");

class User extends Model {}

User.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [1, 255],
        isAlphanumeric: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8, 255],
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [1, 255],
        isEmail: true,
      },
    },
    platform_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "platform",
        key: "id",
      },
    },
    discord_id: {
      type: DataTypes.STRING,
    },
    psn_id: {
      type: DataTypes.STRING,
    },
    xbox_id: {
      type: DataTypes.STRING,
    },
    steam_id: {
      type: DataTypes.STRING,
    },
    origin_id: {
      type: DataTypes.STRING,
    },
    uplay_id: {
      type: DataTypes.STRING,
    },
    battlenet_id: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
    hooks: {
      beforeCreate(user) {
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(user.password, salt);
      } 
    }
  }
);

User.prototype.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
}

module.exports = User;
