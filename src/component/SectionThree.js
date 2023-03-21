import React from 'react'
import SectionContent from '../common/SectionContent'
import './SectionThree.css'
export default function SectionThree() {
  return (
    <div className='section-three'>
        <div className='container'>
            <div className='row'>
            <SectionContent title={'Lorem ipsum'} count={'123+'} heading={'Lorem ipsum'} />
            <SectionContent title={'Lorem ipsum'} count={'12+'} heading={'Lorem ipsum'} />
            <SectionContent title={'Lorem ipsum'} count={'12+'} heading={'Lorem ipsum'} />
            <SectionContent title={'Lorem ipsum'} count={'123'} heading={'Lorem ipsum'} />
            </div>
        </div>
    </div>
  )
}
