import { useState } from "react";
import { headers } from "../../data/RandomHeaders";

export default function NavBar(){
    const [headerText, setHeaderText] = useState('daviswilliams');

    const changeText = () => {
        var r = Math.floor(Math.random() * headers.length);
        setHeaderText(headers[r]);
    }

    return(
        <nav>
            <h1 onClick={changeText}>{headerText}.<span className="highlight">dev</span></h1>


            <a className="fancy-underline" href="#home">Home</a>
            <a className="fancy-underline" href="#about">About</a>
            <a className="fancy-underline" href="#projects">Projects</a>
            <a className="fancy-underline" href="#contact">Contact</a>
        </nav>
    )
}
