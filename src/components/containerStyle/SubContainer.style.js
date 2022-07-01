import styled from 'styled-components';

export const SubContainer = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
background:#000;
height: ${(props)=> props.height};
border-bottom:10px solid #222;
padding:0px 100px;
`