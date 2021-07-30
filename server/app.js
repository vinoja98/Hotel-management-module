const config = require('config');
const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const userRouter=require('./routes/users')
const foodRouter=require('./routes/food')
const authRouter=require('./routes/authRoutes')

require('dotenv').config();

if (!config.get('jwtPrivateKey')) {
    console.error('FATAL ERROR: jwtPrivateKey is not defined.');
    process.exit(1);
  }
const app=express();
const port=process.env.PORT||5000;

app.use(cors());
app.use(express.json());

const uri=process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology: true});
const connection=mongoose.connection;
connection.once('open',()=>{
    console.log('mongodb connection established successfully');
});


app.use('/',userRouter)
app.use('/food',foodRouter);
app.use('/auth',authRouter);


app.listen(port,()=>{
    console.log(`server is running on port:${port}`);
});