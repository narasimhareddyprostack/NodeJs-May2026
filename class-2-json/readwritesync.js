import fs from 'fs'

const data = fs.readFileSync('employees.json', 'utf-8')
console.log(typeof data)

let employees = JSON.parse(data)
console.log(typeof employees)
console.log(employees.length)

let female_employees = []
let i = 0
while (i <= employees.length - 1) {
    if (employees[i].gender === "Female") {
        female_employees.push(employees[i])
    }
    i++
}

console.log(female_employees.length)
fs.writeFileSync('female.json', JSON.stringify(female_employees))
console.log("New File created")