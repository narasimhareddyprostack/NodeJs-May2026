import express from 'express'
//create express app
let app= express()

//Application Root - API
/*
Usage: Application Root Request
Rest API URL: http://127.0.0.1:8080/ 
Method Type:GET
Required Fields: None
Access Type Public
*/
app.get("/",(req,resp)=>{
    resp.send("Welcome to Express app")
})
app.listen(8080,'127.0.0.1',(err)=>{
    if(err) throw err
    console.log("Server running")
})


app.post('/login', (req, res) => {
  res.json({ message: "User logged in" });
});