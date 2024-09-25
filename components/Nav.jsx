"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Paper from '@mui/material/Paper';
import MenuList from "@mui/material/MenuList";
import MenuItem from '@mui/material/MenuItem';
import HomeIcon from '@mui/icons-material/Home';
import ListItemIcon from '@mui/material/ListItemIcon';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import InfoIcon from '@mui/icons-material/Info';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import CloseIcon from '@mui/icons-material/Close';
import useIsMobile from '@/components/IsMobile';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";

export default function Nav() {
  const isMobile = useIsMobile();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
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

        {/* Menu - Mobile Version */}
        {isMobile ? (
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
                      <InfoIcon />
                    </ListItemIcon>
                    <Link href="/aboutus" passHref>
                      About Us
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
        ) : (
          /* Menu - Desktop Version */
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
            <Link href="/" passHref>
              <HomeIcon /> Home
            </Link>
            <Link href="/services" passHref>
              <ElectricalServicesIcon /> Services
            </Link>
            <Link href="/aboutus" passHref>
              <InfoIcon /> About Us
            </Link>
            <Link href="/contactus">
              <Button
                variant="contained"
                sx={{
                  background: 'linear-gradient(to right, #f59e0b, #ea580c, #fbbf24)', // Matches Tailwind's amber-500, orange-600, yellow-500
                  borderRadius: '9999px', // Fully rounded (rounded-full in Tailwind)
                  border: '1px solid white', // White border
                  paddingY: '6px', // Equivalent to py-1.5 (6px padding)
                  paddingX: '20px', // Equivalent to px-5 (20px padding)
                  color: 'black',
                  textTransform: 'none', // Prevents uppercase transformation (optional)
                  fontSize: '0.875rem', // text-sm equivalent (14px)
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontFamily: 'Inter, sans-serif',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    background: 'black', // Black background on hover
                    color: 'white', // White text on hover
                  },
                }}
              >
                Contact Us
              </Button>
            </Link>
            
          </Box>
        )}
      </Box>

      {/* Title */}
      <Typography
      variant="h2"
      align="center"
      sx={{       
        fontSize: { xs: '3rem', sm: '5rem' }, // Responsive font size
        fontWeight: 'extrabold', // Font weight
        lineHeight: 1.15, // Line height
        background: 'linear-gradient(to right, #f59e0b, #ea580c, #fbbf24)',
        WebkitBackgroundClip: 'text', // Clip background to text
        WebkitTextFillColor: 'transparent', // Make text transparent
      }}
      className="head_text"
    >
      Spark-E Unlimited Electrical Inc.
    </Typography>
    </>
  );
}
