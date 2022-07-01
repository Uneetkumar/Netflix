import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Container } from './components/containerStyle/Container.style';
import TopContainer from './containers/TopContainer';
import { ChildContainer } from './containers/ChildContainer';
import { DropDown } from './containers/DropDown';
import '../src/components/containerStyle/home.style.css';
import { Footer } from './containers/Footer.style';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Container height="100vh">
    <TopContainer/>
    </Container>
    <ChildContainer />
    <DropDown id="DropDown"/>
    <Footer/>
  </React.StrictMode>
);

reportWebVitals();
