import React from 'react'
// import './skills.css'

export const Skills = () => {
  return (
    <>
  
    <div id="skills">
      <h1 className='title-text'>Skills</h1>
      <div className='skill-box'>
        <span className='title'>HTML5</span>
        <div className='skill-bar'>
          <span className='skill-per html'>
            <span className='tooltip'>95%</span>
          </span>
        </div>
      </div>
      <div className='skill-box'>
        <span className='title'>CSS3</span>
        <div className='skill-bar'>
          <span className='skill-per css'>
            <span className='tooltip'>85%</span>
          </span>
        </div>
      </div>
      <div className='skill-box'>
        <span className='title'>JavaScript</span>
        <div className='skill-bar'>
          <span className='skill-per javascript'>
            <span className='tooltip'>75%</span>
          </span>
        </div>
      </div>
      <div className='skill-box'>
        <span className='title'>ReactJS</span>
        <div className='skill-bar'>
          <span className='skill-per reactjs'>
            <span className='tooltip'>75%</span>
          </span>
        </div>
      </div>
      <div className='skill-box'>
        <span className='title'>WordPress</span>
        <div className='skill-bar'>
          <span className='skill-per wordpress'>
            <span className='tooltip'>50%</span>
          </span>
        </div>
      </div>

    </div>
    </>
  )
}