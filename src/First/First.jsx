import React from 'react'
import './First.css'
const First = () => {
  return (
   <div className='main'>
    <div className='section'>
      <div className='first'>
      <a>First</a>
      </div>
      <div className='home'>
        <ul className='ul'>
            <li className='list active'>HOME</li>
            <li className='list'>ABOUT</li>
            <li className='list'>SERVICES</li>
            <li className='list'>PROJECTS</li>
            <li className='list'>CONTACT</li>
        </ul>
      </div>
      <div className='call'>
        <img  className="phone"src='https://cdn-icons-png.flaticon.com/128/15429/15429164.png' alt=""></img>
        <a className='number'>120-240-9600</a>
      </div>




      
    </div>


    <div className='sectionn2'>
        <div className='left1'>
            <div className='hi'>
                <img className='avtar' src="https://templatemo.com/templates/templatemo_578_first_portfolio/images/happy-bearded-young-man.jpg" alt=""></img>
                <h1 className='hello'>Hello friend!</h1>
            </div>
            <h2 className='work'>I’m available for freelance work.</h2>
            <p className='lets'>Let's begin</p>
        </div>
        <div className='right1'>
            <img className='imgright1' src="https://templatemo.com/templates/templatemo_578_first_portfolio/images/portrait-happy-excited-man-holding-laptop-computer.png" alt=""></img>
        </div>
    </div>
    </div>
    
  )
}

export default First
