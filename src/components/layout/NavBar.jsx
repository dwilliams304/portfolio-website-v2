import { useState, useRef } from "react";
import { headers } from "../../data/RandomHeaders";
import { FaBars, FaTimes } from 'react-icons/fa';

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
            <h1 onClick={changeText}>{headerText}.<span className="highlight">dev</span></h1>
            <nav ref={navRef}>


                <a onClick={showMobileNav} className="fancy-underline" href="#home">Home</a>
                <a onClick={showMobileNav} className="fancy-underline" href="#about">About</a>
                <a onClick={showMobileNav} className="fancy-underline" href="#projects">Projects</a>
                <a onClick={showMobileNav} className="fancy-underline" href="#contact">Contact</a>


                <button onClick={showMobileNav} className="nav-btn close-nav-btn">
                    <FaTimes />
                </button>
            </nav>
            <button onClick={showMobileNav} className="nav-btn open-nav-btn">
                <FaBars />
            </button>
        </header>
    )
}
