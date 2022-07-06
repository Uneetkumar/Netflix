import styled from "styled-components";

export const Button = styled.div`
  width: ${(props) => props.width};
  background: #e50914;
  height: ${(props) => props.height};
  font-size: 18px;
  border-radius: 5px;
  margin-left: 20px;
  border:none;
  display: flex;
  justify-content: center;
  align-items:center;
`;