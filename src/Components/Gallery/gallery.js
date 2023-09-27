import React, { useContext } from 'react';
import './gallery.css';
import { CateringData } from '../../Utility/contextstore/store';


export default function Gallery (){
    const [data] = useContext(CateringData)
    return(
        <>
        <div className='gallery_head'><h1>Gallery</h1></div>
        <div className='card_conatiner'>
        {
            data.map((item,index)=>{
                return(
                    <div className='card' key={index}>
                        <img src={item.img}></img>
                        {/* <div>
                        {item.label}
                        </div> */}

    
                    </div>
                )
            })
        }
        </div>
        </>
    )
}