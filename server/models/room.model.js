const mongoose = require("mongoose")
const Joi = require('joi');

const Room = mongoose.model('Room', new mongoose.Schema(
    {
        roomNo:{type:Number,required:true},
        status:{type:String,required:true,minLength:3},
        bedCount:{type:Number,required:true},
    },{
        timestamps:true,
    }

  ));
  
//   function validateFood(food) {
//     const schema = Joi.object({
//       name: Joi.string().min(3).max(50).required(),
//       description: Joi.string().min(3).max(500).required(),
//       price: Joi.number().integer().positive().min(2),
//       // rating:Joi.number().integer().positive().max(1)
//     });
  
//     return schema.validate(food);
//   }
  
  exports.Room=Room
  //exports.validateFood = validateFood;