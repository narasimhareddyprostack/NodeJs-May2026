import express, { Router } from 'express';
import EmployeeModel from '../models/Employee.js';
let router = express.Router();

/*
usage: fetch all employees
Rest API URL: http://127.0.0.1:8080/emp/read
Method Type:GET 
Request Fields: None 
Access Type: Public
*/
router.get("/read",async(req,resp)=>{
    try {
        let employees=await EmployeeModel.find();
        return resp.status(200).json(employees);
        
    } catch (error) {
        return resp.status(404).json({"msg":"Unable to fetch"})
    }
});


/*
router.post();
router.get();
router.put()
router.delete();
*/

export default router;
