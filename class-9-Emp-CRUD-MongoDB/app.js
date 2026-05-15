import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import empRouter from './routes/empRouter.js';


//create express app 
let app=express();

//load application config env variables
dotenv.config({path:'./config/dev.env'})
let port=process.env.PORT;
let host=process.env.HOST;
let mongoDB_URL=process.env.MONGODB_LOCAL_URL;


//read form or POSTMAN Tool data
app.use(express.json())

//HTTP Logger moddileware
app.use(morgan('tiny'))

//enable cors policilies

/*
usage: Application Root request
Rest API URL: http://127.0.0.1:8080/
Method Type:GET 
Request Fields: None 
Access Type: Public
*/
app.get("/",(req,resp)=>{
    return resp.status(200).json({"msg":"Appl Root Requst"})
})
//forward all emp related Rest API to empRouter file
app.use("/emp",empRouter);

//connect to mongodb Database
mongoose.connect(mongoDB_URL)
        .then((resp)=>{
            console.log("MongoDB Connection Successfull")
        })
        .catch((err)=>{
            console.log("Unable to Connect MongoDB")
        })

//create express app and provide port and host
app.listen(port,host,(err)=>{
    if(err) throw err 
    console.log(`server running on http://${host}:${port}/`)
})


