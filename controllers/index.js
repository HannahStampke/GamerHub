const router = require('express').Router();

const api = require('./api');
const homeRoutes = require('./homeRoutes');
const postRoutes = require('./postsRoutes')
const gamesRoutes = require('./gamesRoutes');


router.use('/', homeRoutes);
router.use('/posts', postRoutes);
router.use('/games', gamesRoutes);
router.use('/api', api);

// wildcard route to send other paths back to the homepage
router.use('*', homeRoutes);


module.exports = router;