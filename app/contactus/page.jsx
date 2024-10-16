'use client';
import ContactUSFooter from '@/components/ContactUSFooter';
import ContactForm from '@/components/ContactForm';
import { useState } from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useIsMobile from "@/components/IsMobile";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
        cloudBurst: '#374151',
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
  },
});


const ContactUs = () => {
  
  const isMobile = useIsMobile();
    

  

  return (  
    <>
    
    {isMobile?(
          <section className='mb-6 w-full flex-center flex-col'>
          <h2 className='h2_text text-center orange_gradient text-center mb-6 pb-2'>
          Contact Us
        </h2>
      </section>
        ):(
          <section className='mb-6 w-full flex-center flex-col'>
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
            <h1 className='h1_text text-center orange_gradient text-center mb-6 pb-2'>
            Contact Us
          </h1>
        </section>
        )}
        
     
      <Box sx={{p:isMobile ? 1: 4, mb:isMobile ? 1 : 2, bgcolor:'white', width:1}}>    
        
        <ContactUSFooter contactPage={displayButton} />
    
        <ThemeProvider theme={theme}>
            <Typography variant={isMobile ? 'h6' : 'h4'} sx={{textAlign: 'center', marginBottom: 2, fontWeight: 'bold', color: theme.palette.primary.dark}}>
                Contact Form:
            </Typography>
        </ThemeProvider>
        <ContactForm />
      </Box>
  
    </>
    
  );
};

export default ContactUs;
