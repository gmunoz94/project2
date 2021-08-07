const router = require('express').Router();

const userRoutes = require('./user-routes');

const patientRoutes = require('./patientRoutes');

const adminTemps = require('./adminTemps');

const orderRoutes = require('./orderRoutes')


router.use('/patient', patientRoutes);
router.use('/admins', adminTemps);
router.use('/users', userRoutes);
router.use('/orders', orderRoutes);



module.exports = router;
