import express, { Router } from 'express';
import EmployeeModel from '../models/Employee.js';
let router = express.Router();

/*
usage: create new employee
Rest API URL: http://127.0.0.1:8080/emp/create
Method Type:POST
Request Fields: eid,ename,esal 
Access Type: Public  prostack@gmail.com
*/
router.post("/create",async(req,resp)=>{
    try {
        let employee=req.body;
        console.log(employee);//3
        let emp_obj=await EmployeeModel.findOne({"eid":employee.eid})
        console.log(emp_obj)
        if(emp_obj){
                return resp.status(404).json({"msg":"Employee already Exists"})
        }
        emp_obj=new EmployeeModel(employee)
        console.log(emp_obj) //4
        emp_obj=await emp_obj.save();
        return resp.status(200).json({"msg":"New Emplyee Created successfully "})        

    } catch (error) {
         return resp.status(404).json({"msg":"Unable to create"})
    }
})

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
