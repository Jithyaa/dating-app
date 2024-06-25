import express from 'express';
import dotenv from 'dotenv'
import connect from './database/connect.js';

dotenv.config()

const app=express()
const port=process.env.PORT || 3000

app.use(express.json())

app.listen(port,()=>{
    connect()
    console.log(`Server is running on ${port}`);
})
