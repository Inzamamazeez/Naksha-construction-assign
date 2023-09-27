import React from 'react';
import './header.css';
import { Link, useNavigate } from 'react-router-dom';
// import { Link } from 'react-scroll';



export default function Header (){
  
    
    return(
        <>
        <div className='header_container'>
            <div className='header_image' >
                {/* <Link to={'/'}> */}
                <img src='https://www.unioncatering.in/wp-content/uploads/2023/04/Union-Catering-Logo-Finalised-1280x905.png' alt='logo of catering'/>
                {/* </Link> */}
            </div>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link
              to='serviceid' // Replace with the ID of the target section
              spy={true}
              smooth={true}
              duration={500}
            >
              Service
            </Link></li>
                <li>About Us</li>
                <li>Gallery</li>
                <li>Testimonials</li>
            </ul>

        </div>
        </>
    )
}