const router = require("express").router();
const { Post, Game } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      post_text: req.body.text,
      user_id: req.session.user_id,
      game_id: req.body.game_id,
      platform_id: req.body.platform,
      session_time: req.body.session_time,
      gamer_level: req.body.gamer_level,
      intensity: req.body.intensity,
    });

    res.status(201).json("Post created successfully", newPost);

    const games = await Game.findOne({
      where: { id: req.body.game_id },
    });

    res.render("/game", games, logged_in);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const deletedPost = await Post.destroy({
      where: { id: req.params.id },
    });
    res.status(200).json("Post deleted successfully", deletedPost);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
