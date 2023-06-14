const express =require('express');
const router =express.Router();

router.get('/api', (req, res) => {
    res.send('routing from maplesoftinf');
  });


  router.post('/postApi', (req, res) => {
    res.send({"Name":"sanket "});
  });


  module.exports = router;