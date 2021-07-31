const router = require('express').Router();

const homeRoutes = require('./home-routes.js');
//const api = require('./api');
router.use('/', homeRoutes);
//router.use('/', api);
module.exports = router;