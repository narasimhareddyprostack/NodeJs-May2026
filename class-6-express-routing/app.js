import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan';

import userRouter from './routes/userRouter.js';
import productRouter from './routes/productRouter.js';
import orderRouter from './routes/orderRouter.js';

//create express app 
let app = express()
//load application environment variables
dotenv.config({path:'./config/dev.env'})
let port=process.env.PORT 
let host=process.env.HOST
// http logger middleware
app.use(morgan('combined'))

/*
USAGE: Application Root
Rest API URL:http://127.0.0.1:8080/
Method Type: GET
Required Fields: None
Access Type: Public
*/
app.get("/",(req,resp)=>{
    return resp.json({"msg":"Application Root"})
})
//forward application router
app.use("/user",userRouter);
app.use("/product",productRouter);
app.use("/order",orderRouter);

app.listen(port,host,(err)=>{
    if(err) throw err 
    console.log(`Server Running on http://${host}:${port}/`)
})