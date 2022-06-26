const router = require("express").Router();
const {Game} = require('../../models');

router.get("/", async (req, res) => {
    try {
        const games = await Game.findAll();
        res.status(200).json(games);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post("/", async (req, res) => {
    try {
        const game = await Game.create(req.body);
        res.status(200).json(game);
    } catch (err) {
        res.status(400).json(err);
    }
})

module.exports = router;