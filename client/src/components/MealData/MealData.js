import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIndividualMeal } from '../../actions/userData';
import { useNavigate } from 'react-router-dom';

import './MealData.css';
import ListItem from './ListItem';

const MealData = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.manager);

  // console.log(users);
  // console.log(Array.isArray(users));

  useEffect(() => {
    dispatch(getIndividualMeal(navigate));
  }, [dispatch, navigate]);

  return (
    <>
      <div className="meal-container">
        <div className="meal-wrapper">
          <div className="row">
            <div className="col main">UserName</div>
            <div className="col">Meal Type</div>
            <div className="col minor">Status</div>
          </div>
          <div style={{height: '1px', background: 'black', width:'100%', margin:'5px 0' }} />

          {
            users.map((user, index) => (
              <ListItem user={user} key={user._id} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default MealData;
