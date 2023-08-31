import React from "react";



export function Certificate(){

    const header={
        mainHeader:"my Certificates",
        subHeading:"Courses",
    };
    const state =[
        {
            id:1,
            icon:"./image/HTML.jpg",
            heading:"HTML",
        },
        {
            id:2,
            icon:"./image/CSS.jpg",
            heading:"CSS",
        },
        {
            id:3,
            icon:"./image/Frontend Development.jpg",
            heading:"Frontend Development",
        },
        {
            id:4,
            icon:"./image/javascript.jpg",
            heading:"javascript",
        },
    //     {
    //         id:5,
    //         icon:"./image/certificate 5.jpg",
    //         heading:"Programming with JavaScript",

    //     },
    //     {
    //     id:6,
    //     icon:"./image/certificate 6.jpg", 
    //     heading:"Style Sheets- CSS - Full Stack Developer / Web Development",
    // },

    ];
    return(
        <>
        <section id="certificates">
    <div className="services">
        <div className="container">
            <div className="services_header">
                <div className="common">
<h6 className="heading">{header.mainHeader}</h6>
<h2 className="subheading">{header.subHeading}</h2>
<div className="commonBorder"></div>
                </div>
                <div className="row bgMain">
                    {state.map((info) => (
                        <div className="col-4 bgMain">
                            <div className="services_box">
                                <img src={info.icon} alt='' className="commonIcons" style={{height:100,width:100}}/>
                                <h4 className="services_box-header">{info.heading}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
    </section>
        </>
    );
}