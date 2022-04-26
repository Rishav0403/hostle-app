import React from 'react';
import Auth from './components/Auth/Auth';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import MealHome from './components/MealHome/MealHome'
import Navbar from './components/Navbar/Navbar';
import BottomNav from './components/BottomNav/BottomNav';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/data' element={<MealHome />} />
          <Route path='/auth' element={<Auth />} />
          <Route path='/guest' element={<><Navbar /><h1 style={{ textAlign: 'center' }}>Guest</h1> <BottomNav /> </>} />
          <Route path='/profile' element={<><Navbar /><h1 style={{ textAlign: 'center' }}>Profile</h1> <BottomNav /> </>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;