import React,{useState} from 'react';
import './navbar.css'
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const drawerWidth = 240;

export default function Navbar() {
  
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };




  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar sx={{background:"#212121"}} component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
           <img className='logo-main' alt='sriyanshi-logo' src="./logo-white.png"/>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <Button sx={{ color: '#fff' }}> <NavLink className="nav-link"  to="/">Home</NavLink></Button>
                <Button sx={{ color: '#fff' }}> <NavLink className="nav-link" to="/package">Package</NavLink></Button>
                <Button sx={{ color: '#fff' }}> <NavLink className="nav-link" to="/contact">Contact</NavLink></Button>
                <Button sx={{ color: '#fff' }}> <NavLink className="nav-link" to="/about">About</NavLink></Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
       
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <img className='logo-main' alt='sriyanshi-logo' src="./logo-blk.png"/>
      </Typography>
      <Divider />
      <List>
          <ListItem  >
            <ListItemButton sx={{ textAlign: 'center' }}>
              <NavLink className="nav-link sm-color sm-width" to="/">Home</NavLink>
            </ListItemButton>
          </ListItem>
          <ListItem  >
            <ListItemButton sx={{ textAlign: 'center' }}>
              <NavLink className="nav-link sm-color sm-width" to="/package">Package</NavLink>
            </ListItemButton>
          </ListItem>
          <ListItem  >
            <ListItemButton sx={{ textAlign: 'center' }}>
              <NavLink className="nav-link sm-color sm-width" to="/contact">Contact</NavLink>
            </ListItemButton>
          </ListItem>
          <ListItem  >
            <ListItemButton sx={{ textAlign: 'center' }}>
              <NavLink className="nav-link sm-color sm-width" to="/about">About</NavLink>
            </ListItemButton>
          </ListItem>
      </List>
    </Box>
        </Drawer>
      </Box>
      <Box >
        <Toolbar />
      </Box>
    </Box>
  );
}