import jwt from 'jsonwebtoken'
let user_Payload={
    'email':'vikas@gmail.com',
    'password':'vp@123'
}
let secret_Key='ILI';
let token=jwt.sign(user_Payload,secret_Key)
console.log(token)

