import React from 'react';
import './MealHome.css';
import BottomNav from '../BottomNav/BottomNav';
import Navbar from '../Navbar/Navbar';
import NetData from '../NetData/NetData';
import MealData from '../MealData/MealData';

const Home = () => {
  return (
    <div className="main-container">
      <Navbar isLoggedIn={true} />
      <NetData />
      <MealData />
      <BottomNav />
    </div>
  )
}

export default Home;
