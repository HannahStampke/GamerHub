const router = require("express").Router();
const { Post } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/",  withAuth, async (req, res) => {
  try {
    const newPost = await Post.create(req.body
    );

    res.status(201).json(newPost);

  } catch (error) {
    res.status(400).json(error);
  }
});

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
