import express from 'express'
import dotenv from 'dotenv'

//create express app
let app=express()

//load application - environment variable
dotenv.config({path:'./config/dev.env'})
let port = process.env.PORT;
let host= process.env.HOST; 

/*
Usage: Application Root Request
Rest API URL: http://127.0.0.1:8080/ 
Method Type:GET
Required Fields: None
Access Type Public
*/
app.get("/",(req,resp)=>{
    return resp.json({"msg":"Appliction Root request"})
})

/*
Usage: create new User
Rest API URL: http://127.0.0.1:8080/create 
Method Type:POST
Required Fields: username,email,gender or none
Access Type Public
*/
app.post("/create",(req,resp)=>{
    return resp.json({"msg":"New User Created Successfully!"})
})

/*
Usage: Read/fetch users
Rest API URL: http://127.0.0.1:8080/read 
Method Type:GET
Required Fields: None
Access Type Public
*/
app.get("/read",(req,resp)=>{
    return resp.json({"msg":"Reading all users"})
})



/*
Usage:update user
Rest API URL: http://127.0.0.1:8080/update 
Method Type:PUT
Required Fields: None
Access Type Public
*/

app.put("/update",(req,resp)=>{
    return resp.json({"msg":"User Updated successfully!"})
})


/*
Usage: delete user
Rest API URL: http://127.0.0.1:8080/delete
Method Type:DELETE
Required Fields: None
Access Type Public
*/
app.delete("/delete",(req,resp)=>{
    return resp.json({"msg":"User Deleted successfully"})
})


app.listen(port,host,(err)=>{
    if(err) throw err 
    console.log(`Server Running http://${host}:${port}/`)
})