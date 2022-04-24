import axios from 'axios';

const API = axios.create({ baseURL: 'http://192.168.43.15:5000/api/v1' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }
  return req;
});

export const getUserData = () => API.get('/boardermeal');
export const mealStatusUpdate = (updatedata) => API.patch('/boardermeal', updatedata);

export const signIn = (formData) => API.post('/user/login', formData);
export const signUp = (formData) => API.post('/user/register', formData);