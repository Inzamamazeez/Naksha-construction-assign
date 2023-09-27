import React from 'react';
import './about.css';



export default function About (){
    return(
        <>
        <div className='about_heading'><h1>About Us</h1></div>
        <div className='about_photo'><img src='https://www.unioncatering.in/wp-content/uploads/2023/04/catering-digital-ordering-technology.jpg'/></div>
        <div className='about_para'>
            <p>At Union Catering Company, we understand that every event is unique and requires personalized attention to detail. Our experienced team will work with you to create a customized menu that fits your taste and budget. We use only the freshest and highest quality ingredients to ensure that your guests are treated to a culinary experience they will never forget. Our professional staff will be there every step of the way to ensure that your event runs smoothly and that your guests are well taken care of.</p>
            <p>In addition to delicious food and professional staff, we also offer beautiful presentation options to enhance the overall experience. From elegant table settings to stunning floral arrangements, we will work with you to create a visually stunning atmosphere that perfectly complements your event.</p>
            <p>When you choose Union Catering Company for your event, you can rest assured that you are in good hands. We take pride in our work and are committed to making your event a grand success. Contact us today to learn more about our services and how we can help make your event unforgettable.</p>
        </div>
        
        </>
    )
}