//read data.txt file and write data into new file ie msg.txt
import fs from 'fs'

fs.readFile('data.txt','utf-8',(err,data)=>{
    if(err) throw err;


    fs.writeFile('msg.txt',data,(err)=>{
        if(err) throw err 

        console.log("New File Created Successfully!")
    })
})

