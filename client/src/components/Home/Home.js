import React, {useEffect} from 'react';
import './Home.css';
import BottomNav from '../BottomNav/BottomNav';
import UserCard from '../UserCard/UserCard';
import Navbar from '../Navbar/Navbar';
import {useDispatch} from 'react-redux';
import { getUserData } from '../../actions/userData';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUserData(navigate));
  }, [dispatch, navigate]);
  return (
    <div className="main-container">
      <Navbar isLoggedIn={true} />
      <UserCard navigate={ navigate } />
      <BottomNav />
    </div>
  )
}

export default Home;
