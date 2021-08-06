const router = require('express').Router();
const { order } = require('../../models');

// The `/api/patient` endpoint

router.get('/', async (req, res) => {
  try {
    const orders = await order.findAll({
    
    });
    res.status(200).json(allPatients);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async  (req, res) => {
  try {
    const orders = await order.findByPk(req.params.id, {
      
    });

    if (!order) {
      res.status(404).json({ message: 'No patient with this ID' });
      return;
    }

    res.status(200).json(order);
  } catch (err) {
    res.status(500).json(err);
  }
});



router.post('/', async (req, res) => {
  try 
  {
    const orders = await order.create({
      patient_id: req.body.first_name,
      id: req.body.id,
      type: req.body.type,
      orderstatus: req.body.orderstatus,
     
    });

    res.status(200).json(newPatient);
    
  } catch (err) 
  {
    res.status(500).json(err);
  }
});



router.put('/:id',async (req, res) => {
  try {
    const orders = await order.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!order[0]) {
      res.status(404).json({ message: 'No order here boss!' });
      return;
    }
    res.status(200).json(order);
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
      res.status(404).json({ message: 'No order here boss!' });
      return;
    }
    res.status(200).json(newPatient);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;