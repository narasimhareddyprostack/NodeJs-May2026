import http from 'http'

let server =  http.createServer((request,response)=>{
    response.end("<h1>Good Evening</h1>")
})

server.listen(8080,'127.0.0.1',(err)=>{
    if(err) throw err 
    console.log("Server is Running Superfast")
})