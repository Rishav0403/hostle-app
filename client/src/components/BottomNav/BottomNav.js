import React from 'react';
import { FaHome, FaClipboard, FaUserFriends, FaUserCog } from 'react-icons/fa';

const BottomNav = () => {
  return (
    <>
      <div className="bottom-nav">
        <div className="tab-container">
          <button className="tab purple active">
            <FaHome />
            <p>Home</p>
          </button>
          <button className="tab pink">
            <FaClipboard />
            <p>Link</p>
          </button>
          <button className="tab yellow">
            <FaUserFriends />
            <p>Search</p>
          </button>
          <button className="tab teal">
            <FaUserCog />
            <p>Profile</p>
          </button>
        </div>
      </div>
    </>
  )
}

export default BottomNav;