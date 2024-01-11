require('dotenv').config();


const express=require('express');

const app=express();
const port=3000;

app.get('/',(req,res)=>{
    res.send("here is Home Page");
})

app.get('/login',(req,res)=>{
     res.send('<h2>Login Page</h2>')
})

app.get('/about',(req,res)=>{
   res.send('About Section')
})

app.get('/signup',(req,res)=>{
   res.send('New User is come on website')
})

app.listen(process.env.PORT,()=>{
    console.log(`App is Listening on port ${port}`);
})