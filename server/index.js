import express from 'express';
import dotenv from 'dotenv'
import connect from './database/connect.js';
import userRoutes from './routes/userRoutes.js'
import cors from 'cors'

dotenv.config()

const app=express()
const port=process.env.PORT || 3000

app.use(cors({
    origin: 'http://localhost:5173',
    credentials:true,
}));

app.use(express.json())

app.use("/api/auth",userRoutes);

app.listen(port,()=>{
    connect()
    console.log(`Server is running on ${port}`);
})

