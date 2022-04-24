import React from 'react'

const BottomNav = () => {
  return (
    <>
      <div className="bottom-nav">
        <div className="tab-container">
          <button className="tab purple active">
            <i className="fas fa-home"></i>
            <p>Home</p>
          </button>
          <button className="tab pink">
            <i className="fas fa-clipboard"></i>
            <p>Link</p>
          </button>
          <button className="tab yellow">
            <i className="fas fa-user-friends"></i>
            <p>Search</p>
          </button>
          <button className="tab teal">
            <i className="fas fa-user-cog"></i>
            <p>Profile</p>
          </button>
        </div>
      </div>
    </>
  )
}

export default BottomNav;