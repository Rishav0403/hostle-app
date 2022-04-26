import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNetMealData } from '../../actions/userData';
import { useNavigate } from 'react-router-dom';
import './NetData.css';

const UserCard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const netData = useSelector((state) => state.meal);

  // console.log(userData);

  useEffect(() => {
    dispatch(getNetMealData(navigate));
  }, [dispatch, navigate]);
  return (
    <>
      <div className="net-meal-container">
        <div className="net-meal-wrapper">
          <div className="row">
            <div className="col main">Meal Type</div>
            <div className="col">Boarder</div>
            {/* <div className="col">Guest</div> */}
          </div>
          <div style={{height: '1px', background: 'black', width:'100%', margin:'5px 0' }} />
          <div className="row">
            <div className="col main">All</div>
            <div className="col">{netData.allMealType}</div>
            {/* <div className="col">20</div> */}
          </div>
          <div className="row">
            <div className="col main">Veg</div>
            <div className="col">{netData.veg}</div>
            {/* <div className="col">20</div> */}
          </div>
          <div className="row">
            <div className="col main">Non chicken</div>
            <div className="col">{netData.nonChicken}</div>
            {/* <div className="col">10</div> */}
          </div>
          <div className="row">
            <div className="col main">Non Egg</div>
            <div className="col">{netData.nonEgg}</div>
            {/* <div className="col">50</div> */}
          </div>
          <div style={{height: '1px', background: 'black', width:'100%', margin:'5px 0' }} />
          <div className="row">
            <div className="col main">Total : </div>
            <div className="col">{netData.total}</div>
            {/* <div className="col">50</div> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default UserCard;
