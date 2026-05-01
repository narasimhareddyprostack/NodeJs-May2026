/*
read employees.json file and  write male employees into male.json file 
and female employees into female.json file
*/
import fs from 'fs';

fs.readFile('employees.json','utf-8',(err,data)=>{
    if(err) throw err;
    let employees=JSON.parse(data);
    console.log(employees.length)

    let male_Employees=[]
    for(let emp of employees){
        if(emp.gender==="Male"){
            male_Employees.push(emp)
        }
    }
    console.log(male_Employees.length)

    fs.writeFile('male.json',JSON.stringify(male_Employees),(err)=>{
        if(err) throw err 
        console.log("New File Created successfully!")
    })
})