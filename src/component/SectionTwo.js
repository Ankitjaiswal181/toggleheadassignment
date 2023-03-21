import React from 'react'
import Schedule from '../common/Schedule'
import './SectionTwo.css'
import Card from '../common/Card'
export default function SectionTwo() {
  return (
    <>
    <div className='container'>
        <div className='row'>
            <div className='section-two__upper'>
                <div className='schedule'>
                    <h1>Upcoming <br/>Examinations</h1>
                    <p>Enquire about the examination<br/> & register for the exams</p>
                </div>
                <div className='schedule__right'>
                    <Schedule title={'02th October 2014'} value={'Level 1 exam'}/>
                    <Schedule title={'Nov-Dec 2016'} value={'Level 2'}/>
                    <Schedule title={'Ongoing this year'} value={'Level 3 (Grad)'}/>
                    

                </div>
                

            </div>
        </div>
    </div>
    <div className='section-two__lower'>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
</div>
    </>
    
  )
}
