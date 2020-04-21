import {useState} from "react"

import Joi from "@hapi/joi"
const loginSchema = Joi.object({
    userName:Joi.string().max(10).min(2).required(),
    password:Joi.string().max(10).min(2).required()
})  
const registerSchema = Joi.object({
    name:Joi.string().max(20).min(2).required(),
    userName:Joi.string().max(10).min(2).required(),
    password:Joi.string().max(10).min(2).required(),
    email:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    phone:Joi.string().max(10).min(2).required(),
    address:Joi.string().max(10).min(2).required(),
    gender:Joi.string().max(10).min(2).required(),
    
})

const useAuthHook = () => {
    const [ registerData , setRegisterData ] = useState({
        name:"",
        userName:"",
        password:"",
        email:"",
        phone:"",
        address:"",
        gender:""
    })
    const [loginData , setLoginData] = useState({
        userName : "",
        password : "",     
})
// console.log(loginData)

const inputHandler = (e , type) => {
    switch(type) {
        case "login" :
            setLoginData({...loginData , [e.target.name] : e.target.value })
             break;
        case "register" : 
            setRegisterData({...registerData , [e.target.name] : e.target.value })
            break;
        default:{}
    }
} 

return  {loginData  , setLoginData , loginSchema , inputHandler , registerSchema , registerData} 
}
export default useAuthHook;



 