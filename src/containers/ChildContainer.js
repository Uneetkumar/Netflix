import React from "react";
import { SubContainer } from "../containerStyle/StyleComponent";
import child from '../assets/child.png';
import Device from '../assets/device.png';
import mobile from '../assets/mobile.jpg';
import TV from '../assets/tv.png';


export const ChildContainer = () => {
  const Box =(props)=>{
    return(
    <SubContainer height='70vh'>
      <div>
        <h1>{props.title}</h1>
        <h2>
          {props.text}
        </h2>
      </div>
      <img src={props.link} alt='' width='40%'/>
    </SubContainer>
    );
  }
  const BoxReverse =(props)=>{
    return(
    <SubContainer height='70vh'>
      <img src={props.link} alt='' width='40%'/>
      <div>
        <h1>{props.title}</h1>
        <h2>
          {props.text}
        </h2>
      </div>
    </SubContainer>
    )
  }
  return (
    <div>
      <Box
      title="Enjoy on your TV."
      text="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
      link={TV}
      />
       <BoxReverse
      title="Enjoy on your TV."
      text="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
      link={mobile}
      />
       <Box
      title="Enjoy on your TV."
      text="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
      link={Device}
      />
       <BoxReverse
      title="Enjoy on your TV."
      text="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
      link={child}
      />
    </div>
  );
};
