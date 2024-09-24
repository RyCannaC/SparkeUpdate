"use client";
import useIsMobile from '@/components/IsMobile';
import TabPanel from "@/components/TabPanel";
import ContactUSFooter from '@/components/ContactUSFooter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useState } from 'react';


  const theme = createTheme({
    palette: {
      primary: {
          light: '#ff7961',
          main: '#3f50b5',
          dark: '#111827',
          contrastText: '#fff',
      },
      secondary: {
          light: '#ff7961',
          main: '#f44336',
          dark: '#ba000d',
          contrastText: '#000',
      },
      custom:{
        cloudBurst: '#374151'
      },
      gradient: {
        orangeGradient: 'linear-gradient(to right, #F59E0B, #EA580C, #F59E0B)' ,
      }
    },
  });

const Services = () => {
  const [displayButton, setDisplayButton] = useState(false); // Initialize as boolean
  const isMobile = useIsMobile();
  return (
    <>
    <section className='mb-6 w-full flex-center flex-col'>
      <h1 className='h2_text text-center orange_gradient text-center mb-6'>
        Our Services
      </h1>
    </section>       
      
      <ThemeProvider theme={theme}>
      <Box sx={{p:isMobile ? 1: 4, mb:isMobile ? 1 : 2, bgcolor:'white', width:1}}>
          <Typography padding={isMobile ? 0 : 2} variant='h5' sx={{textAlign: isMobile ? 'left' :'center', fontWeight:'bold', color:theme.palette.primary.dark}}>
              Explore our services to see how we provide reliable power solutions with a focus on clear communication, safety, and strict code compliance:
            </Typography>
          
            <TabPanel />
        </Box>
    </ThemeProvider>
    
    

    <ContactUSFooter contactPage={displayButton} />
    
    </>
    
  );
};

export default Services;
