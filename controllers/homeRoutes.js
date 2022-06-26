const router = require("express").Router();
const { User, Game, Post, Comment, Genre } = require("../models");
const withAuth = require("../utils/auth")

const Sequelize = require("sequelize")

router.get('/', async (req, res) => {
    try {
        const gamesData = await Game.findAll({
            order: Sequelize.literal('rand()') ,
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
        const userName = req.session.username

        // res.status(200).json(posts)

        res.render('home', { games, posts, logged_in: req.session.logged_in, userName});

    } catch (error) {
        res.status(500).json(error)        
    }
});

router.get('/all-games', async (req, res) => {
    try {
        const gamesData = await Game.findAll({
            order: Sequelize.literal('rand()') ,
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

        const allGames = true
        const games = gamesData.map((game) => game.get({plain: true}));
        const posts = postData.map((post) => post.get({plain: true}));
        const userName = req.session.username


        res.render('home', { games, posts, logged_in: req.session.logged_in, userName, allGames});

    } catch (error) {
        res.status(500).json(error)        
    }
});


router.get('/login', async (req, res) => {
    try {
        res.render('login', {logged_in: req.session.logged_in})
    } catch (error) {
        res.status(400).json(error)
    }
})

router.get('/profile', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: {exclude: ['password']}
        });

        const postData = await Post.findAll({
            where: {
                user_id: req.session.user_id
            },
            include: [
                {
                    model: Game
                }
            ]
        })

        const user = await userData.get({plain: true})
        const posts = await postData.map((post) => post.get({plain: true}))


        res.render('profile', {user, posts, logged_in: req.session.logged_in})
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = router;
