import React from 'react';
import { FaHome, FaClipboard, FaUserFriends, FaUserCog } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import './BottomNav.css';

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const currentLocation = location.pathname;

  const handleOnclick = (btnType) => {
    switch(btnType){
      case 'home':
        navigate('/');
        break;
      case 'data':
        navigate('/data');
        break;
      case 'guest':
        navigate('/guest');
        break;
      case 'profile':
        navigate('/profile');
        break;
      default:
        navigate('/');
    }
  }

  return (
    <>
      <div className="bottom-nav">
        <div className="tab-container">
          <button className={`tab purple ${currentLocation==='/' ? 'active': null }`} onClick={() => handleOnclick('home')}>
            <FaHome />
            <p>Home</p>
          </button>
          <button className={`tab pink ${currentLocation==='/data' ? 'active': null }`} onClick={() => handleOnclick('data')}>
            <FaClipboard />
            <p>Data</p>
          </button>
          <button className={`tab yellow ${currentLocation==='/guest' ? 'active': null }`} onClick={() => handleOnclick('guest')}>
            <FaUserFriends />
            <p>Guest</p>
          </button>
          <button className={`tab teal ${currentLocation==='/profile' ? 'active': null }`} onClick={() => handleOnclick('profile')}>
            <FaUserCog />
            <p>Profile</p>
          </button>
        </div>
      </div>
    </>
  )
}

export default BottomNav;