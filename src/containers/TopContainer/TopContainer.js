import React from "react";
import { GetStarted } from "../../components/Search-Box/GetStarted";
import { Container,Div,TextDiv,H1 } from "./style";
import { PrimaryButton } from "../../components/Primary-Button/Button";
import { LanguageButton } from "../../components/Language-Button/LanguageButton";

const TopContainer = () => {
  return (
    <Container>
    <Div padding='10px 50px' direction='column'>
      <Div justify='space-between' align="center" marginTop="20px">
        <div>
          <img
            src={"../assets/logo.png"}
            alt=''
            width="150px"
          />
        </div>
        <Div>
         <LanguageButton width="110px" height="40px"/>
          <PrimaryButton/>
        </Div>
      </Div>
      <TextDiv>
        <H1 font="50px" tsize="35px">
          Unlimited movies, TV <br /> shows and more.
        </H1>
        <H1 font="25px" tsize="15px">Watch anywhere. Cancel anytime.</H1>
        <GetStarted />
      </TextDiv>
    </Div>
    </Container>
  );
};
export default TopContainer;
