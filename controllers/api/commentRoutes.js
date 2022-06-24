const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

router.post('/', async (req, res) => {
    try {
        const newComment = await Comment.create(req.body);

        res.status(201).json(newComment)
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = router;