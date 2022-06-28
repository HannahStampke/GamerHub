const router = require("express").Router();
const { User, Game, Post, Comment, Genre, Platform } = require("../models");
const withAuth = require("../utils/auth")

// get post by id route
router.get("/:id", withAuth, async (req, res) => {
    try {
        // get post by primary key
        const postData = await Post.findByPk(req.params.id, {
            include: [
                {
                    // include game model with genre
                    model: Game,
                    include: [
                        { model: Genre}
                    ]
                },
                {
                    // include model user for the given post
                    model: User
                },
                {
                    // include model platform for the given post
                    model: Platform
                },
            ]
        });

        // also get all the comments for the given post 
        const commentData = await Comment.findAll({
            where: {post_id: req.params.id},
            include: [
                {
                    // including the user for each comment
                    model: User
                }
            ],
            // order the comments in ascending order by creation date
            order: [['comment_date', 'ASC']]
        })

        const post = await postData.get({plain: true});
        const comments = await commentData.map((comment) => comment.get({plain: true}))

        // render the post.handlebars with post, comment and logged in data
        res.render('post', {post, comments, logged_in: req.session.logged_in})

    } catch (error) {
        res.status(400).json({error, message: "Error getting post data"});
    }
})

module.exports = router;