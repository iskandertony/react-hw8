import BlockB from "../BlockB/BlockB"
import BlockC from "../BlockC/BlockC"
import { useState } from "react"

const BlockA = () => {
    const [TextFromC, SetTextFromC] = useState("TEXT C");

  

    return (
        <div>
            <h1>Block A</h1>
            
            <BlockB TakeB={TextFromC}></BlockB>
            <BlockC CText={TextFromC} SetTextFromC={SetTextFromC}></BlockC>
        </div>
    )
}

export default BlockA