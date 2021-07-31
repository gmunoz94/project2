const router = require('express').Router();

const patientRoutes = require('./patientRoutes');

router.use('/patient', patientRoutes);

module.exports = router;