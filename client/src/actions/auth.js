import { LOGOUT, SET_CURRENT_USER } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const signin = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    dispatch({ type: SET_CURRENT_USER, data });
    navigate('/');
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    dispatch({ type: SET_CURRENT_USER, data });
    navigate('/');
  } catch (error) {
    console.log(error);
  }
};

export const logout = (navigate) => (dispatch) => {
  try {
    dispatch({ type: LOGOUT });
    navigate('/auth');
  } catch (error) {
    console.log(error);
  }
}