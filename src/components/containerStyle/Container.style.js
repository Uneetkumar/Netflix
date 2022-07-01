import styled from 'styled-components';

export const Container = styled.div`
width:100%;
height: ${(props)=> props.height};
background:linear-gradient(to top,rgba(0,0,0,.7) 50%,rgba(0,0,0,.7) 100%),url('https://assets.nflxext.com/ffe/siteui/vlv3/271ac55e-7228-438e-824e-92db37981e59/993003ba-1a9f-4b48-854f-4959e42116f3/IN-en-20220627-popsignuptwoweeks-perspective_alpha_website_medium.jpg');
border-bottom:10px solid #222;
box-shadow: rgb(74 74 74) 0px 0px 0px 1px;
`;