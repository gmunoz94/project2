const router = require('express').Router();
const { User } = require('../models');
//const withAuth = require('../utils/auth'); //redirect to login if not logged in

router.get('/', async (req, res) => {
  //router.get('/', withAuth, async (req, res) => {
  res.render('poop');
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

module.exports = router;
