import React from 'react';
import Auth from './components/Auth/Auth';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/auth' element={<Auth />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;