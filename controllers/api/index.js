const router = require("express").Router();

const gameRoutes = require("./gameRoutes");
const postRoutes = require("./postRoutes");
const commentRoutes = require("./commentRoutes");


router.use("/games", gameRoutes);
router.use("/posts", postRoutes);
router.use("/comments", commentRoutes);


module.exports = router;