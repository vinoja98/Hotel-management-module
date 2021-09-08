const mongoose = require("mongoose")
const Joi = require('joi');

const Review = mongoose.model('Review', new mongoose.Schema(
    {
        review:{type:String,required:true,minLength:3},
        recommendation:{type:String,required:true,minLength:3},
        rating:{type:Number,required:true},
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
  
  exports.Review = Review; 
  //exports.validateFood = validateFood;