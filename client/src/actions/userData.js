import * as api from '../api/index.js';
import { GET_USER_DATA, UPDATE_MEAL_DATA } from '../constants/actionTypes.js';

export const getUserData = () => async (dispatch) => {
    try {
      const { data } = await api.getUserData();
      dispatch({ type: GET_USER_DATA, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  export const updateMealData = (updatedata) => async (dispatch) => {
    try {
      const { data } = await api.mealStatusUpdate(updatedata);
      dispatch({ type: UPDATE_MEAL_DATA, payload: data });
    } catch (error) {
      console.log(error);
    }
  };