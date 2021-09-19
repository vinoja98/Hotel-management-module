const auth = require('../middleware/auth');
const router=require('express').Router()
const mongoose=require('mongoose');
const _ = require('lodash');
let {Room}=require('../models/room.model')

router.get('/',(req,res)=>{
   Room.find()
   .then(Rooms=>res.json(Rooms))
   .catch(err=>res.status(422).json('Error: '+err))

   // try{const food = await Food.find().sort('name');
   // res.send(food);
   // }
   // catch{
   //    return res.status(422).send(err.message)
   // }
      
    
})

    

module.exports=router