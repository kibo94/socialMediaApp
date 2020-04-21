import React from 'react';
import styled from  "styled-components"
import male from "../../assets/avatar1.jpg"
import female from "../../assets/avatar2.jpg"
const PostWrapper = styled.div `
    border:1px solid grey;
    margin:1rem;
    background:wheat;
    ul{
        margin:0;
   
        list-style:none;
        padding:0;
        li{
            margin:0.5rem;
            background:#333;
            
            padding: 0.5rem 0;

            p{
                margin:0;
            }
        }
    }
    
    
`
const Posts = ({logedUser}) => {
    return (
        <PostWrapper>
         <ul>
           {logedUser && logedUser.posts.length > 0 ? logedUser.posts.map((user , i) => 
         
           <li key={i}>
           <img src={logedUser.gender === "male" ? male : female} alt={"postImage"} / >
           <p>{user.title}</p>
           </li>)
           :null}  
         </ul>  
        </PostWrapper>
    );
}

export default Posts;
