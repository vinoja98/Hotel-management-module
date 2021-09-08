const auth = require('../middleware/auth');
const router=require('express').Router()
const mongoose=require('mongoose');
const _ = require('lodash');
let {Review}=require('../models/review.model')

router.get('/',(req,res)=>{
   Review.find()
   .then(Reviews=>res.json(Reviews))
   .catch(err=>res.status(422).json('Error: '+err))

   // try{const food = await Food.find().sort('name');
   // res.send(food);
   // }
   // catch{
   //    return res.status(422).send(err.message)
   // }
      
    
})

    

module.exports=router