const router = require('express').Router();
const { patient } = require('../../models');
const withAuth = require('../../utils/auth')

// The `/api/patient` endpoint

router.get('/', withAuth, async (req, res) => {
  try {
    const allPatients = await patient.findAll({
    
    });

    console.log(allPatients)
    const patients = allPatients.map((patientList) => patientList.get({ plain: true })
    );
    console.log(patients)
    // res.status(200).json(allPatients);
    res.render('patientsPage', {
      loggedIn: req.session.loggedIn,
      patients,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});