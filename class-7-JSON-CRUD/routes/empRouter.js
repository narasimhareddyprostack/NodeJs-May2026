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

/*
Usage: Update existing employee
Rest API URL: http://127.0.0.1:8080/emp/update/:eid
Method Type: PUT
Required Fields: eid (in URL), ename, esal, gender (in body)
Access Type: Public
*/
router.put("/update/:eid",async (req,resp)=>{
    //get employee id from URL parameter
    let eid=parseInt(req.params.eid);
    let updateData=req.body;
    
    //read all employees
    let employees=await getEmployees();
    
    //find employee index
    let empIndex=employees.findIndex((emp)=>{
        return emp.eid === eid;
    })
    
    //check if employee exists
    if(empIndex === -1){
        return resp.status(404).json({"msg":"Employee Not Found"})
    }
    
    //update employee details
    employees[empIndex]={
        eid:eid,
        ename:updateData.ename || employees[empIndex].ename,
        esal:updateData.esal || employees[empIndex].esal,
        gender:updateData.gender || employees[empIndex].gender
    }
    
    //save updated employees
    saveEmployee(employees)
    
    return resp.status(200).json({"msg":"Employee Updated Successfully"})
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
/*
usage: Delete employee by eid
Rest API URL: http://127.0.0.1:8080/emp/delete/101	         - GET
Method Type:DELETE
Required Fields:None
Access Type:Public
*/
router.delete("/delete/:eid",async(req,resp)=>{
    let eid=req.params.eid;
    console.log(typeof eid)
    console.log(eid)
    //verify employee exists or not
    let employees=await getEmployees();

    let emp_Data=employees.find((emp)=>{
        return emp.eid==eid;
    })
    console.log(emp_Data)
    
    if(!emp_Data){
        return resp.status(404).json({"msg":"Employee Not Exits"})
    }
    
    let remaining_Employees=employees.filter((emp)=>{
        return emp.eid!=eid;
    })
    console.log(remaining_Employees.length)
    await saveEmployee(remaining_Employees)
    resp.status(200).json({"msg":"Employee Deleted Successfully"})
})


//write the common function for reading and writing
let getEmployees=()=>{
    let emp_Data=fs.readFileSync(path.join(process.cwd(),"data","emp.json"),'utf-8')
    return JSON.parse(emp_Data)
}

export default router;