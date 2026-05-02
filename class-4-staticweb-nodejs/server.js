import http from 'http';
import fs from 'fs'
import path from 'path';

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
    
})
server.listen(8080,'127.0.0.1',(err)=>{
    if(err) throw err;
    console.log(`Server Running on http://127.0.0.1:8080`)
})