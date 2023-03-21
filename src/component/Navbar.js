import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
function Navbar() {
  return (

    <div className='container'>
      <div className='row'>
        <div className='header__logo'>
            LOGO
        </div>
        <nav>
          <ul className='nav-menu'>
            <li className='nav-item'>
                <a href='#'>Qualification</a><i className="fa fa-angle-down"></i>
            </li>
            <li className='nav-item'> <a href='#'>Organization</a><i className="fa fa-angle-down"></i></li>
            <li className='nav-item'> <a href='#'>Research & Analysis</a><i className="fa fa-angle-down"></i></li>
            <li className='nav-item'> <a href='#'>Lorem ipsum</a><i className="fa fa-angle-down"></i></li>
            <li className='nav-item'> <a href='#'>Lorem ipsum</a><i className="fa fa-angle-down"></i></li>
        </ul>
            <a href='#'><i className="fa fa-search"></i></a>
            <button>Enrolment</button>
        </nav>
      </div>
    </div>
    // <nav className='header'>
    //     <div className='logo'>
    //     <a to={'/'}>LOGO</a>    
    //     </div>
    //     <ul className='nav-menu'>
    //     <li className='nav-item'>
    //         <a>Qualification</a>
    //     </li>
    //     <li className='nav-item'> <a>Organization</a></li>
    //     <li className='nav-item'> <a>Research & Analysis</a></li>
    //     <li className='nav-item'> <a>Lorem ipsum</a></li>
    //     <li className='nav-item'> <a>Lorem ipsum</a></li>
    //     </ul>
    //     <div className='search-icon'>
    //         <a></a>
    //     </div>
    //     <a>Enrolment</a>

    // </nav>
  )
}

export default Navbar