import React from 'react';

const Info = ({logedUser}) => {
    let result = null
    if(logedUser){
        const {name , email , userName , address , phone , gender } = logedUser
         result = <div>
                <h5>Name : {name}</h5>
                <p>UserName : {userName}</p>
                <p>Email : {email}</p>
                <p>Address: {address}</p>
                <p>Phone : {phone}</p>
                <p>Gender: {gender}</p>
                </div>
    }
    
    return (
        <div>
        {result}
        </div>
    );
}

export default Info;
