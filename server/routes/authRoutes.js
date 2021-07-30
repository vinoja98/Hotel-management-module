const express = require('express')
const Joi = require('joi');
const jwt=require('jsonwebtoken')
const bcrypt = require('bcrypt');
const _ = require('lodash');
const {User} = require('../models/user.model');
const mongoose = require('mongoose');
const router = express.Router();

router.post('/signin',async (req,res)=>{
   const validation = validate(req.body); 
      if(validation.error) {
        return res.status(400).send(validation.error.details[0].message);
        }
      
      
      try{
        let user = await User.findOne({ email: req.body.email });
      if (!user) return res.status(400).send('Invalid email or password.'); 
      const validPassword = await bcrypt.compare(req.body.password, user.password);
      if (!validPassword) return res.status(400).send('Invalid email or password.');
  
      const token = user.generateAuthToken();
      res.send(token);
      }catch(err){
        return res.status(422).send({error :"must provide email or password"})
      }
   


})
 
function validate(req) {
  const schema =  Joi.object({
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(255).required()
  });

  return schema.validate(req);
}


module.exports = router