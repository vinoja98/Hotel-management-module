const mongoose = require("mongoose")
const Joi = require('joi');

const Food = mongoose.model('Food', new mongoose.Schema(
    {
        name:{type:String,required:true,minLength:3},
        description:{type:String,required:true,minLength:3},
        price:{type:Number,required:true,minLength:2},
        // rating:{type:Number,required:true},
    },{
        timestamps:true,
    }

  ));
  
  function validateFood(food) {
    const schema = Joi.object({
      name: Joi.string().min(3).max(50).required(),
      description: Joi.string().min(3).max(500).required(),
      price: Joi.number().integer().positive().min(2),
      // rating:Joi.number().integer().positive().max(1)
    });
  
    return schema.validate(food);
  }
  
  exports.Food = Food; 
  exports.validateFood = validateFood;