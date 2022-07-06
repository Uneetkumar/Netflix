import styled from "styled-components";
import { device } from "../../../constant/Device-size/device";

export const Container = styled.main`
  background: #000;
  position: relative;
  display: flex;
  justify-content: center;
  border-bottom: 10px solid #303030;
`;

export const Section = styled.section`
  position: relative;
`;

export const InnerSection = styled.div`
  position: relative;
  max-width: 950px;
  padding: 2rem;

  @media ${device.tablet}{
    max-width:100%;
  }
`;

export const AccordionContainer = styled.div``;

export const AccordionInner = styled.div`
  position: relative;
  width: 100%;
  border: 1px solid black;
  border-radius: 4px;
`;
export const Title = styled.h1`
text-align:center;
font-size:50px;

`

export const AccordionItem = styled.div`
  &:not(:last-child) {
    border-bottom: 10px solid black;
  }
`;

export const AccordionTitle = styled.h3`
  font-weight: 800;
  height: 80px;
  background: #303030;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 1rem;
  cursor: pointer;
  font-size: 30px;
  @media ${device.tablet}{
    font-size:20px;s
  }
`;

export const AccordionBody = styled.div`
  display: block;
  position: relative;
  padding: 0;
  margin: 0;
  height: 0;
  overflow: hidden;
  transition: height 0.3s;

  ${({ active, bodyHeight }) =>
    active &&
    `
      height: ${bodyHeight}px;
    `}
`;

export const AccordionContent = styled.p`
  background: #303030;
  font-size: 25px;
  font-weight: 550;
  margin: 0;
  padding: 0 2rem 2rem;
  height: auto;
`;