'use client';
import ContactUSFooter from "@/components/ContactUSFooter";
import { Typography } from "@mui/material";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useIsMobile from "@/components/IsMobile";
import Image from "next/image";
import { useState } from 'react';

const imageStyle = {
  borderRadius: '50%',
  border: '1px solid #000',
}

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

const AboutUs = () => {
  const [displayButton, setDisplayButton] = useState(false); // Initialize as boolean
  const isMobile = useIsMobile();
  
  return (
    <>
      
      
        {isMobile?(
          <section className='mb-6 w-full flex-center flex-col'>
          <h2 className='h2_text text-center orange_gradient text-center mb-6 pb-2'>
          About Us
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
            About Us
          </h1>
        </section>
        )}
        
      <ThemeProvider theme={theme}>
      <Box sx={{ marginBottom: isMobile ? 1 : 2, bgcolor: 'white', p: isMobile ? 2 : 4, width: 1 }}>
      <Typography variant={isMobile ? 'h6' : 'h4'} sx={{ textAlign: 'center', marginBottom:4, fontWeight:'bold', color:theme.palette.primary.dark}}>
              Who is Spark-E Unlimited?
          </Typography>
            
              <Typography variant={isMobile ? 'body2' : 'body1'} sx={{ marginBottom: 2, color: theme.palette.primary.cloudBurst }}>
                Spark-E Unlimited Electrical Inc., is a small, local, business that believes in delivering not only top-tier electrical services but also exceptional communication and customer care.
                From your initial consultation to the completion of your project, I prioritize keeping you informed every step of the way.
              </Typography>
              <Typography variant={isMobile ? 'body2' : 'body1'} sx={{ marginBottom: 2, color: theme.palette.primary.cloudBurst }}>
                As a fully licensed and insured electrician, I am committed to ensuring that all work is performed with the highest standards of safety and in full compliance with local and national electrical codes.
                I&apos;m here to answer your questions and ensure every detail meets your expectations, giving you peace of mind knowing your project is in expert hands.
              </Typography>
         
        
          </Box>
     
     
  

    <Box sx={{bgcolor:'white', marginBottom:isMobile ? 1 : 2, width:1}}>
                
          <Box sx={{paddingTop: 4, width: isMobile? '100%': '70%', margin: '0 auto', textAlign: 'left' }}>
            <Grid container spacing={2} alignItems="center" sx={{ margin:2 }}>
              {/* Image Section */}
              <Grid item='true' size={12} sx={{display: 'flex', textAlign: 'center', justifyContent: 'center' }}>
                <Image
                  src="/assets/img/pro_headshot-min.jpg"
                  alt="rmaxwell_headshot"
                  width={200}
                  height={200}
                  style={imageStyle}
                />
                
              </Grid>
              <Grid item='true' size={12} sx={{display: 'flex', textAlign: 'center', justifyContent: 'center' }}>
                <Typography variant={isMobile ? 'body2' : 'body1'} sx={{fontWeight: 'bold',  color: theme.palette.primary.cloudBurst }}>
                    Ryan Maxwell <br/>Owner, Master Electrician
                  </Typography>
              </Grid>
            
              <Grid item='true' size={12} sx={{marginBottom: isMobile ? 0 : 4, marginLeft: isMobile ? 0 : 4, marginRight: isMobile ? 0 : 4, display: 'flex', textAlign: 'left', justifyContent: 'center' }}>
              
                
                <Typography variant={isMobile ? 'body2' : 'body1'} sx={{ marginLeft:isMobile? 0 : 6, marginRight:isMobile? 0 : 6, marginBottom: 2, color: theme.palette.primary.cloudBurst }}>
                  
                  I&apos;m Ryan Maxwell, owner of Spark-E Unlimited Electrical Inc. After years of experience in the electrical industry, I earned my Certificate of Qualifications in 2018. In 2024, I proudly achieved both my master electrician and contractor's licenses.
               <br/><br/>
                  In addition to my passion for electrical work, I&apos;m actively involved in my community as the head coach for both the Nepean Minor Hockey Association and East Nepean Little League. I take pride in volunteering beyond coaching, to support these organizations and the young athletes. As a father of three boys who are passionate about hockey, baseball, and football, I love watching them excel in sports and academics.
                  Outside of work and coaching, I enjoy camping, hiking, and attending live music events.               
                  <br/><br/>
                  I take pride in providing top-notch service with a focus on clear communication and strong project management. I look forward to helping you with your electrical needs!                
                </Typography>
              </Grid>
            </Grid>
            </Box>
          </Box>
        
      
</ThemeProvider>
      
<ContactUSFooter contactPage={displayButton} />
    </>
    
  );
};

export default AboutUs;
