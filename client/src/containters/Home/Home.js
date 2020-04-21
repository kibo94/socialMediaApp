import React from 'react';
import { withRouter} from 'react-router-dom';
import styled from "styled-components"
import {checkAuth} from "../../utilitys/findUser"
import CoverImage from "../../components/CoverImage/CoverImage"
import LeftSideBar from "../../components/LeftSideBar/LeftSideBar"
import HomeContent from "../../components/HomeContent/HomeContent"

const HomeContainer = styled.div `
display:flex;
justify-content: space-evenly;
width:80%;
margin:1rem auto;
`
const Home = ({auth , history , logedUser , male , female , users , friends , createPost}) => {
   
    // checkAuth(auth , history , "/" , "/login")
    function checkAuth () {
       
        if(!auth) {
            history.push("/login")
        }
    }

    checkAuth()

    return (
        <div>
        {auth 
        ? 
        <CoverImage friends={friends} users={users} user={logedUser}  
        single={false} userId={logedUser._id} male={male} female={female}/> :null}
        <HomeContainer>
          <LeftSideBar logedUser={logedUser}/>
           <HomeContent logedUser={logedUser} createPost={createPost} /> 
        </HomeContainer>
        </div>
    );
}

export default withRouter(Home);
