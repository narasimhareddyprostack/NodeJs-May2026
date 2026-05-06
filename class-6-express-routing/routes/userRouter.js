import express from 'express'
let router=express.Router()
//User Module API
/*
USAGE:create new User
Rest API URL: http://127.0.0.1:8080/user/create
Method Type:POST
Required Fields:uname,email,loc
Access Type:Public
*/
router.post("/create",(req,resp)=>{
    return resp.json({"msg":"User Created Successfully"})
})

http://127.0.0.1:8080/user/Delete/101 - DELETE
/*
USAGE:delete user by id
Rest API URL: http://127.0.0.1:8080/user/delete/101
Method Type:DELETE
Required Fields:None
Access Type:Public
*/
router.delete("/delete/:uid",(req,resp)=>{
    let uid=req.params.uid;
    return resp.json({"msg":"User Deleted successfully","uid":uid})
})

http://127.0.0.1:8080/user/101        -  GET

/*
USAGE:get user details by id
Rest API URL: http://127.0.0.1:8080/user/101
Method Type:GET
Required Fields:None
Access Type:Public
*/
router.get("/:uid",(req,resp)=>{
    let uid=req.params.uid; 
    return resp.json({"msg":"Getting user details","uid":uid})

})
export default router;