import React from "react";
import "./home.css";
// import image from '../'
import { Typewriter } from "react-simple-typewriter";
// import skill1 from './HTML5_logo_and_wordmark.svg.png'
// import skill2 from './png-javascript-badge-picture-8.png'
// import skill3 from './react.js-img.png'
// import hero from '../pages/krish.jpg'


export const Home = () => {
  return (
    <>
      <section className="hero" id="home">
        <div className="container f_flex top">
          <div className="left top">
            <h2>
              <span>Welcome</span>
            </h2>
            <h1>
              I am <span>Hari Prashath</span>
            </h1>
            <h2>
              <span className="type">
              
                <Typewriter
                  words={[" Front-End Developer ", " Interface Designer"]}
                  loop
                  cursor
                  cursorStyle=""
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                  // onLoopDone={handleDone}
                  // onType={handleType}
                />
              </span>
            </h2>
            {/* <p>A highly ambitious individual seeking a job opportunity in a progressive institution that allows me to use and strengthen my interpersonal skills, academic knowledge, and experience. To meet the organization's objectives thereby contributing to the success of an organization.</p> */}

            <div className="hero_btn d_flex">
              <div className="col_1">
                <h4>Find with Me</h4>
                <div className="button">
                  <button className="btn_shadow">
                    <i className="fab fa-facebook-f"></i>
                  </button>

                  <button className="btn_shadow">
                    <i className="fab fa-instagram"></i>
                  </button>

                  <button className="btn_shadow">
                    <a href="https://www.linkedin.com/in/hari-sharan29/">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </button>
                </div>
              </div>
              {/* <div className="col_1">
                <h4>Best Skill On</h4>
                <button className="btn_shadow">
<img src={skill1} alt=''/>
                    </button>
                <button className="btn_shadow">
<img src={skill2} alt=''/>
                    </button>
                <button className="btn_shadow">
<img src={skill3} alt=''/>
                    </button>
            </div> */}
            </div>
          </div>
          {/* <div className="right">
            <div className="right_img">
                <img src={hero} alt='' className="home_photo"></img>
            </div>
        </div> */}
        </div>
      </section>
    </>
  );
};
