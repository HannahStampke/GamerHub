const Game = require("./Game");
const Genre = require("./Genre");
const Platform = require("./Platform");
const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

Post.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

User.hasMany(Post, {
  foreignKey: "user_id",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
});

Comment.belongsTo(Post, {
  foreignKey: "post_id",
  onDelete: "CASCADE",
});

Post.hasMany(Comment, {
  foreignKey: "post_id",
  onDelete: "CASCADE",
});

Post.belongsTo(Game, {
  foreignKey: "game_id",
  onDelete: "CASCADE",
});

Game.hasMany(Post, {
  foreignKey: "game_id",
});

Post.belongsTo(Platform, {
  foreignKey: "platform_id",
});

Platform.hasMany(Post, {
  foreignKey: "platform_id",
});

User.belongsTo(Platform, {
  foreignKey: "platform_id",
  onDelete: "SET NULL",
});

Platform.hasMany(User, {
  foreignKey: "platform_id",
});

Game.belongsTo(Genre, {
  foreignKey: "genre_id",
  onDelete: "SET NULL",
});

Genre.hasMany(Game, {
  foreignKey: "genre_id",
});

module.exports = {
  Game,
  Genre,
  Platform,
  User,
  Post,
  Comment,
};
