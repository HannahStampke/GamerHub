const router = require("express").Router();
const { Post } = require("../../models");
const withAuth = require("../../utils/auth");

// create new post route requires auth
router.post("/",  withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      user_id: req.session.user_id,
      post_text: req.body.post_text,
      game_id: req.body.game_id,
      platform_id: req.body.platform_id,
      session_time: req.body.session_time,
      gamer_level: req.body.gamer_level,
      intensity: req.body.intensity
    });

    res.status(201).json(newPost);

  } catch (error) {
    res.status(400).json(error);
  }
});

// delete post by id route requires auth
router.delete("/:id",  withAuth, async (req, res) => {
  try {
    const deletedPost = await Post.destroy({
      where: { id: req.params.id },
    });
    res.status(200).json(deletedPost);
  } catch (error) {
    res.status(400).json(error);
  }
});


module.exports = router;
