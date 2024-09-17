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

export default function Nav() {
  const isMobile = useIsMobile();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
   <>
   <nav className="flex-between w-full mb-10 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/img/larger_icon.png"
          alt="logo"
          width={100}
          height={100}
          className="object-contain"
        />
       
      </Link>
      {isMobile ? (
        <div className="flex relative">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? (
              <CloseIcon /> // Close icon
            ) : (
              <MenuSharpIcon /> // Menu icon
            )}
          </button>

          {isMenuOpen && (

            <Paper
              elevation={3} // Adds the shadow effect
              sx={{
                position: 'absolute',    // Same as "absolute" in Tailwind
                top: '100%',             // Same as "top-full" in Tailwind (position it just below the triggering element)
                right: 0,                // Align to the right
                mt: 2,                   // Same as "mt-2" for margin-top
                bgcolor: 'white',        // Same as "bg-white"
                borderRadius: '8px',     // Same as "rounded-md"
                zIndex: 10,              // Same as "z-10"
              }}
            >
              <MenuList>
                <MenuItem>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <Link href="/" onClick={toggleMenu}>
                    Home
                  </Link>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ElectricalServicesIcon/>
                  </ListItemIcon>
                  <Link href="/services" onClick={toggleMenu}>
                    Services
                  </Link>
                </MenuItem>
                
                <MenuItem>
                <ListItemIcon>
                    <InfoIcon/>
                  </ListItemIcon>
                  <Link href="/aboutus" onClick={toggleMenu}>
                    About Us
                  </Link>
                </MenuItem>
                {/* Put Contact us after appointment once fully developed */}
                <MenuItem className="orange_gradient">
                <ListItemIcon>
                    <AlternateEmailIcon/>
                  </ListItemIcon>
                  <Link href="/contactus" onClick={toggleMenu}>
                    Contact Us
                  </Link>
                </MenuItem>
                {/* <ListItem className="orange_gradient">
                  <ListItemIcon>
                    <CalendarMonthIcon/>
                  </ListItemIcon>
                  <Link href="/calendar"  onClick={toggleMenu}>
                    Appointment
                  </Link>
                </ListItem> */}
              </MenuList>
            </Paper>
          )}
      </div>
    ):(
      <Box
        sx={{
          display: 'flex',            // Replaces "flex"
          gap: 3,                     // Replaces "gap-3" (spacing between children)
          color: 'white',             // Replaces "text-white"
          outline: 'none',            // Replaces "focus:outline-none"
          '&:focus': { outline: 'none' } // Ensures focus state outline is none
        }}
      >
          <HomeIcon/>
          <Link href="/" >
            Home
          </Link>
          <ElectricalServicesIcon/>
          <Link href="/services" >
            Services
          </Link>
          
          <InfoIcon/>
          <Link href="/aboutus" >
            About Us
          </Link>
          {/* Put Contact us after appointment once fully developed */}
          
          <Link href="/contactus" className="orange_grad_btn" onClick={toggleMenu}>
                    Contact Us
                  </Link>
          {/* <CalendarMonthIcon/>
          <Link href="/calendar" className="white_btn">
            Book Appointment
          </Link> */}
        
      </Box>
    )}
         
    </nav>
    <h2 className='mb-6 head_text text-center'>
    <span className='orange_gradient text-center'>Spark-E Unlimited Electrical Inc.</span>  
    </h2>
   </>

    
   
  );
}
