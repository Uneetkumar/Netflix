import React from "react";
import { SubContainer,Div,H1,H2,Img } from "./style";


export const ChildContainer = () => {
  const Box = (props) => {
    return (
      <SubContainer  Direction={props.direction}>
        <Div>
          <H1 >{props.title}</H1>
          <H2 >{props.text}</H2>
        </Div>
        <Img src={props.link} alt='' />
      </SubContainer>
    );
  };
  return (
    <div>
      <Box
      
        title='Enjoy on your TV.'
        text='Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.'
        link={`../assets/tv.png`}
      />
      <Box
      direction="row-reverse"
        title='Download your shows to watch offline.'
        text='Save your favourites easily and always have something to watch.'
        link={`../assets/mobile.jpg`}
      />
      <Box
        title='Watch everywhere.'
        text='Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.'
        link={`../assets/device.png`}
      />
      <Box
      direction="row-reverse"
        title='Create profiles for children.'
        text='Send children on adventures with their favourite characters in a space made just for them—free with your membership.'
        link={`../assets/child.png`}
      />
    </div>
  );
};
