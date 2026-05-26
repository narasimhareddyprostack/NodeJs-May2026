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
usage: delete emplyee by id
Rest API URL: http://127.0.0.1:8080/emp/103
Method Type:DELETE
Request Fields: None 
Access Type: Public
*/
router.delete("/:id",async(req,resp)=>{
try{
    let emp_doc_id=req.params.id;
    console.log(eid);
    // verify employee exist or not.if employee not exist return error message.if employee return the response.
    let employee_obj=await EmployeeModel.findById(emp_doc_id);
    console.log(employee_obj);
    if(!employee_obj){
        return resp.status(404).json({"msg":"employee not exist"})
    }
    await EmployeeModel.findByIdAndDelete(emp_doc_id)
    return resp.status(200).json({"msg":"employee deleted sucessfully"})
}
catch (error) {
        return resp.status(404).json({"msg":"Unable to delete"})
    }
})

/*
usage: update emp by eid
Rest API URL: http://127.0.0.1:8080/emp/103
Method Type:PUT
Request Fields: eid,ename,esal
Access Type: Public
*/
router.put("/:id", async (req, resp) => {
    try {

        //reading url para
        let emp_doc_id = req.params.id;
        //reading form data / body data
        let updateEmployee = {
            eid: req.body.eid,
            ename: req.body.ename,
            esal: req.body.esal
        };
        
        let updatedEmployee = await EmployeeModel.findByIdAndUpdate(
            emp_doc_id,
            updateEmployee,
            { new: true }
        );

        if (!updatedEmployee) {
            return resp.status(404).json({
                msg: "Employee not found"
            });
        }

        return resp.status(200).json({
            msg: "Employee Updated Successfully",
            employee: updatedEmployee
        });

    } catch (error) {

        return resp.status(500).json({
            msg: "Unable to Update",
            error: error.message
        });
    }
});
/*
router.post();
router.get();
router.put()
router.delete();
*/

export default router;
