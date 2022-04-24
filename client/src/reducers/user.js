import * as actionType from '../constants/actionTypes';


const userReducer = (state = { user: null, loading: false }, action) => {
  switch (action.type) {
    case actionType.USER_LOADING:
        return { ...state, loading: true };
    case actionType.SET_CURRENT_USER:
      // console.log(action?.data.token)
      localStorage.setItem('token', action?.data.token );
      return { ...state, user: action.data, loading: false };
    case actionType.LOGOUT:
      localStorage.clear();
      return { ...state, user: null, loading: false };
    default:
      return state;
  }
};

export default userReducer;