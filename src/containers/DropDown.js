import React from "react";
import { Div } from "../components/containerStyle/Div.style";
import { DropDownButton } from "../components/containerStyle/DropDownButton";
import { GetStarted } from "../constant/GetStarted";

export const DropDown = () => {

  const Dropbox = (props) => {
    return (
      <Div direction="column"  justify="center" align="center" id="DropDownwrapper">
        <DropDownButton>{props.title}</DropDownButton>
        <ul id="LiElem">
          <li >{props.text}</li>
        </ul>
      </Div>
    );
  };

  return (
    <Div background='#000' minheight='100vh'id="Dropbox-wrapper" direction='column' align='center' bottom="10px solid #222222" padding="50px 0px 100px 0px">
      <h1>Frequently Asked Questions</h1>
      <div>
        <Dropbox
          title='What is Netflix?'
          text='Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.'
        />
        <Dropbox
          title='How much does Netflix cost?'
          text='Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.'
        />
        <Dropbox
          title='Where can I watch?'
          text='Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.'
        />
        <Dropbox
          title='How do I cancel?'
          text='Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.'
        />
        <Dropbox
          title='What can I watch on Netflix?'
          text='Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.'
        />
        <Dropbox
          title='Is Netflix good for kids?'
          text='The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.'
        />
      </div>

      <GetStarted/>
    </Div>
  );
};
