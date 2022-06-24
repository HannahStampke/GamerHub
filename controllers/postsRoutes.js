const router = require("express").Router();
const { User, Game, Post, Comment, Genre, Platform } = require("../models");

router.get("/:id", async (req, res) => {
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
                {
                    model: Comment,
                    include: [
                        {
                            model: User,
                            attributes: ['username']
                        }
                    ]
                }
            ]
        });

        const post = await postData.get({plain: true});

        res.render('post', {post, logged_in: req.session.logged_in})

    } catch (error) {
        res.status(400).json({error, message: "Error getting post data"});
    }
})

module.exports = router;