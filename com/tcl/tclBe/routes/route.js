const express =require('express');
const router =express.Router();
 const users= require('../models/requestModel');
 const  Business=require('../models/creditApplicationModel')

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


  router.post('/api/creditCheck',async (req,res)=>{
    const { 
      businessName,
      legalName,
      address,
      city,
      province,
      country,
      postalCode,
      email,
      phoneNumber,
      faxNumber,
      businessType,
      dateOfIncorporation,
      yearsInBusiness,
      contactName,
      title,
      billingAddress,
      billingCity,
      billingProvince,
      billingCountry,
      billingPostalCode,
      bank,
      branch,
      accountManager,
      accountNumber,
      bankPhoneNumber,
      bankFaxNumber,
      bankAddress,
      creditAmountRequested,
      terms,
      cargoInsuranceRequired
    } = req.body;
     
  const newApplication = new Business({
    businessName,
      legalName,
      address,
      city,
      province,
      country,
      postalCode,
      email,
      phoneNumber,
      faxNumber,
      businessType,
      dateOfIncorporation,
      yearsInBusiness,
      contactName,
      title,
      billingAddress,
      billingCity,
      billingProvince,
      billingCountry,
      billingPostalCode,
      bank,
      branch,
      accountManager,
      accountNumber,
      bankPhoneNumber,
      bankFaxNumber,
      bankAddress,
      creditAmountRequested,
      terms,
      cargoInsuranceRequired
    
  })
  await newApplication.save();
console.log(req.body)
res.json(req.body);
  })

  module.exports = router;