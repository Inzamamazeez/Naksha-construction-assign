import React, { useState } from 'react';
import './testimonial.css';




export default function Testimonial (){
   const[text,setText]=useState(
    [
        {text:"The food was absolutely delicious and the service was impeccable. Highly recommend this catering company!"},
        {text:"The catering team was very accommodating to our dietary restrictions and still managed to create a fantastic menu"},
        {text:"The catering team was professional and organized, making the planning process stress-free"},
        {text:"We had organized Times Business Awards at Mysore Union for business stalwarts. Popular bollywood star Mr Suniel Shetty and Police Commissioner Mr K T Balakrishna were chief guests. The Union Catering Company served the best food! Every guest was very happy. The service was impressive!"},
        {text:"The team went above and beyond to ensure our event was a success. The presentation was beautiful and the food tasted amazing"},
        {text:"The food was fresh, flavorful, and plentiful. Our guests raved about the catering all night."},
        {text:"The menu options were diverse and creative, making for an unforgettable culinary experience."},
        {text: "I’ve used this catering service multiple times and have never been disappointed. They always exceed my expectations"},
        {text: "I appreciated the attention to detail and the personalized service provided by this catering company."},
        {text: "The presentation of the food was beautiful and matched the elegance of our event perfectly."},
    ]
   )

    return(
        <>
        <div className='testimonial_head'>
            <h1>Testimonials</h1>
        </div>
        <div className='testimonial_container'>
        {
            text.map((item,index) =>{
                return(
                    <div key={index} className='testimonial_cards'>
                        {item.text}
                    </div>

                )
            })
        }
        </div>
        </>
    )
}