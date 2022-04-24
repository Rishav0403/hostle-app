import axios from 'axios';

const API = axios.create({ baseURL: '/api/v1' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('token')) {
    req.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  }
  return req;
});

export const getUserData = () => API.get('/boardermeal');
export const mealStatusUpdate = (updatedata) => API.patch('/boardermeal', updatedata);

export const signIn = (formData) => API.post('/user/login', formData);
export const signUp = (formData) => API.post('/user/register', formData);
