import React, { useContext,  } from 'react';
import { CateringData } from '../../Utility/contextstore/store'
import { useNavigate, useParams } from 'react-router-dom';
import './detailPage.css'
import Header from '../../Components/Header/header';
import Foodsystem from '../FoodSyst/foodsys';

function DetailPage() {
    const [data]= useContext(CateringData)
    const {detail} = useParams()


    const navi =useNavigate();

  
  return (
    <>
      <Header/>

    <div className='detail_cntnr'>
        <h1>{detail} Menu:</h1>
        <div className='detail_cntr' >
            <div className='detail_sub_cntr'>
          
        {
            data.filter((item)=>item.label===detail).map(item=>
                 (
                    <div key={item.id}>
                    <div className='detailed_img'> 
                    <div className='food_details'>
                        <img src='https://img.freepik.com/free-photo/delicious-indian-food-tray_23-2148723505.jpg?w=740&t=st=1695814049~exp=1695814649~hmac=c97f7c1c236ddfd0ead82673de16fa8a9c408ace0c666e84ed479f565d57a8d7' alt='veg' />
                        <button onClick={()=>navi(`/Foodsystem/veg`)}>Click for Veg Items</button>
                    </div>
                    <div className='food_details'>
                        <img src='https://img.freepik.com/free-photo/side-view-baked-chicken-with-cucumber-lemon-seasoning-bread-table_141793-4757.jpg?w=900&t=st=1695814161~exp=1695814761~hmac=759c663d418236bfcf864a6dcd5845eda9226f7d62152839bc3a7cb7e2ab61c6' alt='veg' />
                        <button onClick={()=>navi(`/Foodsystem/nonveg`)}>Click for Nonveg Items</button>
                        </div>
                    </div>
                    </div>
                 )
            )
        }
    </div>
          
    </div>
        </div>
        </>
  )
}

export default DetailPage