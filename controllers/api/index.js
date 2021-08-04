const router = require('express').Router();

const userRoutes = require('./user-route');

const patientRoutes = require('./patientRoutes');

const adminTemps = require('./adminTemps');

router.use('/patient', patientRoutes);
router.use('/admins', adminTemps);


module.exports = router;
