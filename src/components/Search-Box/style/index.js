import styled from "styled-components";
import { device } from "../../../constant/Device-size/device";

export const Div = styled.div`
display: flex;
flex-direction:column; 
align-items:center;
justify-content:center;
padding:20px 0px 0px 0px;
`
export const SubDiv = styled.div`
display: flex;
flex-direction:row; 
align-items:center;

@media ${device.tablet}{
  flex-direction:column;
}
`
export const H3=styled.h3`
@media ${device.tablet}{
  text-align:center;
  width:65%;
  font-size:15px;
}

`

export const PrimaryButton = styled.button`
  border: none;
  color: white;
  height:65px;
  background:#e40813;
  width:200px;
  font-size:25px;
  @media ${device.tablet}{
    margin-top:20px;
     width: 120px;
     font-size:15px;
     height:40px;
  }
`;
export const Input = styled.input`
  padding: ${(props) => props.padding};
  width: 450px;
  height: 65px;
  &:focus {
    outline: none;
  } 
  @media ${device.tablet}{
    height: 45px;
  }
  @media ${device.mobileL}{
    width:300px;
  }
`;