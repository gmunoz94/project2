const router = require('express').Router();

const userRoutes = require('./user-routes');

const patientRoutes = require('./patientRoutes');

const adminTemps = require('./adminTemps');

router.use('/patient', patientRoutes);
router.use('/admins', adminTemps);
router.use('/users', userRoutes);


module.exports = router;
