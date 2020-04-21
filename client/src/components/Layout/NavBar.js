import React , { useState } from 'react';

import { NavLink } from "react-router-dom"
import { useToggleHook } from "../../hooks/useToggleHook"
import {withRouter} from "react-router-dom"
import styled from "styled-components"
const SerachResults = styled.div `
background:#333;
display:flex;
flex-direction:${props => props.dir};
justify-content: space-around;
align-items: center;
img{
    width:40px;
    height:40px;
    border-radius:50%;
    cursor:pointer;
}
button{
    border:none;
    padding:0.4rem;
    border-radius:6px;
    text-transform:uppercase;
    cursor:pointer;
    outline:none;
}
.accept {
    background:green;
    
}
.cancel {
    background:red;
}
`
const Nav = styled.div `
background: rgb(51, 51, 51);
 input {
    width: 200px;
    border: none;
}

 ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: none;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
}

 li {
    margin: 1rem auto;
    padding: 0.3rem;
    transition: all ease-in 0.3s;
    text-align: center;
    i{
        vertical-align:middle;
        margin-right:3px;
    }
  
}

 img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    vertical-align: middle;
    margin-right: 0.5rem;
}

 li:hover {
    cursor: pointer;
}


.nav-link {
    text-decoration: none;
    color: white;
    padding:0.6rem;
}
.request {
    position:relative;
    span{
        
        position:absolute;
        top:5px;
        right:-13px;
        width:20px;
        height:20px;
        border-radius:50%;
        background:red;
        color:black;
    }
}


.nav-link:hover {
    color: wheat;
    background:#b03a87;
    border-radius:6px;
}

.burger {
    text-align: right;
    display: block;
    padding-right: 30px;
}

 ul.ul-hide {
    display: none;
}

 ul.ul-show {
    display: flex;
}

.activeLink {
    color: rgb(173, 167, 167);
}


/* Responsive */

@media(min-width:768px) {
    .burger {
        display: none;
    }
     ul.ul-show {
        flex-direction: row;
    }
     ul.ul-hide {
        display: flex;
        flex-direction: row;
    }
}
`

const NavBar = ({auth , logedUser , logout , openNav ,toogleNav , male , female,users , history , acceptRequest ,cancelRequest , request , setRequest}) => {

const [filteredUsers , setFilteredUsers] = useState(null)
const [searchValue , setSerchValue] = useState("")


    let navClasses = "ul-hide"  
    if(openNav) {
        navClasses = "ul-show"
    }
const searchHandler = e => {
    const { value } = e.target;
    setSerchValue(value)

    const filterUsers = users.filter(user => user.name.toLowerCase().includes(value.toLowerCase()))
    setFilteredUsers(filterUsers);
    
    if(value.toLowerCase().trim() === "") {
        setFilteredUsers(null)
    }
}
const singleUser = id => (
    () => {
        console.log(id)
        setFilteredUsers(null)
        setSerchValue("")
        history.push(`/${id}`)
    
    }
)

const requestesHandler = () => {
    if(logedUser.requestes.length > 0 ){
        setRequest()
    }

}

    return (
        <div>
             {auth ?   <Nav>
      <div className="fa fa-bars burger" onClick={toogleNav}></div>
     
           <ul className={navClasses.split(" ")}>
        
            <li><NavLink exact activeClassName="activeLink"  className="nav-link" to="/home-page"><i className="fa fa-home"></i>Home</NavLink></li>
            <input value={searchValue} placeholder="search" onChange={searchHandler} /> 
            <li className="User"><NavLink className="nav-link" to={"/"}><img alt="user" src={logedUser.gender === "male" ? male : female}/>{logedUser.userName}</NavLink></li>
            <li onClick={requestesHandler} className="nav-link request"><i className="fa fa-user-plus"></i>Requestes<span>{logedUser.requestes.length}</span></li>    
            <li><NavLink exact activeClassName="activeLink" onClick={logout}  className="nav-link" to="/login"><i className="fa fa-sign-out"></i>Logout</NavLink></li>
            </ul>
        </Nav> :null }
                    <SerachResults dir="column">
                        {auth && filteredUsers  ? filteredUsers.map(user => (
                            <div>
                            <img onClick={singleUser(user.userName)} src={user.gender === "male" ? male : female} alt={"searchResultImage"}/>
                            <h1>{user.name}</h1>
                            </div>
                        )) : null}
                      
                       </SerachResults>
                    {auth && request && logedUser  && logedUser.requestes.length > 0 ? logedUser.requestes.map(user => (
                        
                        <SerachResults key={user._id} dir="row">
                            <img  src={user.gender === "male" ? male : female} alt={"searchResultImage"}/>
                            <h1>{user.name}</h1>
                            <button class="accept" onClick={() => acceptRequest(user)}>Accept request</button>
                            <button class="cancel" onClick={() => cancelRequest(user)}>Cancel request</button>
                        </SerachResults>
                    )): null}
        </div>
      
    );
}

export default withRouter(NavBar);
