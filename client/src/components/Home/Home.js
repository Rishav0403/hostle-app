import React, {useEffect} from 'react';
import './Home.css';
import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/js/all.min.js";
// import { DriveEtaOutlined } from '@mui/icons-material';
import BottomNav from '../BottomNav/BottomNav';
import UserCard from '../UserCard/UserCard';
import Navbar from '../Navbar/Navbar';
import {useDispatch} from 'react-redux';
import { getUserData } from '../../actions/userData';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);
  return (
    <div className="main-container">
      <Navbar />
      <UserCard />
      <BottomNav />
    </div>
  )
}

export default Home;