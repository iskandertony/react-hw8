import { useEffect, useState } from "react";
import Child from "./Child";
import CoffeCold from "../About/CoffeCold";
import App from "../../App";


const Effects = ({ text,setText }) => {
    const [show, setShow] = useState(false)
   



    useEffect(() => {
        console.log('empty')
    }, []);

    useEffect(() => {
        setText(text + 'a')
    }, [show])

    const handleClick = () => {
        setShow(!show)
    }

    return (
        <div>
            <h1>{text}</h1>



            <button onClick={handleClick}>Click</button>
        </div>
    )
}

export default Effects