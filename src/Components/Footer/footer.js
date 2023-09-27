import React from 'react';
import './footer.css';


export default function Footer (){
    return(
        <>
        <div className='footer_logo'>
                <img src='https://www.unioncatering.in/wp-content/uploads/2023/03/Union-Catering-Logo-Finalised-White-1024x724.png' alt='logo of catering'/>
                <div className='right_footer'>
                <h2>Contact Details</h2>
               
                <ul>
                    <li>Phone : 96111 61111</li>
                    <li>Email : info@unioncatering.in</li>
                    <li>Address : Hebbal Industrial Estate,
                        <br/> Hebbal, Ilavala Hobli, Karnataka 570027</li>
                </ul>
                </div>
        </div>
        </>
    )
}