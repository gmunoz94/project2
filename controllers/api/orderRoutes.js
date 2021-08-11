const router = require('express').Router();
const { order, patient } = require('../../models');

// The `/api/orders` endpoint

router.get('/', async (req, res) => {
  try {
    const orders = await order.findAll({
      include: [
        {
          model: patient,
          attributes: [ 'first_name', 'last_name','phone_number', 'email' ]
        }
      ]
    });  

    const ptOrders = orders.map((theseOrders) => theseOrders.get({ plain:true}))
    console.log(ptOrders)
    res
      .render('allOrders', {
        loggedIn: req.session.loggedIn,
        ptOrders,
      })
      // .status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/allOrders/:id/', async  (req, res) => {
  try {
    const allOrders = await order.findAll({ 
      where: { 'patient_id': req.params.id },
      include: [{
        model: patient,
      }]
    });
    
    if (!allOrders) {
      res.status(404).json({ message: 'No patient with this ID' });
      return;
    }
    
    const newAllOrders = allOrders.map((orderss) => orderss.get({ plain: true }));
    
    console.log(newAllOrders)

    res.render('ptAllOrders', {
      loggedIn: req.session.loggedIn,
      thisPt: req.params.id,
      newAllOrders,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/pendingOrders/:id/', async  (req, res) => {
  try {
    const newOrders = await order.findAll({ 
      where: { 
        'patient_id': req.params.id ,
        'status': [ 'pending', 'ready' ]
      },
      include: [{
        model: patient,
      }]
    });
    
    if (!newOrders) {
      res.status(404).json({ message: 'No patient with this ID' });
      return;
    }
    
    const pendingOrders = newOrders.map((orderss) => orderss.get({ plain: true }));
    
    console.log(pendingOrders)

    res.render('ptPendingOrders', {
      loggedIn: req.session.loggedIn,
      thisPt: req.params.id,
      pendingOrders,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/completeOrders/:id/', async  (req, res) => {
  try {
    const newOrders = await order.findAll({ 
      where: { 
        'patient_id': req.params.id, 
        'status': [ 'complete' ]
      },
      include: [{
        model: patient,
      }]
    });
    
    if (!newOrders) {
      res.status(404).json({ message: 'No patient with this ID' });
      return;
    }
    
    const completeOrders = newOrders.map((orderss) => orderss.get({ plain: true }));
    
    console.log(completeOrders)

    res.render('ptCompleteOrders', {
      loggedIn: req.session.loggedIn,
      thisPt: req.params.id,
      completeOrders,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.post('/', async (req, res) => {
  try 
  {

    const orders = await order.create({
      individualHooks: true,
      patient_id: req.body.patient_id,
      type: req.body.type,
      status: req.body.status,
    });

    res.status(200).json(orders);
    
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
      individualHooks: true
    });

    if (!orders) {
      res.status(404).json({ message: 'No order here boss!' });
      return;
    }
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id',async  (req, res) => {
  try {
    const orders = await order.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!orders) {
      res.status(404).json({ message: 'No order here boss!' });
      return;
    }
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;