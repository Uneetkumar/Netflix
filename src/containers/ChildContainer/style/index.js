import styled from "styled-components";
import { device } from "../../../constant/Device-size/device";

export const SubContainer = styled.div`
  display: flex;
  flex-direction:${(props)=> props.Direction};
  justify-content: space-between;
  align-items: center;
  background: #000;
  // height: ${(props) => props.height};
  border-bottom: 10px solid #222;
  padding: 5% 10%;

  @media ${device.tablet}{
    text-align:center;
    flex-direction:column;
    justify-content:center;
    padding:30px 130px;
  }
`
export const H1= styled.h1`
font-size:50px;

@media ${device.tablet}{
  font-size:35px;
  padding:0px 45px;
}
@media ${device.mobileL}{
  font-size:25px;
}
`
export const H2= styled.h1`
font-size:25px;
@media ${device.tablet}{
  padding:0px 15px;
  font-size:15px;
}
@media ${device.mobileL}{
  font-size:10px;
}
`
export const Img = styled.img`
width='500px';
@media ${device.mobileL}{
  width:300px;
}
`

export const Div = styled.div`
width:550px;
`
