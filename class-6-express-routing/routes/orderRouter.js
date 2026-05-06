import express from 'express'
let router=express.Router()
//Order Module API
/*
USAGE:fetch all orders
Rest API URL: http://127.0.0.1:8080/order/read
Method Type:GET
Required Fields:None
Access Type:Public
*/
router.get("/read",(req,resp)=>{
    return resp.json({"msg":"Fetching all order"})
})

export default router;