import React, { Fragment } from 'react'
import Calender from '../Image/event.png'
export default function schedule(props) {
  return (
    <Fragment>
        <img src={Calender} alt='calender'/>
        <div className='details'>
        <h2>{props.title}</h2>
        <p>{props.value}</p>
        </div>
        
    </Fragment>
  )
}
