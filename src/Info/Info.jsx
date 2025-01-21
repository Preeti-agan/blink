import React from 'react'
import './Info.css'
const Info = () => {
  return (
    <div className='info'>
      <div className='left'>
        <div className='infoleft'>
            <div className='title'>
                <h4 className='heading1'>Information</h4>
            </div>
            <div className='profilebody'>
                <p className='p'>
                    <span className='span'>Name</span>
                    <span className='span1'>Joshua Morgan</span>
                </p>
                <p  className='p'>
                    <span className='span'>Birthday</span>
                    <span className='span1'>Aug 12, 1986</span>
                </p>
                <p  className='p'>
                    <span className='span'>Phone</span>
                    <span className='span1'> 120-240-9600</span>
                </p>
                <p  className='p'>
                    <span className='span'>Email</span>
                    <span className='span1'> hello@josh.design</span>
                </p>
            </div>
        </div>
      </div>



      <div className='right'>
        <div className='row'>
            <div className='one'>
                <strong className='strong'>20+</strong>
                <p>Years of Experiences</p>
            </div>
            <div className='one'>
            <strong className='strong'>245</strong>
            <p>Happy Customers</p>
            </div>
            <div className='one'>
            <strong className='strong'>640</strong>
            <p>Project Finished</p>
            </div>
            <div className='one'>
            <strong className='strong'>72+</strong>
            <p>Digital Awards</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Info
