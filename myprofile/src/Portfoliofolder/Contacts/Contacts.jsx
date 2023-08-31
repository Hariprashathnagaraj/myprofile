import React from "react";
// import { FaEnvelopeOpen,FaPhoneSquareAlt } from 'react-icons/fa'
// import {fiSend} form 'react-icons/fi' 
// import Mylogo from './kp.png'
import {FaFacebookF,FaInstagram,FaTwitter,FaPinterest} from 'react-icons/fa'



export function Contact(){
    return(
        <>
        <div id="footer">
            <div className="container">

                <div className="footerSection">
                <span style={{color:"white"}}>Email    : harisharan81.hs@gmail.com</span><br/><br/>
                <span style={{color:"white"}}>Mobile : 8489317616</span><br/>

                    <div className="row justifyConter">
                        
                        <div className="footer-content">
                            <div className="footer-section-logo">
                                {/* <img src={Mylogo} alt=""/> */}
                                
                            </div>
                            <ul className="footerCircles">
                                <li><FaInstagram className="footerIcon"></FaInstagram></li>
                                <li>  <FaTwitter className="footerIcon"></FaTwitter></li>
                                <li><FaFacebookF className="footerIcon"></FaFacebookF></li>
                                <li><FaPinterest className="footerIcon"></FaPinterest></li>
                            </ul>
<div className="copy-right-content">
    <p className="copyright">Copyright {new Date().getFullYear()} Learndaily.com | All Rights Reserved.</p>
</div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        </>
    );
}