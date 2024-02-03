import { useState, useRef } from "react";
import { headers } from "../../data/RandomHeaders";

export default function NavBar(){
    const [headerText, setHeaderText] = useState('daviswilliams');
    const navRef = useRef();

    const showMobileNav = () => {
        navRef.current.classList.toggle('responsive-nav');
    }

    const changeText = () => {
        var r = Math.floor(Math.random() * headers.length);
        setHeaderText(headers[r]);
    }

    return(
        <header>
            <nav ref={navRef}>
                <h1 onClick={changeText}>{headerText}.<span className="highlight">dev</span></h1>


                <a className="fancy-underline" href="#home">Home</a>
                <a className="fancy-underline" href="#about">About</a>
                <a className="fancy-underline" href="#projects">Projects</a>
                <a className="fancy-underline" href="#contact">Contact</a>


                <button className="nav-btn close-nav-btn">

                </button>
            </nav>
            <button className="nav-btn">

            </button>
        </header>
    )
}
