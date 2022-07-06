import styled from "styled-components";
import { device } from "../../../constant/Device-size/device";

export const Div = styled.div`
  display: flex;
  background: #000;
  flex-direction: column;
  padding: 50px 15vw 0px 15vw;
  color: #8f8686;
  overflowx:hidden;
`;

export const SubDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width:90%;
  @media ${device.tablet}{
   min-width:100%;
  }
`;

export const Title = styled.h1`
  text-align: left;
  font-size: 15px;
`;
export const P = styled.p`
  font-size: 15px;
  color: #8f8686;
  width: 200px;
  padding:0px 5px;
  line-height: 0px;
  &:hover {
    text-decoration: underline;
  }
`;
