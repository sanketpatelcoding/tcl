const express =require('express');
const router =express.Router();
 const users= require('../models/request');

// router.get('/api', (req, res) => {
//     res.send('{"Name":"sanket "},{"Name":"sanket "}');
//    console.log('{"Name":"sanket "},{"Name":"sanket "}');
//   });


  router.post('/postApi',  async(req, res) => {
  
        const {name,email,mobile,inquiry}=req.body
        
        
        const adduser=new users({

          name,email,mobile,inquiry
        })
      
      await adduser.save();
      
      console.log(req.body)
      res.json(req.body)
       
  });

  module.exports = router;