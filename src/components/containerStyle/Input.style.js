import styled from "styled-components"

export const Input = styled.input`
padding:${(props)=> props.padding};
width:450px;
height:50px;
&:focus{
    outline:none;
}
`