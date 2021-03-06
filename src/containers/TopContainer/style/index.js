import styled from "styled-components";
import { device } from "../../../constant/Device-size/device";


export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.7) 50%,
      rgba(0, 0, 0, 0.7) 100%
    ),
    url("https://assets.nflxext.com/ffe/siteui/vlv3/271ac55e-7228-438e-824e-92db37981e59/993003ba-1a9f-4b48-854f-4959e42116f3/IN-en-20220627-popsignuptwoweeks-perspective_alpha_website_medium.jpg");
  border-bottom: 10px solid #222;
  box-shadow: rgb(74 74 74) 0px 0px 0px 1px;
`;

export const Div = styled.div`
display: flex;
flex-direction:${(props) => props.direction};
padding:${(props) => props.padding};
justify-content:${(props) => props.justify};
align-items: ${(props) => props.align};
text-align:${(props) => props.text};
margin-top: ${(props) => props.marginTop};

`
export const TextDiv = styled.div`
flex-direction:column;
 justify-content:center; 
 align-items:center; 
 text-align:center;
 padding-top:130px;
`

export const Select = styled.select`
  width: 100px;
  height: 30px;
  background: transparent;
  color: white;
`

export const H1 = styled.h1`
font-size:${(props) => props.font};

@media ${device.tablet}{
  font-size:${(props) => props.tsize}
}
`



