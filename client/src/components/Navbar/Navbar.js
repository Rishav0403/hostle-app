import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import avatar from '../../static/image/avatar.jpeg';

const Navbar = () => {
  const logout = () => {
    
  }
  return (
  <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{backgroundColor:'#ecf0f3', maxWidth:'95%', margin: '2.4%', borderRadius: '10px'}} position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color:'black', fontWeight:'700' }}>
            PG Hall 2
          </Typography>      
          <Chip label='Logout' variant="outlined" color="primary" onClick={logout} avatar={<Avatar src={avatar} />} clickable />
        </Toolbar>
      </AppBar>
    </Box>
  </>
  );
}

export default Navbar;