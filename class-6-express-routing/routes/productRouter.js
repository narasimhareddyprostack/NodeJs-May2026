import express from 'express'
let router=express.Router()
//Product Module API

/*
USAGE:create new Product
Rest API URL: http://127.0.0.1:8080/product/
Method Type:POST
Required Fields:pname,price,qty
Access Type:Public
*/
router.post("/",(req,resp)=>{
    return resp.json({"msg":"New Product created Successfully"})
})


export default router;