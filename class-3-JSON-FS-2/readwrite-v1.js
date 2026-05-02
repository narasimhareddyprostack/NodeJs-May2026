/*
    read data/employees/employees.json file 
    and write male employees into data/male/male.json
    and female employees into data/female/female.json

    using fs module and path module
*/
import fs from 'fs'
import path from 'path'
let file_path=path.join(process.cwd(),"data","employees","employees.json")
//fs.readFile(file_path,'utf-8',()=>{})
fs.readFile(file_path,'utf-8',(err,data)=>{
    if(err) throw err 
    console.log(data)
})