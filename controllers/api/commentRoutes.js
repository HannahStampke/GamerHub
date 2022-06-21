const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

router.post('/', withAuth, async (req, res) => {
    try {
        const newComment = await Comment.create({
            comment_text: req.body.comment_text,
            user_id: req.session.user_id,
            post_id: req.body.post_id
        });

        res.status(201).json("comment created successfully", newComment)
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = router;