"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Paper from '@mui/material/Paper';
import MenuList from "@mui/material/MenuList";
import MenuItem from '@mui/material/MenuItem';

import HomeIcon from '@mui/icons-material/Home';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import InfoIcon from '@mui/icons-material/Info';
import CampaignIcon from '@mui/icons-material/Campaign';

import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import CloseIcon from '@mui/icons-material/Close';
import useIsMobile from '@/components/IsMobile';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";

import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import ListItemIcon from '@mui/material/ListItemIcon';

export default function Nav() {

  
  const isMobile = useIsMobile();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      

        {/* Menu - Mobile Version */}
        {isMobile ? (
          <Box
          component="nav"
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            mb: 4,
            pt: 3,
          }}
        >
          {/* Logo */}
          <Link href="/" passHref>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Image
                src="/assets/img/larger_icon.png"
                alt="logo"
                width={100}
                height={100}
                style={{ objectFit: 'contain' }}
              />
            </Box>
          </Link>
          <Box sx={{ position: 'relative', display: 'flex' }}>
            <button onClick={toggleMenu} style={{ color: 'white', border: 'none', background: 'transparent' }}>
              {isMenuOpen ? <CloseIcon /> : <MenuSharpIcon />}
            </button>

            {isMenuOpen && (
              <Paper
                elevation={3}
                sx={{
                  position: 'absolute',
                  top: '100%',
                  right: 0,
                  mt: 2,
                  bgcolor: 'white',
                  borderRadius: '8px',
                  zIndex: 10,
                }}
              >
                <MenuList>
                  <MenuItem onClick={toggleMenu}>
                    <ListItemIcon>
                      <HomeIcon />
                    </ListItemIcon>
                    <Link href="/" passHref>
                      Home
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={toggleMenu}>
                    <ListItemIcon>
                      <ElectricalServicesIcon />
                    </ListItemIcon>
                    <Link href="/services" passHref>
                      Services
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={toggleMenu}>
                    <ListItemIcon>
                      <ElectricalServicesIcon />
                    </ListItemIcon>
                    <Link href="/promotions" passHref>
                      Promotions
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={toggleMenu}>
                    <ListItemIcon>
                      <InfoIcon />
                    </ListItemIcon>
                    <Link href="/aboutus" passHref>
                      About Us
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={toggleMenu}>
                    <ListItemIcon>
                      <ContactSupportIcon />
                    </ListItemIcon>
                    <Link href="/faq" passHref>
                      FAQ
                    </Link>
                  </MenuItem>
                  <MenuItem sx={{background: 'linear-gradient(to right, #f59e0b, #ea580c, #fbbf24)',}} onClick={toggleMenu}>
                    <ListItemIcon>
                      <AlternateEmailIcon />
                    </ListItemIcon>
                    <Link 
                      
                      href="/contactus" passHref>
                      Contact Us
                    </Link>
                  </MenuItem>
                </MenuList>
              </Paper>
            )}
          </Box>
          </Box>
        ) : (
          /* Menu - Desktop Version */
          <Box
        component="nav"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          mb: 4,
          pt: 3,
        }}
      >
        {/* Logo */}
        <Link href="/" passHref>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Image
              src="/assets/img/larger_icon.png"
              alt="logo"
              width={100}
              height={100}
              style={{ objectFit: 'contain' }}
            />
          </Box>
        </Link>
          <Box
            sx={{
              display: 'flex',
              gap: 3,
              color: 'white',
              '& a': {
                textDecoration: 'none',
                color: 'inherit',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              },
            }}
          >
            <List >
                  <ListItem onClick={toggleMenu}>
                    <ListItemIcon>
                      <HomeIcon />
                    </ListItemIcon>
                    <Link href="/" passHref>
                      Home
                    </Link>
                  </ListItem>
                  <ListItem onClick={toggleMenu}>
                    <ListItemIcon>
                      <ElectricalServicesIcon />
                    </ListItemIcon>
                    <Link href="/services" passHref>
                      Services
                    </Link>
                  </ListItem>
                  <ListItem onClick={toggleMenu}>
                    <ListItemIcon>
                      <ElectricalServicesIcon />
                    </ListItemIcon>
                    <Link href="/promotions" passHref>
                      Promotions
                    </Link>
                  </ListItem>
                  <ListItem onClick={toggleMenu}>
                    <ListItemIcon>
                      <InfoIcon />
                    </ListItemIcon>
                    <Link href="/aboutus" passHref>
                      About Us
                    </Link>
                  </ListItem>
                  <ListItem onClick={toggleMenu}>
                    <ListItemIcon>
                      <ContactSupportIcon />
                    </ListItemIcon>
                    <Link href="/faq" passHref>
                      FAQ
                    </Link>
                  </ListItem>
                  <ListItem sx={{background: 'linear-gradient(to right, #f59e0b, #ea580c, #fbbf24)',}} onClick={toggleMenu}>
                    <ListItemIcon>
                      <AlternateEmailIcon />
                    </ListItemIcon>
                    <Link 
                      
                      href="/contactus" passHref>
                      Contact Us
                    </Link>
                  </ListItem>
                </List>
            
          </Box>
          
          </Box>





        )}
      

      
    </>
  );
}
