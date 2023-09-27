import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from '../../Pages/HomePage'
import DetailPage from '../../Pages/DynamicRoute';
import Foodsystem from '../../Pages/FoodSyst/foodsys';

export default function PageRoutes(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage/>} />
                <Route path='/catering/:detail' element={<DetailPage/>} />
                <Route path='/Foodsystem/:cat' element={<Foodsystem/>} />
                
            </Routes>
        </BrowserRouter>
    )
}