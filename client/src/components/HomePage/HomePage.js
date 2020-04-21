import React from 'react';

const HomePage = ({logedUser , users , male , female}) => {
  
   let findedUser = users.find(user => user._id === logedUser._id)
   let filteredUsers = [findedUser]
if(logedUser.friends.length > 0) {
    logedUser.friends.map(friend => {
        let friends = users.filter(user => user._id === friend._id)
        filteredUsers = [...filteredUsers , ...friends]
    })
}
let res = null
console.log(filteredUsers)
if(filteredUsers.length > 0) {
res = filteredUsers.map(user => user.posts.map(post => <div><p>{post.tile}</p></div>))
}
console.log(res)
    return (
        <div>
     {filteredUsers.length > 0 ?  filteredUsers.map(user => user.posts.map(post => 
     <p>
     <img style={{width:"40px",height:"40px",borderRadius:"50%", verticalAlign:"middle"}} src={user.gender === "male" ? male : female} alt={"homeStatusImage"}/>
     {post.title}
     </p>
     )) :null}
        </div>
    );
}

export default HomePage;
