const router=require('express').Router()
const mongoose=require('mongoose');
let {Food,validateFood}=require('../models/food.model')

router.route('/').get((req,res)=>{
   Food.find().sort('name')
   .then(Foods=>res.json(Foods))
   .catch(err=>res.status(400).json('Error: '+err))
    
})

router.route('/add').post((req,res)=>{
    // const { error } = validateFood(req.body); 
    // if (error) return res.status(400).send(error.message);

    const name=req.body.name
    const description=req.body.description
    const price=Number(req.body.price)
    const rating=Number(req.body.rating)

    const newFood=new Food({name,description,price,rating})
    //save to mongodb database
    newFood.save()
    .then(()=>res.json('Food added'))
    .catch(err=>res.status(400).json('Error: '+err))

})

router.route('/:id').get((req,res)=>{
    Food.findById(req.params.id)
    .then(Food=>res.json(Food))
    .catch(err=>res.status(400).json('Error: '+err))
     
 })

 router.route('/:id').delete((req,res)=>{
    //  const foodId=JSON.parse(req.params.id)
    // const objectId = mongoose.Types.ObjectId(foodId);         
    Food.findByIdAndRemove(req.params.id)
    .then(()=>res.json('Food deleted'))
    .catch(err=>res.status(400).json('Error: '+err))
     
 })

 router.route('/update/:id').post((req,res)=>{
    // const { error } = validateFood(req.body); 
    // if (error) return res.status(400).send(error.details[0].message);

    Food.findById(req.params.id)
    .then(Food=>{
            Food.name=req.body.name
            Food.description=req.body.description
            Food.price=Number(req.body.price)
            Food.rating=Number(req.body.rating)
            
            //save to mongodb database
            Food.save()
            .then(()=>res.json('Food updated'))
            .catch(err=>res.status(400).json('Error: '+err))
        })
        .catch(err=>res.status(400).json('Error: '+err))
    })
    
router.route('/delete').delete((req,res)=>{
    Food.findByIdAndRemove(req.params.id)
    .then(()=>res.json('Food deleted'))
    .catch(err=>res.status(400).json('Error: '+err))
})
    

module.exports=router