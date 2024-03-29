import * as React from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import Clock from 'react-live-clock';

const Navbar = () => {
  const navigate = useNavigate();
  const Logout = async () => {
    try {
      await axios.delete('http://localhost:5011/logout');
      navigate("../", { replace: true });
    } catch (error) {
      console.log(error);
    }
  }
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" style={{background: 'transparent', boxShadow: 'none'}}>
      <Container maxWidth="xl" sx={{background: 'linear-gradient(to right, #9442FE, #3378FF)', borderRadius: 3}}>
        <Toolbar disableGutters>
          <BackupTableIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            PT. DPS |
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem component={Link} to='/dashboard' onClick={handleCloseNavMenu}>
                <Typography textAlign='center'>Dashboard</Typography>
              </MenuItem>
              <MenuItem component={Link} to='/inspect' onClick={handleCloseNavMenu}>
                <Typography textAlign='center'>Inspect</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <BackupTableIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            DPS
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button 
                key='Inspect' 
                onClick={handleCloseNavMenu} 
                sx={{ my: 2, color: 'white', display: 'block' }} 
                component={Link}
                to="/dashboard" 
            >   
                Dashboard
            </Button>
            <Button 
                key='Inspect' 
                onClick={handleCloseNavMenu} 
                sx={{ my: 2, color: 'white', display: 'block' }} 
                component={Link}
                to="/inspect" 
            >   
                Inspection
            </Button>
          </Box>
          <Box sx={{ flexGrow: 0, mr: 2 }}>
            <Typography variant="h5" sx={{fontFamily: 'monospace'}}>
              <Clock format={'HH:mm:ss'} ticking={true} timezone={'Asia/Jakarta'} />
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="DPS" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
                <MenuItem onClick={Logout}>
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
