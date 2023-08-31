import React from "react"
import picture from '../About/WhatsApp Image 2023-08-16 at 2.41.39 PM (1).png'

export function About(){
    return(
        <>

<div id="about">
    <div className="container">
        <div className="common">
            <h1 className="about-title">About Me</h1>
                <div className="underline-border"></div>  
        </div>
        <div className="row h-650 aligncenter">
            <div className="col-6">
                <div className="about_img">
                    <img src={picture} alt=''style={{height:300,width:250}}/>
                </div>
            </div>
            <div className="col-6">
                <div className="about_info">
                    <h1>Developer & Designer</h1>
                    <div className="about_info">
                        <p>
                        Front-end Developer,A highly ambitious individual seeking a <br/>
                        job opportunity in a progressive institution that allows me <br/>
                        to use and strengthen my interpersonal skills,academic knowledge, <br/>
                        and experience. To meet the organization's objectives thereby <br/>
                        contributing to the success of an organization.
                        </p>
                        <div className="about_buttons">
                            <a href="#about" className="btn about-btn-outline">Download CV</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>








{/*   
<section className="about section" id='about'>
        
        
        <div className="main_head container grid"> 
        <img src={picture} alt='' className="about_img"/>
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
        </section> */}
        </>
    );
}