import React from 'react'
import './SecrtionFour.css'
import Add from '../Image/add.png'
import expand from '../Image/expand.png'
import SubsImage from '../Image/Subs.png' 

export default function () {
  return (
    <div className='container'>
        <div className='faq'>
            <h2>FAQ</h2>
            <div className='qa'>
                <p>How does an investor gain access to MF Utility? <img src={Add} alt='add'/></p>
                <p className='highlight'>How does an investor gain access to MF Utility? <img src={expand} alt='expand'/></p>
                <p>Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                <p>How does an investor gain access to MF Utility? <img src={Add} alt='add'/></p>    
            </div>
            <div className='subcribe-section'>
                <div className='subs'>
                <h1>Subscribe</h1>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed </p>
                <input type='email' placeholder='Enter your Email Address'></input>
                <button>Subscribe Now <i className="fa fa-play"></i></button>
                </div>
               
                <div className='image-section'>
                    <img src={SubsImage} alt='poster'/>

                </div>
            </div>
        </div>
    </div>
  )
}
