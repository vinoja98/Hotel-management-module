const mongoose = require("mongoose")
const Joi = require('joi');
const Schema=mongoose.Schema

const foodSchema=new Schema({
    name:{type:String,required:true,unique:true,minLength:3},
    description:{type:String,required:true,minLength:3},
    price:{type:Number,required:true,minLength:2},
    rating:{type:Number,required:true},
},{
    timestamps:true,
})

const Food=mongoose.model('Food',foodSchema)
module.exports=Food