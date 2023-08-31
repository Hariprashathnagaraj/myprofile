import React, { useState } from "react"
import './nav.css'
// import logo from '../components/pages/krish.jpg'

export const Header = () => {
    // when scroll header at top 
    window.addEventListener('scroll', function () {
        const header = document.querySelector('.header')
        header.classList.toggle('active', window.scrolly > 100)
    })
    //toggle menu ..
    const [Mobile, setMobile] = useState(false)
    return (
        <>
            <header className="header">
                <div className="container d_flex">
                    <div className="logo">
                    <li><a href="#home">
                   <h1>Hari Prashath</h1></a></li>
                        {/* <img className="photo" src={logo} alt='' style={{ height: '40px' }} /> */}
                    </div>
                    <div className="navlink">
                        {/* <ul className="link f_flex uppercase"> */}
                        <ul className={Mobile ? 'nav-links-mobile' : 'link f_flex uppercase'} onClick={() => setMobile(false)}>
                            <li><a href="#about">About</a></li>
                            <li><a href="#certificates">Certificates</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#contacts">Contacts</a></li>
                        </ul>
                        <button className="toggle" onClick={() => setMobile(!Mobile)}>
                            {
                                Mobile ?
                                    <i className="fas fa-times close home-btn" ></i> :
                                    <i className="fas fa-bars open" ></i>
                            }


                        </button>
                    </div>
                </div>


            </header>

            <section className='demo'></section>
        </>
    )
}