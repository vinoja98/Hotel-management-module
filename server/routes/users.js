const auth = require('../middleware/auth');
//here auth means authorization , not authentication
//authentication means login
const jwt = require('jsonwebtoken');
const config = require('config');
const bcrypt = require('bcrypt');
const _ = require('lodash');
const {User, validate} = require('../models/user.model');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/me', auth, async (req, res) => {
  const user = await User.findById(req.user._id).select('-password');
  res.send(user);
});

router.post('/signup', async (req, res) => {
  
  const validation = validate(req.body); 
  if(validation.error) {
    return res.status(400).json(validation.error.details[0].message);
    }

try{
    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).json('User already registered.');
    user = new User(_.pick(req.body, ['name', 'email', 'password','nic','contactNo']));
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();

    const token = user.generateAuthToken();
    res.header('x-auth-token', token).json(_.pick(user, ['_id', 'name', 'email','nic','contactNo']));
}catch(err){
    return res.status(422).json(err.message)
  }
  
});

module.exports = router; 

   

    
    

