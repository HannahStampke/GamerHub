const router = require("express").Router();
const { User, Game, Post, Comment, Genre, Platform } = require("../models");
const withAuth = require("../utils/auth")

router.get("/:id", withAuth, async (req, res) => {
  try {
    const gamesData = await Game.findByPk(req.params.id, {
      include: [
        {
          model: Post,
          include: [
            {
              model: User,
            },
            {
              model: Platform,
            },
          ],
        },
        {
          model: Genre,
        },
      ],
    });

    const postData = await Post.findAll({
        where: {game_id: req.params.id},
      include: [
        {
          model: User,
        },
        {
          model: Platform,
        },
      ],
    });

    const posts = await postData.map((post) => post.get({plain: true}))

    const game = await gamesData.get({ plain: true });

    res.render("game", { game, posts, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
