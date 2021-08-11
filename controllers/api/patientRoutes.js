const router = require('express').Router();
const { patient } = require('../../models');
const withAuth = require('../../utils/auth')

// The `/api/patient` endpoint

router.get('/', withAuth, async (req, res) => {
  try {
    const allPatients = await patient.findAll();

    // console.log(allPatients)
    const patients = allPatients.map((patientList) => patientList.get({ plain: true })
    //.map new array patientlist is new variable // then gets a clean array
    );
    // console.log(patients)
    // res.status(200).json(allPatients);
    res.render('patientsPage', {
      loggedIn: req.session.loggedIn,
      patients,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', withAuth, async  (req, res) => {
  try {
    const thisPatient = await patient.findByPk(req.params.id);

    if (!thisPatient) {
      res.status(404).json({ message: 'No patient with this ID' });
      return;
    }

    const currentPatient = thisPatient.get({ plain: true })
    
    console.log(currentPatient)

    // res.status(200).json(thisPatient);
    res.render('patient-page', {
      loggedIn: req.session.loggedIn,
      currentPatient
    })
  } catch (err) {
    res.status(500).json(err);
  }
});



router.post('/', async (req, res) => {
  try 
  {
    const newPatient = await patient.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      phone_number: req.body.phone_number,
      dateOfBirth: req.body.dateOfBirth
    });

    res.status(200).json(newPatient);
    
  } catch (err) 
  {
    res.status(500).json(err);
  }
});



router.put('/:id',async (req, res) => {
  try {
    const newPatient = await patient.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!newPatient[0]) {
      res.status(404).json({ message: 'No patient with this id!' });
      return;
    }
    res.status(200).json(newPatient);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id',async  (req, res) => {
  try {
    const newPatient = await patient.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!newPatient) {
      res.status(404).json({ message: 'No patient with this id!' });
      return;
    }
    res.status(200).json(newPatient);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;