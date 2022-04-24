import * as actionType from '../constants/actionTypes';
import { UPDATE_MEAL_DATA } from '../constants/actionTypes.js';


const userReducer = (state = { user: null, loading: false }, action) => {
  switch (action.type) {
    case actionType.USER_LOADING:
        return { ...state, loading: true };
    case actionType.SET_CURRENT_USER:
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
      return { ...state, user: action.data, loading: false };
    case actionType.LOGOUT:
      localStorage.clear();
      return { ...state, user: null, loading: false };
      case UPDATE_MEAL_DATA:
        return action.payload;
    default:
      return state;
  }
};

export default userReducer;