import React, { useContext, useState } from 'react';
import './service.css';
import { CateringData } from '../../Utility/contextstore/store';
import { useNavigate } from 'react-router-dom';




export default function Service (){
    const [data]= useContext(CateringData)
    // console.log(data);
    const navi = useNavigate()

    const[showPop,setShowPopUp]= useState(false)

    const handlePopup = (items) =>{
        setShowPopUp(items)
    }
    console.log(showPop);

    const handleCancel=()=>{
        setShowPopUp(false)
    }

    const handleNavigate=(label)=>{
        navi(`/catering/${label}`)
console.log(label);
    }
    return(
        <div id='serivceid'>
        <div className='service_heading'><h1>Service</h1>
        </div>

        <div className='card_conatiner'>
        {
            data.map((item,index)=>{
                return(
                    <div className='card' key={index} onClick={() => handlePopup(item)}>
                        <img src={item.img}></img>
                        <div>
                        {item.label}
                        </div>

    
                    </div>
                )
            })
        }
        </div>
        {
        showPop && 
        (
            <div className='popUp'>
                <div className='cancel' onClick={handleCancel}>X</div>
                <div className='popUp_text'>
                    <div className='sub_pop'>
               <h2>Category: {showPop.label}</h2>
               <div>Price: starting from ₹ {showPop.price}</div>
               <div>Process:  {showPop.process}</div>
               <div>Please contact: {showPop.time}</div>
                
               <div className='btn_cntr'>
               <button onClick={()=>handleNavigate(showPop.label)}>Show details</button>
               </div>

               </div>
               </div>
            </div>
        )
        
        }
        </div>
    )
}