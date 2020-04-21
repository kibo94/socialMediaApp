import React  from 'react';
import {Link} from "react-router-dom"
import useAuthHook from "../../../hooks/useLogin"
import  {LoginWrapper , StyledInputWrapper , StyledInput } from "../../../utilitys/HelperStyledComponents"

const Register = ({registerBtnHandler , error}) => {
   const  {registerData , inputHandler} = useAuthHook()
    return (
        <div>
    <LoginWrapper>
            <h1>SOCIALMEDIA APP</h1>
            <StyledInputWrapper>
                <StyledInput type="text" placeholder="Full Name" name="name" onChange={(e,type) => inputHandler(e,"register")} />
                <StyledInput type="text" placeholder="User Name" name="userName" onChange={(e,type) => inputHandler(e,"register")}/>
                <StyledInput type="password" placeholder="Password" name="password" onChange={(e,type) => inputHandler(e,"register")} />
                <StyledInput type="email" placeholder="Email" name="email" onChange={(e,type) => inputHandler(e,"register")}/>
                <StyledInput type="text" placeholder="Phone Number" name="phone" onChange={(e,type) => inputHandler(e,"register")} />
                <StyledInput type="text" placeholder="Address" name="address" onChange={(e,type) => inputHandler(e,"register")}/>
                <StyledInput type="text" placeholder="Gender" name="gender" onChange={(e,type) => inputHandler(e,"register")} />
                <button onClick={() => registerBtnHandler({...registerData})}>Register</button>
                <span style={{color:"red"}}>{error}</span>
                <Link to="/login">Login</Link>
            </StyledInputWrapper>
          
   
        </LoginWrapper>
        </div>
    );
}

export default Register;
