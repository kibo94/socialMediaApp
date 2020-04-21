import React from 'react';
import {withRouter} from "react-router-dom"
import CoverImage from "../CoverImage/CoverImage"
import {findUser} from "../../utilitys/findUser"
const SingleUser = (props) => {

    if(!props.auth) {
        props.history.push("/login")
    }

    console.log(props)
let finduser = findUser(props.users , props.match.params.id)
console.log(findUser)


    return (
        <div>
       <CoverImage friends={props.friends} cancelRequest={props.cancelRequest} users={props.users} sendRequest={props.sendRequest} user={finduser} male={props.male} female={props.female} single={true} userId={props.logedUser._id}/>
        </div>
    );
}

export default withRouter(SingleUser);
