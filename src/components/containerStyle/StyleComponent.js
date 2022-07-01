import styled from "styled-components";

export const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #000;
  height: ${(props) => props.height};
  border-bottom: 10px solid #222;
  padding: 0px 100px;
`;
export const Select = styled.select`
  width: 100px;
  height: 30px;
  background: ${(props) => props.background};
  color: white;
`;
export const PrimaryButton = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: ${(props) => props.background};
  border: none;
  margin-left: ${(props) => props.left};
  color: white;
  font-size: ${(props) => props.size};
  border-radius: ${(props) => props.radius};
`;
export const Input = styled.input`
  padding: ${(props) => props.padding};
  width: 450px;
  height: 50px;
  &:focus {
    outline: none;
  }
`;
export const DropDownButton = styled.button`
  border: none;
  border-bottom: 1px solid #000;
  width: 800px;
  height: 70px;
  background-color: #303030;
  color: white;
  font-size: 30px;
  outline: none;
`;
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
  border-bottom: ${(props) => props.bottom};
`;
export const Container = styled.div`
  width: 100%;
  height: ${(props) => props.height};
  background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.7) 50%,
      rgba(0, 0, 0, 0.7) 100%
    ),
    url("https://assets.nflxext.com/ffe/siteui/vlv3/271ac55e-7228-438e-824e-92db37981e59/993003ba-1a9f-4b48-854f-4959e42116f3/IN-en-20220627-popsignuptwoweeks-perspective_alpha_website_medium.jpg");
  border-bottom: 10px solid #222;
  box-shadow: rgb(74 74 74) 0px 0px 0px 1px;
`;
