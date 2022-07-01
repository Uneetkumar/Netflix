import styled from "styled-components";

export const Div = styled.div`
  padding: ${(props) => props.padding};
  width: ${(props) => props.width};
  display: flex;
  min-height: ${(props) => props.minheight};
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  color: white;
  background: ${(props) => props.background};
  border-bottom:${(props) => props.bottom};
`;
