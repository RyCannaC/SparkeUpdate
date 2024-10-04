"use client";

import * as React from 'react';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Logo from '@/components/Logo';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import HomeIcon from '@mui/icons-material/Home';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
import CampaignIcon from '@mui/icons-material/Campaign';
import InfoIcon from '@mui/icons-material/Info';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import { useRouter } from 'next/navigation'

const pages = ['Home', 'Services', 'Promotions', 'About Us', 'FAQ', 'Contact Us'];
const pageIcons = {
  Home: <HomeIcon fontSize='large'/>,
  Services: <ElectricalServicesIcon fontSize='large' />,
  Promotions: <CampaignIcon fontSize='large'/>,
  'About Us': <InfoIcon fontSize='large'/>,
  FAQ: <ContactSupportIcon fontSize='large'/>,
  'Contact Us': <AlternateEmailIcon fontSize='large'/>
};


export default function Nav() {
  const router = useRouter();
  
  const pageRoutes = {
    Home: '/',
    Services: '/services',
    Promotions: '/promotions',
    'About Us': '/aboutus',
    FAQ: '/faq',
    'Contact Us': '/contactus'};

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  

  return (
    <AppBar sx={{ backgroundColor: 'inherit' }} position="static">
      <Container maxWidth="xl">
     
        <Toolbar disableGutters>
        
          

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'space-between', }}>
          <Image
                src="/assets/img/larger_icon.png"
                alt="logo"
                width={100}
                height={100}
                style={{ objectFit: 'contain' }}
                
                />
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
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              
              {pages.map((page) => (
                <MenuItem sx={{
                  background: page === 'Contact Us' ? 'linear-gradient(to right, #f59e0b, #ea580c, #fbbf24)' : 'inherit',
                  borderRadius: '9999px', 
                  border: page === 'Contact Us' ? '2px solid transparent' : 'none', 
                  position: 'relative', 
                  overflow: 'hidden', 
                  pointerEvents: page === 'Promotions' ? 'none' : 'auto',
                  opacity: page === 'Promotions' ? 0.5 : 1,
                  }}
                  key={page} 
                  onClick={() => router.push(pageRoutes[page])}
                  
                  >
                    {pageIcons[page]} 
                  <Typography sx={{ textAlign: 'center', marginLeft: 1}}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'space-between', }}>
            <Image
                src="/assets/img/larger_icon.png"
                alt="logo"
                width={100}
                height={100}
                style={{ objectFit: 'contain' }}
                sx={{gap:6}}
                />
            {pages.map((page) => (
              
              <Button
                key={page}
                onClick={() => router.push(pageRoutes[page])}
                
                sx={{ 
                  my: 3, 
                  color: page === 'Contact Us' ? 'black' : 'white', 
                  fontWeight: 800,
                  display: 'flex', 
                  pointerEvents: page === 'Promotions' ? 'none' : 'auto',
                  background: page === 'Contact Us' ? 'linear-gradient(to right, #f59e0b, #ea580c, #fbbf24)' : 'inherit',
                  borderRadius: '9999px', 
                  border: page === 'Contact Us' ? '2px solid transparent' : 'none', 
                  position: 'relative', 
                  overflow: 'hidden', 
                  padding: '2px 6px',
                  opacity: page === 'Promotions' ? 0.5 : 1, }}
                startIcon={pageIcons[page]}
              >
                {page}
              </Button>
            ))}
          </Box>
          
        </Toolbar>
      </Container>
    </AppBar>
  );
}
