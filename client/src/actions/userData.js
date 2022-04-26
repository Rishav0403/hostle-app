import * as api from '../api/index.js';
import { GET_NET_DATA, GET_USER_DATA, UPDATE_MEAL_DATA, GET_INDIVIDUAL_DATA} from '../constants/actionTypes.js';

export const getUserData = (navigate) => async (dispatch) => {
    try {
      const { data } = await api.getUserData();
      dispatch({ type: GET_USER_DATA, payload: data });
    } catch (error) {
      if(error.response.status>=300){
        navigate('/auth');
      }
      console.log(error);
    }
  };

  export const updateMealData = (updatedata, navigate) => async (dispatch) => {
    try {
      const { data } = await api.mealStatusUpdate(updatedata);
      dispatch({ type: UPDATE_MEAL_DATA, payload: data });
    } catch (error) {
      if(error.response.status>=300){ 
        navigate('/auth');
      }
      console.log(error);
    }
  };
  export const getNetMealData = (navigate) => async (dispatch) => {
    try {
      const { data } = await api.getNetData();
      dispatch({ type: GET_NET_DATA, payload: data });
    } catch (error) {
      if(error.response.status>=300){ 
        navigate('/auth');
      }
      console.log(error);
    }
  };
  
  export const getIndividualMeal = (navigate) => async (dispatch) => {
    try {
      const { data } = await api.getIndividualMeal();
      dispatch({ type: GET_INDIVIDUAL_DATA, payload: data });
    } catch (error) {
      if(error.response.status>=300){ 
        navigate('/auth');
      }
      console.log(error);
    }
  };
