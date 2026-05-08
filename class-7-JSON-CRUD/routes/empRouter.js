import express from 'express';
import fs from 'fs';
import path from 'path';
let router=express.Router()


/*
Usage:Employee Root Request
Rest API URL: http://127.0.0.1:8080/emp/
Method Type:GET
Requried Fields:None 
Access Type:Public
*/
router.get("/",(req,resp)=>{
    return resp.json({"msg":"Employee Router - Root Request"});
})

/*
Usage:create New emp
Rest API URL: http://127.0.0.1:8080/emp/create
Method Type:POST
Requried Fields:eid,ename,esal,gender 
Access Type:Public
*/
router.post("/create",async (req,resp)=>{
    //read HTML form/POSTMAN data
    let employee=req.body;
    //verify emp already exists or not
    let employees=await getEmployees()
    let emp_data=employees.find((emp)=>{
        return emp.eid === employee.eid;
    })
    if(emp_data){
        return resp.status(404).json({"msg":"Employee Already Exists"})
    }
    employees.push(employee)
    saveEmployee(employees)
    return resp.status(200).json({"msg":"New Employee Created successfully"})
    
})

let saveEmployee=(employees)=>{
    fs.writeFileSync(path.join(process.cwd(),"data","emp.json"),
                               JSON.stringify(employees))
}

/*
usage: Read all employees
Rest API URL: http://127.0.0.1:8080/emp/read	         - GET
Method Type:GET
Required Fields:None
Access Type:Public
*/
router.get("/read",async (req,resp)=>{
    let employees=await getEmployees();
    return resp.status(200).json(employees)
})
//write the common function for reading and writing
let getEmployees=()=>{
    let emp_Data=fs.readFileSync(path.join(process.cwd(),"data","emp.json"),'utf-8')
    return JSON.parse(emp_Data)
}

export default router;