import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors'
import connectDb from './config/connectdb.js'
import userModel from './models/user.js'
import myValidation from './middelwares/joiMiddeleware.js';
import userRoutes from './routes/userRoutes.js';
const app = express();
const PORT = process.env.PORT
const DATABASE_URL = process.env.DATABASE_URL

// cors policy

app.use(cors())  

// connection to database

connectDb(DATABASE_URL);

// json middelware

app.use(express.json())

app.post('/',async(req,res)=>{
   try{
    // await myValidation.user.validateAsync(req.body);
    let obj = await userModel.create(req.body);
    res.send(obj);
   }catch(err){
    res.status(400).send(err);
   }
})
// connected to port

app.listen(PORT,()=>{


    console.log(`connected to ${PORT}`);
});



