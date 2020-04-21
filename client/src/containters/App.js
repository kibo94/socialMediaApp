import React , { useState, useEffect } from "react";
import { Route, withRouter , Switch } from "react-router-dom"
import "../App.css";
import NavBar from "../components/Layout/NavBar"
import Login from "../components/Auth/Login/Login"
import Modal from "../components/UI/Modal/Modal"
import Register from "../components/Auth/Register/Register"
import Home from "./Home/Home"
import {useToggleHook} from "../hooks/useToggleHook"
import {findUser} from "../utilitys/findUser"
import male from "../assets/avatar1.jpg"
import feMale from "../assets/avatar2.jpg"
import Friends from "../components/Friends/Friends";
import SingleUser from "../components/SingleUser/SingleUser"
import {v1 as uuid} from 'uuid';
import {updateRequestHandlers} from "../utilitys/handleRequestsHanlers"
import useLoginHook from "../hooks/useLogin"
import HomePage from "../components/HomePage/HomePage"
import axios from "axios"

function App({history , match}) {


// const [users , setUsers] = useState([
//     {
        
// name:"Bojan Bogdanovic",
// userName:"bojan947",
// password:"123",
// email:"bojanb106@gmail.com",
// phone:"3333321",
// address:"222",
// gender:"male",
// id:"1",
// friends:[],
// requestes:[
//     {
//         name:"Mia",
//         userName:"mia123",
//         password:"mia123",
//         email:"mia@test.com",
//         phone:"2223321",
//         address:"211",
//         gender:"female",
//         id:"2",
//         friends:[],
//         requestes:[],
//         posts:[
          
//         ]
//             }
// ],
// posts:[
//     {
//         title:"me post"
//     }
// ]
//     },
//     {
// name:"Mia",
// userName:"mia123",
// password:"mia123",
// email:"mia@test.com",
// phone:"2223321",
// address:"211",
// gender:"female",
// id:"2",
// friends:[],
// requestes:[],
// posts:[ {
//     title:"mia post"
// }]
//     }
// ])
const [users , setUsers] = useState([])

const [openNav , toogleNav] = useToggleHook(false)
const [auth , setAuth] = useState(false)
const [errorMsg , setErrorMsg] = useState("")
const [registerErrMsg , setRegisterErrorMsg] = useState("")
const [modal , setToggleModal] = useToggleHook(false)
const [request , setRequest] = useToggleHook(false)
const [logedUser , setLogedUser] = useState(null)
const { loginSchema , registerSchema } = useLoginHook()

useEffect(() => {
    fetchUsers()

},[])


async function fetchUsers () {
    let res = await fetch("http://localhost:3000/users");
    let data = await res.json();
    setUsers(data.users)
}
const login = (loginData) => {
   
    let findedUser = findUser(users , loginData.userName)

    const res = loginSchema.validate(loginData) 
    if(res.error) {
    setErrorMsg(res.error.details[0].message)
    }
    else {
        if(findedUser && findedUser.password === loginData.password ) {
            setAuth(true)
            history.push("/")
            setErrorMsg("")
            setLogedUser(findedUser)
        }
        else {
        setErrorMsg("user not exists")
        }

    }

}
const logoutHandler = () => {
        setAuth(false)
        setErrorMsg("")
     
}
const register = (registerData) => {

const res = registerSchema.validate(registerData) 

    if(res.error) {
        setRegisterErrorMsg(res.error.details[0].message)
    }
    else {
        setUsers([...users, {...registerData , friends:[]  , id:uuid(), requestes:[] , posts:[]}])
        history.push("/login")
    }
}

const sendRequestHandler = async (singleUser) => {
   await fetch(`http://localhost:3000/users?from=${logedUser._id}&to=${singleUser._id}`,{
       method:"POST"
   })
  
   fetchUsers()
    // setLogedUser(findUser(users , logedUser.userName))

    // let updatedUsers = users.map(user => {
    //         if(user._id === singleUser._id){
    //             user.requestes = [...user.requestes , logedUser]
    //             return user;
    //         }
    //         return user;
    // })
    // setUsers(updatedUsers)
    // setLogedUser(findUser(updatedUsers , logedUser.userName))
}
const acceptRequestHandler = (singleUser) => {
    let updatedUsers  = users.map(user => {
        if(user._id === singleUser._id){
            user.friends = [...user.friends , logedUser]
          
        }
        if(user._id === logedUser._id){
            user.friends = [...user.friends , singleUser]
            user.requestes = user.requestes.filter(userr => userr._id !== singleUser._id )   
        }
        return user;
})
    setUsers(updatedUsers);
    setLogedUser(findUser(updatedUsers , logedUser.userName))
    setRequest()

}
const cancelRequestHandler = (singleUser) => {

    let updatedUsers = updateRequestHandlers(logedUser , users , singleUser)
    setUsers(updatedUsers);
    setLogedUser(findUser(updatedUsers , logedUser.userName))
    setRequest()
}
const cancelRequestHandler2 = (singleUser) => {

    let updatedUsers = updateRequestHandlers(singleUser , users , logedUser)
    setUsers(updatedUsers);
    setLogedUser(findUser(updatedUsers , logedUser.userName))
  
}

const friendsHandler = () => {
    setToggleModal()
}

const singleUserHandler = (id) => {
    setToggleModal()
    history.push(`/${id}`)
   
    
}
const createPostHandler = (post) => {
    const user = findUser(users , logedUser.userName)
    user.posts= [...user.posts , post]
    setLogedUser({...user})
}
    return ( 
    <div className="App">
 
        <NavBar logedUser={logedUser} 
        male={male}
        female={feMale}
        users={users}
        auth={auth} 
        logout={logoutHandler} 
        openNav={openNav}
        acceptRequest= {acceptRequestHandler}
        cancelRequest=  {cancelRequestHandler}
        request = {request}
        setRequest={setRequest}
        toogleNav={toogleNav}/>
      {/* Home */}
        <Route exact path="/"   
        render= {() =>
         <Home 
         friends={friendsHandler}
         auth={auth}
         logedUser={logedUser} 
         users={users} male={male}
         createPost={createPostHandler}
          female={feMale}  /> }/>
          <Switch>
          {auth ? <Route exact path="/home-page" render={() => <HomePage 
          logedUser={logedUser}
          male={male}
          female={feMale}
           users={users}/>}/> :null}
             {/* Single User */}
            {auth ? <Route exact path="/:id"   render= {() =>
         <SingleUser users={users} 
        auth = {auth}
        logedUser={logedUser} 
        sendRequest={sendRequestHandler}
        cancelRequest={cancelRequestHandler2}
         male ={male} female={feMale} />}/>
          :null}
          </Switch>

          {/* Register */}
        <Route path="/register" render={() => 
        <Register registerBtnHandler={register} 
        error={registerErrMsg}/>}/>
        <Route path="/login" render = {() =>
        // LOGIN
        <Login 
        loginBtnHandler={login}
         auth={auth} 
         error={errorMsg} />}/>
        <Modal 
        male ={male} 
        female={feMale}
        modalOpen = {modal} 
        closeHandler = {setToggleModal}
        singleUser={singleUserHandler}
        logedUser={logedUser} />
        <Route exact path = "/friends" render={() =><Friends 
        logedUser={logedUser}
        male={male}
        female={feMale}/>}/>  
        {/* Home Page */}
    
    </div>
    )
}

export default withRouter(App);
