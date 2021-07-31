const router = require('express').Router();
const { admin } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const allAdmins = await admin.findAll({
    
    });
    res.status(200).json(allAdmins);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async  (req, res) => {
  try {
    const thisAdmin = await admin.findByPk(req.params.id, {
      
    });

    if (!thisAdmin) {
      res.status(404).json({ message: 'No patient with this ID' });
      return;
    }

    res.status(200).json(thisAdmin);
  } catch (err) {
    res.status(500).json(err);
  }
});



router.post('/', async (req, res) => {

  try 
  {
    const newAdmin = await admin.create(req.body);

    res.status(200).json(newAdmin);
    
  } catch (err) 
  {
    res.status(500).json(err);
  }
});



router.put('/:id',async (req, res) => {
  try {
    const newAdmin = await admin.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!newAdmin[0]) {
      res.status(404).json({ message: 'No patient with this id!' });
      return;
    }
    res.status(200).json(newAdmin);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id',async  (req, res) => {
  try {
    const newAdmin = await admin.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!newAdmin) {
      res.status(404).json({ message: 'No patient with this id!' });
      return;
    }
    res.status(200).json(newAdmin);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;