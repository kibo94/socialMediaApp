import React from 'react';
import styled from "styled-components"
const FriendsWrapper = styled.div `
width:80%;
display:flex;
padding:1rem;
background:white;
margin:1rem auto;
flex-wrap:wrap;
justify-content:center;
.FriendsContent{
    width:45%;
    display:flex;
    border:1px solid grey;
    height:130px;
    margin:1.33%;
    .FriendsImageWrapper{
    height:100%;
    width:30%;
    img{
        height:100%;
        width:100%;
    }
}
.FriendsInfo{
width:70%;    
display:flex;
align-items:center;
justify-content:space-around;
h3{
    margin:0;
}
p{
    margin:0;
}
}
button{
    background:green;
    border:none;
    padding:0.5rem 1.3rem;
}
}


`
const Friends = ({logedUser , male , female}) => {
    console.log(logedUser)
    return (
        <div>
         {logedUser ? <div>{logedUser.name}</div> : null} 
        {logedUser.friends.length > 0 ?   
        <FriendsWrapper>
          {logedUser.friends.map(friend => 
         <div class="FriendsContent">
         <div class="FriendsImageWrapper"><img  alt="friend" src={friend.gender === "male" ? male : female}/></div>
         <div className="FriendsInfo">
           <div>
              <h3>{friend.name}</h3>
              <p>{friend.friends}</p> 
           </div>  
           <div><button>Friends</button></div>
         </div>
        </div>
        
          )}  
        </FriendsWrapper>
        
        :null  } 
        </div>
      
    );
}

export default Friends;
