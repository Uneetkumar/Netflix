import React from "react";
import { PrimaryButton } from "../components/containerStyle/primaryButton.style";
import { GetStarted } from "../constant/GetStarted";
import { Select } from "../components/containerStyle/Select.style";
import { Div } from "../components/containerStyle/Div.style";

const TopContainer = () =>{
    return(
        <Div padding="10px 50px" direction="column">
        <Div justify="space-between">
            <div>
                <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" width={"200px"}/>
            </div>
            <div>
                <Select background="transparent">
                    <option>English</option>
                    <option>hindi</option>
                </Select>
                <PrimaryButton width="100px" background="#e50914"  height="30px" size={"15px"} radius={"5px"} left="20px">Sign in</PrimaryButton>
            </div>
        </Div>
        <Div direction="column" justify="center" align="center" id="Home_text">   
            <h1>Unlimited movies, TV <br/> shows and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <GetStarted/>
        </Div>
        </Div>
    )
}
export default TopContainer;