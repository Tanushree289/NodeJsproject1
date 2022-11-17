const express = require('express');

const app = express();
const data1 = require('./Routes/Bollywood');
const cors = require('cors');

app.use(cors);

app.use('/home',data1)

app.get('/',(req,res)=>{
    res.write("hello");
    res.end()
})

app.listen(process.env.PORT||8080,()=>{
    console.log("server started...")
})