const router = require('express').Router();
const { admin } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const adminData = await admin.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']],
    });

    const admins = adminData.map((project) => project.get({ plain: true }));

    res.render('homepage', {
      admins,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
