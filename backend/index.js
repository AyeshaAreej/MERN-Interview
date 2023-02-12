const express = require('express') 
const path = require('path');
const bodyParser = require('body-parser')
const Stripe= require('stripe')(process.env.SECRET_KEY);
require('dotenv').config();
const db = require('./config/mongoose')
const userRouter=require('./routes/userRouter')
const middleware = require('./middlewares/mymiddleware')
const port = process.env.PORT || 8000;

const cors = require("cors")
const app= express();

app.use(cors())
app.use(express.json())
app.use(bodyParser.json());
app.use(express.static('assets'))
app.use(bodyParser.urlencoded({extended : true}))

app.use(userRouter)




app.listen(8000,(err)=>{
    if(err){ console.log('Error in running'); }
    console.log('express is running seccessfully on port 8000')
});