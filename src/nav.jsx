import { useState } from "react";
import './nav.css'

const Links = () => {
    return(
        <>
           <a href="#Services">Our Services</a>
           <a href="#Meet">Meet Our Staff</a>
           <a href="#Tests">Testimonials</a>
           <a href="#Contact">Contact</a>

        </>
    );
};

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    }

    return(

        <nav className="main-nav">

            <div className="hamburger" onClick={toggleNavbar}>
                <div className={`line ${isOpen ? 'open' : ''}`}></div>
                <div className={`line ${isOpen ? 'open' : ''}`}></div>
                <div className={`line ${isOpen ? 'open' : ''}`}></div>
            </div>

            <div className={`nav ${isOpen ? 'open' : ''}`}>
                <Links/>
            </div>
        </nav>
    );
};

export default Nav;
