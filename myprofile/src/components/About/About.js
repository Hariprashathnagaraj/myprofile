import React from "react";
import './About.css';
// import picture from '../Home/edit.jpg'

export function About(){
    return(
        <>
  
<section className="about section" id='about'>
        
        
        <div className="main_head container grid"> 
        {/* <img src={picture} alt='' className="about_img"/> */}
        <div className="about-text">
        <h1 className="section_title">About Me </h1>
        <h5 className="section_subtitle">Developer <span className="design">& Designer</span></h5>
            <p className="about_description">
                <p>Front-end Developer,A highly ambitious individual seeking a job opportunity 
                    in a progressive institution that allows me to use and strengthen my interpersonal skills,
                     academic knowledge, and experience. To meet the organization's objectives thereby contributing 
                     to the success of an organization.</p>
            </p>
            <button type="button" className="github">GitHub</button>
        </div>
        </div>
        </section>
        </>
    );
}