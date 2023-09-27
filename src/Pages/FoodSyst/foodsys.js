import React,{useEffect, useState} from 'react';
import './foodsys.css';
import Header from '../../Components/Header/header';
import { useParams } from 'react-router-dom';

function Foodsystem() {
    let {cat} = useParams()
    console.log(cat);

   
    const [vegItem, setVegItem] = useState([
        {
          category: "Appetizers (Starters)",
          items: ["Samosas", "Pakoras", "Chaat"]
        },
        {
          category: "Main Course (Curries and Rice)",
          items: ["Paneer Tikka Masala", "Chana Masala", "Dal Makhani", "Vegetable Biryani", "Naan and various types of Indian bread"]
        },
        {
          category: "Sides and Accompaniments",
          items: ["Raita", "Aloo Gobi", "Baingan Bharta", "Mixed Vegetable Curry", "Pickles and Chutneys"]
        },
        {
          category: "Desserts",
          items: ["Gulab Jamun", "Rasgulla", "Kheer", "Gajar ka Halwa"]
        },
        {
          category: "Beverages",
          items: ["Masala Chai", "Lassi", "Mango Lassi", "Fresh Fruit Juices", "Thandai"]
        }
      ]);
      
      // Indian Non-Buffet System Menu
      const [nonVeg, setNonVeg] = useState([
        {
            category: "Appetizer (Starters)",
          items: ["Tandoori Chicken or Paneer"]
        },
        {
            category: "Main Course",
          items: ["Butter Chicken", "Rogan Josh", "Chicken Biryani"]
        },
        {
            category: "Sides",
          items: []
        },
        {
            category: "Dessert",
          items: ["Jalebi"]
        },
        {
            category: "Beverage",
          items: ["Lassi"]
        }
      ]);
      
      const[showData,setShowData]=useState([])

  const[showBuffet,setShowBuffet]=useState(false)
  const[showNonBuffetData,setShowNonBuffetData]=useState(false)

useEffect(()=>{
if(cat==='veg'){
    setShowData(vegItem)
}else{
    setShowData(nonVeg)
}
},[cat])

const handleBuffet=()=>{
setShowBuffet(true)
setShowNonBuffetData(false)
}

const handleNonBuffet=()=>{
    setShowNonBuffetData(true)
    setShowBuffet(false)


}


  return (
    <div className='system_container'>
        <Header/>
        <h1>Select Food System.</h1>
        <div className='system_button'>
            <button onClick={handleBuffet}>Click here for Buffet items</button>
            <button onClick={handleNonBuffet}>Click here for Non Buffet items</button>
        </div>
        {
            showBuffet &&
            (
                <div className='food_list'>
            {showData.map((categoryData, index) => (
      <div key={index}>
        <h2>{categoryData.category}</h2>
        <ul>
          {categoryData.items.map((item, itemIndex) => (
            <li key={itemIndex}>{item}</li>
          ))}
        </ul>
      </div>
    ))}
           </div>
            )
        }
        {
            showNonBuffetData &&
            <div className='food_list'>
            {showData.slice(1,4).map((categoryData, index) => (
      <div key={index}>
        <h2>{categoryData.category}</h2>
        <ul>
          {categoryData.items.map((item, itemIndex) => (
            <li key={itemIndex}>{item}</li>
          ))}
        </ul>
      </div>
    ))}
           </div>
        }
    </div>
  )
}

export default Foodsystem;