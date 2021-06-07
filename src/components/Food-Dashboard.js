import React from 'react';
import { Link } from 'react-router-dom';


const FoodDashboard = () => (
    <div className="content">
        <h1> Welcome to Food's Kitchen</h1> 
        <button><Link className='main-button'  to='/food-item'>GO TO MENU </Link></button> 
    </div>
)

export default FoodDashboard;