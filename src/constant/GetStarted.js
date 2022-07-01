import React from "react";
import { Input } from "../components/containerStyle/Input.style";
import { Div } from "../components/containerStyle/Div.style";
import { PrimaryButton } from "../components/containerStyle/primaryButton.style";

export const GetStarted= () =>{
    return(
        <Div direction="column" align="center" justify="center" padding="20px 0px 0px 0px">
            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
            <Div direction="row" align="center">
                <Input  placeholder="Email Address" />
                <PrimaryButton height="55px" background="#e40813" width="200px" size={"25px"}>Get Started</PrimaryButton>
                </Div>
            </Div>
    )
}