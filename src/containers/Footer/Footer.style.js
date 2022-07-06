import React from "react";
import { Div,Title,P,SubDiv } from "./style/index";
import { LanguageButton } from "../../components/Language-Button/LanguageButton";

export const Footer = () => {
  return (
    <Div>
      <Title>Questions? Call 000-800-040-1843</Title>
      <SubDiv>
        <P>FAQ</P>
        <P>Help Center</P>
        <P>Account</P>
        <P>Media Center</P>
        <P>Invester Relations</P>
        <P>Jobs</P>
        <P>Ways to Watch</P>
        <P>Terms of Use</P>
        <P>Privacy</P>
        <P>Cookie Preferences</P>
        <P>Corporate Information</P>
        <P>Contact Us</P>
        <P>SPeed Test</P>
        <P>Legal Notices</P>
        <P>Only on Netflix</P>
      </SubDiv>
      <LanguageButton width="150px" height="50px"/>
      <P>Netflix India</P>
    </Div>
  );
};
