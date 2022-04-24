import React, {useEffect} from 'react';
import './Home.css';
import BottomNav from '../BottomNav/BottomNav';
import UserCard from '../UserCard/UserCard';
import Navbar from '../Navbar/Navbar';
import {useDispatch} from 'react-redux';
import { getUserData } from '../../actions/userData';

const Home = () => {
  // <script src='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/js/all.min.js'></script>
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);
  return (
    <div className="main-container">
      <Navbar isLoggedIn={true} />
      <UserCard />
      <BottomNav />
    </div>
  )
}

export default Home;