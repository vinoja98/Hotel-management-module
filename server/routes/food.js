const auth = require('../middleware/auth');
const router=require('express').Router()
const mongoose=require('mongoose');
const _ = require('lodash');
let {Food,validateFood}=require('../models/food.model')

router.get('/',(req,res)=>{
   Food.find().sort('name')
   .then(Foods=>res.json(Foods))
   .catch(err=>res.status(422).json('Error: '+err))

   // try{const food = await Food.find().sort('name');
   // res.send(food);
   // }
   // catch{
   //    return res.status(422).send(err.message)
   // }
      
    
})

router.post('/add', auth, async (req, res) => {
    const validation = validateFood(req.body); 
    if(validation.error) {
      return res.status(400).json(validation.error.details[0].message);
      }      
   try{
      let newFood = await Food.findOne({ name: req.body.name });
      if (newFood) return res.status(400).send('Food Item already added.');
      newFood = new Food(_.pick(req.body, ['name', 'description','price','rating']));

      await newFood.save();
      // res.send(_.pick(newFood, ['_id', 'name','description','price','rating']));
      res.json(_.pick(newFood, ['_id', 'name','description','price','rating']));
   }catch(err){
      return res.status(422).send(err.message)
   }
})

router.delete('/:id',auth,(req,res)=>{
   Food.findByIdAndRemove(req.params.id)
    .then(()=>res.json('food deleted'))
    .catch(err=>res.status(400).json('Error: '+err))
})

router.post('/update/:id',auth,async(req,res)=>{
   const validation = validateFood(req.body); 
   if(validation.error) {
     return res.status(400).json(validation.error.details[0].message);
     }    
try{
   let food=await Food.findByIdAndUpdate(req.params.id,{
   name:req.body.name,
   price:Number(req.body.price),
   description:req.body.description,
   rating:Number(req.body.rating)
   })
   res.json(food)
}
catch(err){
   return res.status(422).send(err.message)
 }
   // Food.findByIdAndUpdate(req.params.id,{
   //     name:req.body.name,
   //     price:Number(req.body.price),
   //     description:req.body.description,
   //     rating:Number(req.body.rating)
   // }).then(data=>{
   //     console.log(data)
   //     res.send(data)
   // })
   // .catch(err=>{
   //     console.log(err)
   // })
   })



router.route('/:id').get((req,res)=>{
    Food.findById(req.params.id)
    .then(Food=>res.json(Food))
    .catch(err=>res.status(400).json('Error: '+err))
     
 })


    
router.route('/delete').delete((req,res)=>{
    Food.findByIdAndRemove(req.params.id)
    .then(()=>res.json('Food deleted'))
    .catch(err=>res.status(400).json('Error: '+err))
})
    

module.exports=router