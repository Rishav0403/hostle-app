import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateMealData } from '../../actions/userData';
import avatar from '../../static/image/avatar.jpeg';


const UserCard = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.meal);
  console.log(userData);

  const handleStatusChange = () => {
    try {
      dispatch(updateMealData({mealstatus: !userData?.mealstatus}));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
        <div className="user-profile">
        <div className="wrapper">
          <div className="img-area">
            <div className="inner-area">
                <img src={avatar} alt='avatar' />
            </div>
          </div>
          <div className="name">{userData?.name}</div>
          <div className="about">Department : DETS</div>
          <div className="about">Year : First</div>
          <div className="about">Meal Type : {userData?.mealtype}</div>
          <div className="about">Meal Status : {userData?.mealstatus ? 'On' : 'off'}</div>
          <div className="buttons">
              <button>Add guest</button>
              <button onClick={handleStatusChange}>Turn Meal Off</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserCard;