const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

// comment post route requires auth
router.post('/', withAuth, async (req, res) => {
    try {
        // create new comment with request body
        const newComment = await Comment.create({
            comment_text: req.body.comment_text,
            post_id: req.body.post_id,
            user_id: req.session.user_id
        });

        res.status(201).json(newComment)
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = router;