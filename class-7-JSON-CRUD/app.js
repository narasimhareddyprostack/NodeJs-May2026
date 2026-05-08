import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import empRouter from './routes/empRouter.js'

//create express app 
let app=express()

//read form data/POSTMan req body data
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

//http logger middleware
app.use(morgan('tiny'))

//load application enviroment variables
dotenv.config({path:'./config/dev.env'})
let port=process.env.PORT;
let host=process.env.HOST;

//forward all emp requrest empRouter file
app.use("/emp",empRouter);
/*
Usage:Application Root Request
Rest API URL: http://127.0.0.1:8080/
Method Type:GET
Requried Fields:None 
Access Type:Public
*/
app.get("/",(req,resp)=>{
    return resp.json({"msg":"Application Root Requst"})
})


app.listen(port,host,(err)=>{
    if(err) throw err;
    console.log(`Server running on http://${host}:${port}/`)
})
