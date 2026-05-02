/*
    read - data/employees/employees.json file 
    and write male employees into data/male/male.json
    and female employees into data/female/female.json

    using fs module and path module
*/
import fs from 'fs'
import path from 'path'
let file_path=path.join(process.cwd(),"data","employees","employees.json")
let male_file_path=path.join(process.cwd(),"data","male","male.json")
let female_file_path=path.join(process.cwd(),"data","female","female.json")
//fs.readFile(file_path,'utf-8',()=>{})
fs.readFile(file_path,'utf-8',(err,data)=>{
    if(err) throw err 
    let employees=JSON.parse(data)

    let male_employees=employees.filter(emp=>emp.gender==="Male")
    let female_employees=employees.filter(emp=>emp.gender==="Female")
    
    
    fs.writeFile(male_file_path,JSON.stringify(male_employees),(err)=>{
        if(err) throw err;
        console.log("New male.json file created successfully")
    })

    
    fs.writeFile(female_file_path,JSON.stringify(female_employees),(err)=>{
        if(err) throw err 
        console.log("New female.json file created successfully")
    })

})