import React, { useState } from 'react';
import "./Login.css";
import { withRouter , Link } from 'react-router-dom';
import Joi from "@hapi/joi"
import useAuthHook from "../../../hooks/useLogin"
import  {LoginWrapper , StyledInputWrapper , StyledInput } from "../../../utilitys/HelperStyledComponents"

const Login = ({loginBtnHandler , auth , history , error}) => {
    const {inputHandler , loginData} = useAuthHook()
    function checkAuth () {
        if(auth) {
            history.push("/")
        }
    }
    checkAuth()
    return (
        <LoginWrapper>
          <h1>SOCIALMEDIA APP</h1>
        <StyledInputWrapper>
        
            <StyledInput type="text" placeholder="User Name" name="userName" onChange={(e) =>inputHandler(e , "login")} />
            <StyledInput type="password" placeholder="Password" name="password" onChange={(e) =>inputHandler(e , "login")}/>
            <button onClick={() => loginBtnHandler(loginData)}>Login</button>
            <span style={{color:"red"}}>{error}</span>
            <Link to="/register">Register</Link>
          
        </StyledInputWrapper>
        </LoginWrapper>
    );
}

export default withRouter(Login);

