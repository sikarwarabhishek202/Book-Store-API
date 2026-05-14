require('dotenv').config()
const express=require('express');
const connectToDB = require('./Database/db');
const bookRoutes=require('./routes/book-route')

 

const app=express();
//middelware
app.use(express.json());

 connectToDB();
const PORT=process.env.PORT || 3000;

// routes create here
app.use('/api/books',bookRoutes)

app.listen(PORT,()=>{
    console.log(`Server is running on  port ${PORT}`);
})

// connect database