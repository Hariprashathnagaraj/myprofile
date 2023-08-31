import React from "react";
import { FaAlignJustify } from "react-icons/fa";
// import picture from './Image/Hp icson.jpg'
export function Navbar() {
    const [state, setState] = React.useState(true);
    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar_container">
                    <ul className="navbar_left">
                        <div className="navbar_left-logo">
                            <img src="./image/png-transparent-hewlett-packard-house-and-garage-logo-dell-icon-hp-ink-text-trademark-thumbnail.png" alt="" /> 
                        </div>
                    </ul>
                    {state ? (
                        <ul className="navbar_right">
                            <li><a href="#header">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#certificates">Certificates</a></li>
                            {/* <li><a href="#projects">Projects</a></li> */}
                            <li><a href="#footer">Contacts</a></li>
                        </ul>
                    ) : (
                        "  "
                    )}
                </div>
            </div>
            <div className="toggle" onClick={() => setState(!state)}>
                <FaAlignJustify />
            </div>
        </nav>
    )
                    }
