import styled from 'styled-components'
// Login  and register css..
export const LoginWrapper = styled.div  `
position:relative;
width:100%;
height:100vh;


&:before{
    content:"";
    position:absolute;
    left:0;
    top:0;
    width:60%;
    height:100%;
    background:#333;
    clip-path: polygon(0 0, 52% 0, 73% 100%, 0% 100%);
}
h1 {
    position:absolute;
    left:16.5%;
    transform:translate(-50% , -50%);
    top:50%;
    color:#b03a87;
    letter-spacing:1px;
   
    @media(max-width:854px){
        font-size:1.4rem;
    }
    @media(max-width:768px){
        font-size:0.9rem;
        left: 19.5%;
    }
}
}
button {
    margin:1rem 0;
    border:none;
    padding:0.5rem 2rem;
    background:transparent;
    border-radius:6px;
    font-weight:bold;
    text-transform:uppercase;
    cursor:pointer;
    transition:all ease-in 0.3s;
    &:hover{
        background:#b03a87;
    }
}
`
export const StyledInput = styled.input  `
background:none;
padding-bottom:0.3rem;
margin:1rem 0;
border:none;
border-bottom:1px solid pink;
outline:none;
`
export const StyledInputWrapper = styled.div `
    display:flex;
    flex-direction:column;
    position:absolute;
    left:70%;
    top:50%;
    transform:translate(-50% , -50%)
`