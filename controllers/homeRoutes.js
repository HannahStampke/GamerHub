const router = require("express").Router();
const { User, Game, Post, Comment, Genre } = require("../models");

router.get('/', async (req, res) => {
    try {
        const gamesData = await Game.findAll({
            limit: 4,
            include: [
            {
                model: Genre,
                attributes: ['genre_name']
            }
        ],
        });


        const postData = await Post.findAll({
            limit: 4,
            order: [['session_time', 'DESC']],
            include: [
                {
                    model: Game,
                    attributes: ['game_name']
                },
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        })

        const games = gamesData.map((game) => game.get({plain: true}));
        const posts = postData.map((post) => post.get({plain: true}));

        // res.status(200).json(posts)

        res.render('home', { games, posts, logged_in: req.session.logged_in });

    } catch (error) {
        res.status(500).json(error)        
    }
})

module.exports = router;
