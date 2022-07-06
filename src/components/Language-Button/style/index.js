import styled from "styled-components";

export const Div = styled.div`
display: flex;
justify-content:space-between;
align-items:center;
background:transparent;
width:${(props) => props.width};
height:${(props) => props.height};
padding:5px;
color: white;
border:1px solid #0a9;
border-radius:3px
`
export const Select = styled.select`
background:transparent;
border:none;
color: white;
font-size:16px;
&:focus{
    outline:none;
}
`
export const Option = styled.option`
position:absolute;
background:rgb(0,0,0,.4);
color: white;

`