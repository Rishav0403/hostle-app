import React, { useState } from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import Input from './Input';
import Navbar from '../Navbar/Navbar';
import { useDispatch } from 'react-redux';
import { signin, signup } from '../../actions/auth';
import { useNavigate } from 'react-router-dom';

import useStyles from './styles';

const initialState = { name: '', email: '', password: '', confirmPassword: '', mealtype: '' };

const Auth = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  

  const [showPassword, setShowPassword] = useState(true);
  const handleShowPassword = () => setShowPassword((prevState) => !prevState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    if(isSignUp){
      dispatch(signup(formData, navigate));
    }
    else{
      dispatch(signin(formData, navigate));
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const switchMode = () => {
    setFormData(initialState);
    setIsSignUp((prevState) => !prevState)
    setShowPassword(false);
  }
  
  return (
    <>
      <Navbar />
      <Container component='main' maxWidth='xs'>
        <Paper className={classes.paper} elevation={3}>
          <Avatar className={classes.avatar}>
            <LockOutlined />
          </Avatar>
          <Typography variant='h5'>{isSignUp ? 'Sign Up' : 'Sign In' }</Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              {isSignUp && (
                <>
                  <Input name='name' label='First Name' handleChange={handleChange} />
                  <Input name='mealtype' label='Last Name' handleChange={handleChange} />
                </>
              )}
              <Input name='email' label='Email Address' handleChange={handleChange} type='email' />
              <Input name='password' label='Password' handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
              { isSignUp && <Input name='confirmPassword' label='Repeat Password' handleChange={handleChange} type='password' /> }
            </Grid>
            <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
              { isSignUp ? 'Sign Up' : 'Sign In' }
            </Button>
            <Button style={{color: 'blue', width:'100%', justifyContent:'flex-end', fontSize: '0.8rem'}} onClick={switchMode}>
              {isSignUp ? 'Already have an account? Sign In' : 'Don\'t have an account? Sign Up'}
            </Button>
          </form>
        </Paper>
      </Container>
    </>
  )
}

export default Auth;