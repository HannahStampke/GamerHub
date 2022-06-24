const router = require('express').Router();

const api = require('./api');
const homeRoutes = require('./homeRoutes');
const postRoutes = require('./postsRoutes')


router.use('/', homeRoutes);
router.use('/posts', postRoutes);
router.use('/api', api);


module.exports = router;