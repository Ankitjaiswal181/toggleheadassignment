import React from 'react'
import './SectionContent.css'
export default function SectionContent(props) {
  return (
    <div className='contents'>
        <h3>{props.title}</h3>
        <h1>{props.count}</h1>
        <h2>{props.heading}</h2>
        <p>Lorem ipsum dolor sit amet,<br/> consetetur sadipscing elitr, sed diam<br/> nonumy eirmod tempor invidunt ut<br/> labore et dolore magna aliquyam erat</p>
    </div>
  )
}
