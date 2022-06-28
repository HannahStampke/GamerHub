const router = require("express").Router();
const {Game} = require('../../models');
const withAuth = require("../../utils/auth")

// get all games route
router.get("/", async (req, res) => {
    try {
        const games = await Game.findAll();
        res.status(200).json(games);
    } catch (err) {
        res.status(400).json(err);
    }
});

// create new game route
router.post("/", withAuth, async (req, res) => {
    try {
        const game = await Game.create(req.body);
        res.status(200).json(game);
    } catch (err) {
        res.status(400).json(err);
    }
})

module.exports = router;