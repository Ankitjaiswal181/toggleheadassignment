import React from 'react'
import Image from '../Image/Mask Group 99.png'
import './SectionOne.css'
export default function SectionOne() {
  return (
    <div className='container'>
        <div className='row'>
            <div className='content'>

            <h1>Lorem ipsum</h1>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,<br/> sed diam nonumy eirmod tempor invidunt ut labore et<br/> dolore magna aliquyam erat, sed diam voluptua. At vero <br/> eos et accusam et justo duo dolores et ea rebum. Stet clita kasd</p>
            <button>Know more <i className="fa fa-play"></i></button>
            </div>
            <div className='image__right'>
                <img src={Image} alt='poster'/> 
            </div>
        </div>

    </div>
  )
}
