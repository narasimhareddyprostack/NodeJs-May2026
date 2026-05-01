//read data.txt file and print data? using node js
import fs from 'fs'

let data=fs.readFileSync('data.txt','utf-8')
console.log(data)
