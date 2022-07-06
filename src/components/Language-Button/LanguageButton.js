import React from "react";
import { Div,Select,Option } from "./style";
// import globe from '../../../public/assets/globe.png'


export const LanguageButton = (props) => {
    return(
        <Div width={props.width} height={props.height}>
        <img src={"../assets/globe.png"} width="17px"  alt=''/>
        <Select>
            <Option>English</Option>
            <Option>हिंदी</Option>
        </Select>
        </Div>
    )
}