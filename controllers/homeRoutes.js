const router = require("express").Router();
const { User, Game, Post, Comment, Genre } = require("../models");

router.get('/', async(req, res) => {
    try {
        const gamesData = await Game.findAll({
            include: [{
                    model: Post,
                },
                {
                    model: Genre,
                }
            ]
        });

        const games = gamesData.map((game) => game.get({ plain: true }));


        res.render('home', { games });

    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = router;