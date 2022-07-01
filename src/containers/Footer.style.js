import React from "react";
import { Div } from "../containerStyle/StyleComponent";

export const Footer = () => {
  return (
    <Div  background="#000" direction="column" padding="50px 15vw 0px 15vw" >
        <h1 id="Footer-title">Questions? Call 000-800-040-1843</h1>
    <div id="Footer-Child">
      <p>FAQ</p>
      <p>Help Center</p>
      <p>Account</p>
      <p>Media Center</p>
      <p>Invester Relations</p>
      <p>Jobs</p>
      <p>Ways to Watch</p>
      <p>Terms of Use</p>
      <p>Privacy</p>
      <p>Cookie Preferences</p>
      <p>Corporate Information</p>
      <p>Contact Us</p>
      <p>Speed Test</p>
      <p>Legal Notices</p>
      <p>Only on Netflix</p>
    </div>
    <select>
        <option>English</option>
        <option>Hindi</option>
    </select>
    <p>Netflix India</p>
    </Div>
  );
};
