import React from 'react';
import Info from "../Info/Info"
import styled from "styled-components"
const LeftSideBarWrapper = styled.div `
    width:30%;
    border:1px solid grey;
    border-radius:6px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const LeftSideBar = ({logedUser}) => {
   
    return (
        <LeftSideBarWrapper>
            <Info  logedUser={logedUser}/>
        </LeftSideBarWrapper>
    );
}

export default LeftSideBar;
