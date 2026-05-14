import bcrypt from 'bcrypt';
let user={
    "uname":"vikasPandey",
    "pwd":"vikas@123",
    "cc":"3456123434561234"
    }
//Hash the user senstive Data
let salt=bcrypt.genSaltSync(10)
let new_Pwd=bcrypt.hashSync(user.pwd,salt)
let new_CC=bcrypt.hashSync(user.cc,salt)

console.log(user.pwd)
console.log(new_Pwd)
console.log("*****")
console.log(user.cc)
console.log(new_CC)

let flag=bcrypt.compareSync('vikas@123',new_Pwd)
if(flag){
    console.log("Login Success")
}
else{
    console.log("Login Failed")
}