import styled from "styled-components";
export const Button = styled.button`
padding:0.4rem;
border:none;
cursor:pointer;
background:${props => props.bck};
font-weight:bold;
text-transform:uppercase;
margin:0.4rem 0.3rem;
outline:none;
&:hover{
opacity:0.6;
}


`