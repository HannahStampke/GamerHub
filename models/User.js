const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

const bcrypt = require("bcrypt");

class User extends Model {
  validPassword(password) {
    return bcrypt.compareSync(password, this.password);
  }
}

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
    discord_id: {
      type: DataTypes.STRING,
    },
    psn_id: {
      type: DataTypes.STRING,
    },
    xbox_id: {
      type: DataTypes.STRING,
    },
  },
  {
    hooks: {
      beforeBulkCreate: async (newUserData) => {

        for (let user of newUserData){
          user.password = await bcrypt.hash(user.password, 10)
        }

        return newUserData;
      },

      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      beforeUpdate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      }
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

// User.prototype.validPassword = function (password) {
//   return bcrypt.compareSync(password, this.password);
// }

module.exports = User;
