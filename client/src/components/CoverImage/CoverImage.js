import React from 'react';
import {Link} from "react-router-dom"
import styled from "styled-components"
import {upadteButtonRequest} from "../../utilitys/handleRequestsHanlers"
const CoverImageWarapper = styled.div `

margin:0 auto;
width:80%;
height:300px;
background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(16,215,99,0.938813025210084) 35%, rgba(0,212,255,1) 100%);
position:relative;
i{
    font-size:4rem;
    position:absolute;
    left:50%;
    top:50%;
    transform:translate(-50% , -50%);
}
.ProfileImage{
    width:140px;
    height:140px;
    position:absolute;
    left:3%;
    bottom:0%;
    z-index:2;
    transform:translateY(20%);
    img{
        width:100%;
        height:100%;
        border-radius:50%;
    }
}
h1{
        position:absolute;
        left:25%;
        bottom:2%;
        margin:0;
        font-size:1.3rem;
        color:white;
    }
 
`
const UserInfo = styled.div `
    margin:0 auto;
    background:#333;
    width:80%;
    text-align:center;
    padding:0.7rem;
    p{
        margin:0;
        display:inline-block;
        padding:0.5rem 0.3rem;
        background:#b03a87;;
        border-radius:6px;
        cursor:pointer;

    }
    .FriendsLink{
        margin:0;
        display:inline-block;
        padding:0.5rem 0.3rem;
        background:#b03a87;
        margin-right:0.5rem;
        cursor:pointer;
        text-decoration:none;
        color:black;
        border-radius:6px;
    }
    button {
        border:none;
        outline:none;
        height:100%;
        padding:0 0.3rem;

    }
`


const CoverImage = ({male , user , female , single , userId , sendRequest , users , cancelRequest ,friends}) => {
    let btn = null;

    let logedUser = users.find(usr => usr._id === userId)
    

       console.log(single , userId , user)
        if (single && userId !== user._id) {
             btn = <button onClick={() => sendRequest(user)}>Send Request</button>
          
        }
        if (user.requestes.length > 0 && single) {
             btn = upadteButtonRequest(user , "requestes", logedUser, btn , cancelRequest)
        }
        if (user.friends.length > 0 && single) {
             btn = upadteButtonRequest(user , "friends", logedUser, btn , null)
        }
    
    console.log("witch")

    return (
        <div>
        <CoverImageWarapper> 
        <i className="fa fa-image"></i>   
        <div className="ProfileImage">
        <img src={user.gender === "male" ? male : female}  alt="profileImage"/>
        </div>
        <h1>{user.name}</h1>
    </CoverImageWarapper>
    <UserInfo>
        <button className="FriendsLink" onClick={friends}>Friends({user.friends.length})</button>
        <p>Info</p>
       {btn}
    </UserInfo>
    </div>
    

    );
}

export default CoverImage;
