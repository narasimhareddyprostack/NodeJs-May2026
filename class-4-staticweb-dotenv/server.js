import http from 'http';
import fs from 'fs'
import path from 'path';
import dotenv from 'dotenv'

//load the application env variable using dotenv
dotenv.config({path:'./config/dev.env'})

let port=process.env.PORT 
let host=process.env.HOST 

let server=http.createServer((req,resp)=>{
    console.log(req.url)
    if(req.url==="/" || req.url==="/index.html"){
            fs.readFile(path.join(process.cwd(),"staticweb","index.html"),'utf-8',(err,data)=>{
                if(err) throw err;
                resp.end(data)
            })
    }
    if(req.url==="/about.html"){
            fs.readFile(path.join(process.cwd(),"staticweb","about.html"),'utf-8',(err,data)=>{
                if(err) throw err;
                resp.end(data)
            })
    }
    if(req.url==="/services.html"){
            fs.readFile(path.join(process.cwd(),"staticweb","services.html"),'utf-8',(err,data)=>{
                if(err) throw err;
                resp.end(data)
            })
    }
    if(req.url==="/contact.html"){
            fs.readFile(path.join(process.cwd(),"staticweb","contact.html"),'utf-8',(err,data)=>{
                if(err) throw err;
                resp.end(data)
            })
    }
     if(req.url==="/login.html"){
            fs.readFile(path.join(process.cwd(),"staticweb","login.html"),'utf-8',(err,data)=>{
                if(err) throw err;
                resp.end(data)
            })
    }
    
})
server.listen(port,host,(err)=>{
    if(err) throw err;
    console.log(`Server Running on http://${host}:${port}/`)
})