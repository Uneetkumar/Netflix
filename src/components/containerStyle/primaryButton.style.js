import styled from 'styled-components'


export const PrimaryButton = styled.button`
width: ${(props)=> props.width};
height: ${(props)=> props.height};
background:${(props)=> props.background};
border:none;
margin-left: ${(props)=> props.left};
color:white;
font-size:${(props)=> props.size};
border-radius: ${(props)=> props.radius};
`