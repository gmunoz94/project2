const router = require('express').Router();
const { patient } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const allPatients = await patient.findAll({
    
    });
    res.status(200).json(allPatients);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async  (req, res) => {
  try {
    const thisPatient = await patient.findByPk(req.params.id, {
      
    });

    if (!thisPatient) {
      res.status(404).json({ message: 'No patient with this ID' });
      return;
    }

    res.status(200).json(thisPatient);
  } catch (err) {
    res.status(500).json(err);
  }
});



router.post('/', async (req, res) => {

  try 
  {
    const newPatient = await patient.create(req.body);

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