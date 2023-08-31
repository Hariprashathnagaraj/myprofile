import React from 'react'
import photo from '../About/WhatsApp Image 2023-08-16 at 2.41.39 PM (1).png'
import { Typewriter } from "react-simple-typewriter";

export function Header() {
  return (
    <>
    <header id='header'>
        <div className='container'>
            <div className='row'>
                <div className='col-6'>
                    <div className='header_content'>
                        <div className='header-section'>
                            <h2>Hello, I AM</h2>
                            <h1>Hari Prashath</h1>

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
                //   onLoopDone={handleDone}
                //   onType={handleType}
                />
              </span>
            </h2>

                            {/* <p>Front-end Developer</p>  */}

                            <div className='header_buttons'>
                                <a href='header' className='btn btn-outline'>
                                    Hire Me
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-6'>
                    {/* <img src={photo} alt='' className='image' /> */}
                </div>
            </div>
        </div>
    </header>
    </>
  )
}