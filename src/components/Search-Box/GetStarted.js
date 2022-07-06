import React from "react";
import { Div,SubDiv,Input,PrimaryButton,H3 } from "./style";

export const GetStarted= () => {
    return(
        <Div>
            <H3>Ready to watch? Enter your email to create or restart your membership.</H3>
            <SubDiv>
                <Input  placeholder="Email Address" />
                <PrimaryButton>Get Started  &#62;</PrimaryButton>
                </SubDiv>
            </Div>
    )
}