import React from "react"
export const updateRequestHandlers = (user1 , users , user2) => {
    let updatedUsers = users.map(user => {
        if(user._id === user1._id){
            user.requestes = user.requestes.filter(req => req._id !== user2._id)
            return user;
        }
        return user;
    })
    return updatedUsers
}

export const upadteButtonRequest = (user1 , userProp , user2 , btn , func) =>{
   
        user1[userProp].map(req => {
            if(req._id === user2._id) {
                if(!func) {
                    btn = <button> Friends </button>

                }
                
                else {
                    btn = <button onClick={() => func(user1)}>Cancel Request</button>   
                }
            }
        })
    
    return btn;
} 