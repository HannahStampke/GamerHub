const router = require("express").Router();
const { User, Game, Post, Comment, Genre, Platform } = require("../models");
const withAuth = require("../utils/auth")

router.get("/:id", withAuth, async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: Game,
                    include: [
                        { model: Genre}
                    ]
                },
                {
                    model: User
                },
                {
                    model: Platform
                },
            ]
        });

        const commentData = await Comment.findAll({
            where: {post_id: req.params.id},
            include: [
                {
                    model: User
                }
            ],
            order: [['comment_date', 'ASC']]
        })

        const post = await postData.get({plain: true});
        const comments = await commentData.map((comment) => comment.get({plain: true}))

        res.render('post', {post, comments, logged_in: req.session.logged_in})

    } catch (error) {
        res.status(400).json({error, message: "Error getting post data"});
    }
})

module.exports = router;