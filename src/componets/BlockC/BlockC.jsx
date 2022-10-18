import { useState } from "react"
import BlockA from "../BlockA/BlockA";
import BlockD from "../BlockD/BlockD"

const BlockC = ({ CText, SetTextFromC }) => {



    const handleClick = () => {

        SetTextFromC(CText + "a")
        console.log("clicked");
    }




    return (
        <div>
            <div onClick={handleClick}>Block C: {CText}</div>
            <BlockD DText={CText}></BlockD>
        </div>
    )
}

export default BlockC