import React from 'react';
import styled from "styled-components"
import male from "../../assets/avatar1.jpg"
import female from "../../assets/avatar2.jpg"
import Posts from "../Posts/Posts"
const HomeContentWrapper = styled.div `
    width:65%;
    border:1px solid grey;
    border-radius:6px;

    input {
        width:80%;
        padding:1rem;

    }
    img{
        width:50px;
        height:50px;
        border-radius:50%;
        vertical-align:middle;
    }
`
const HomeContent = ({logedUser , createPost}) => {

    let result = null;
    let post = {
        title:""
    }
    const getPostDataHandler = e => {
        post.title = e.target.value;
    }
    if(logedUser) {
        result = <div>
            <img src={logedUser.gender === "male" ? male : female} alt="commentImg" / >
             <input onChange={getPostDataHandler} placeholder="New post..."/>
             <button onClick={() => createPost(post)}>Post</button>
        </div>
    }
   
    return (
        <HomeContentWrapper>
          {result}
          {<Posts logedUser={logedUser}/>}
        </HomeContentWrapper>
    );
}

export default HomeContent;
