const express=require('express');
const app=express();
const dotenv=require('dotenv');
const mongoose=require('mongoose');
const authRoute=require('./routes/auth')

dotenv.config();

app.use(express.json())

const PORT= 5000


mongoose.connect(process.env.CONNECT_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(console.log('^Connected To MOngoDB'))
.catch((err)=>{console.log(err)})

app.use('/auth',authRoute)



app.listen(PORT,()=>{
    console.log(`Backend running ${PORT}`)
})