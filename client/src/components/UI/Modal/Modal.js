import React from 'react';
import "./Modal.css"
import Friends from "../../Friends/Friends"
const Modal = ({modalOpen , logedUser , closeHandler , male , female , singleUser}) => {
  
    const  modalClass = !modalOpen ? ["Modal" , "modalClosed"] : ["Modal" , "modalOpen"] 
    return (
        <div className={modalClass.join(" ")}>
      
         <div className="ModalContent">
         <span className="close fa fa-close" onClick={closeHandler}></span>
         {logedUser && logedUser.friends.length === 0 ?  <h2>No Friends</h2> :  <h2>Friends</h2>}
        
         {logedUser && logedUser.friends.length > 0 ? logedUser.friends.map(user => 
       
            <div className="ModalFriend">
            <img onClick={() =>singleUser(user.userName)} src={user.gender === "male" ? male : female} alt={"friend"}/>
             <h1>{user.name}</h1>
            </div>
         )
           
         :null}
         </div>
        </div>
    );
}

export default Modal;
