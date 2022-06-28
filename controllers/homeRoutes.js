const router = require("express").Router();
const { User, Game, Post, Comment, Genre } = require("../models");
const withAuth = require("../utils/auth")

const Sequelize = require("sequelize")

// homepage route
router.get('/', async (req, res) => {
    try {
        // get 4 games in a random order
        const gamesData = await Game.findAll({
            order: Sequelize.literal('rand()') ,
            limit: 4,
            include: [
            {
                // include games genres
                model: Genre,
                attributes: ['genre_name']
            }
        ],
        });

        // get 4 posts in a descending order on session time
        const postData = await Post.findAll({
            limit: 4,
            order: [['session_time', 'DESC']],
            include: [
                // include the game for that post and the user that posted it
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

        // render the homepage with the games, posts and username of the logged in user
        res.render('home', { games, posts, logged_in: req.session.logged_in, userName});

    } catch (error) {
        res.status(500).json(error)        
    }
});

// get all games route
router.get('/all-games', async (req, res) => {
    try {
        // get all games and include their genre
        const gamesData = await Game.findAll({
            order: Sequelize.literal('rand()') ,
            include: [
            {
                model: Genre,
                attributes: ['genre_name']
            }
        ],
        });

        // get 4 posts ordered by session time
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

        // create an all games boolean to not render the "view all games" button if it already showing all games
        const allGames = true
        const games = gamesData.map((game) => game.get({plain: true}));
        const posts = postData.map((post) => post.get({plain: true}));
        const userName = req.session.username


        // render home page
        res.render('home', { games, posts, logged_in: req.session.logged_in, userName, allGames});

    } catch (error) {
        res.status(500).json(error)        
    }
});

// new post page by game id. with authenticated user
router.get('/new-post/:id', withAuth, async (req, res) => {
    try {
        // get the game data 
        const gameData = await Game.findByPk(req.params.id, {
            include: [{
                model: Genre
            }]
        });

        const game = gameData.get({plain: true});

        // render the new-post page with the selected game
        res.render('new-post',{game, logged_in: req.session.logged_in,})
        
    } catch (error) {
        res.status(400).json(error)
    }
})

// new post method without game. requires user auth
router.get('/new-post', withAuth, async (req, res) => {
    try {
        // get all games to pass to game option in the front end form
        const gameData = await Game.findAll();

        const games = gameData.map(game => game.get({plain: true}))

        // render the new post page without the game selected.
        res.render('new-game-post',{games, logged_in: req.session.logged_in,})
        
    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
})

// login route
router.get('/login', async (req, res) => {
    try {
        res.render('login', {logged_in: req.session.logged_in})
    } catch (error) {
        res.status(400).json(error)
    }
})

// profile page route requires auth
router.get('/profile', withAuth, async (req, res) => {
    try {
        // get user information excluding the password
        const userData = await User.findByPk(req.session.user_id, {
            attributes: {exclude: ['password']}
        });

        // get all posts from that user
        const postData = await Post.findAll({
            where: {
                user_id: req.session.user_id
            },
            include: [
                {
                    // include the game for the post
                    model: Game
                }
            ]
        })

        const user = await userData.get({plain: true})
        const posts = await postData.map((post) => post.get({plain: true}))


        // render profile page with all the data
        res.render('profile', {user, posts, logged_in: req.session.logged_in})
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = router;
