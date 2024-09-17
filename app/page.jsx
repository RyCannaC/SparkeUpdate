"use client";

import BoltIcon from '@mui/icons-material/Bolt';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import useIsMobile from '@/components/IsMobile';
import ContactUSFooter from '@/components/ContactUSFooter';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Testimonials from '@/components/Testimonials';
import { useState } from 'react';

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
    background: {
      footer: '#A1A1AA',
    },
    mainCard: {
      bgcolor: '#FFFFFF'
    }
  },
});

const Home = () => {
  const isMobile = useIsMobile();
  const [displayButton, setDisplayButton] = useState(false); // Initialize as boolean
  

  return (
    <>
      <section className='mb-6 w-full flex-center flex-col'>
        <h1 className='h2_text text-center'>
          <p className='orange_gradient text-center mb-6'>
            Reliable Energy Solutions
          </p>
        </h1>
      </section>

      <ThemeProvider theme={theme}>
        <Box sx={{ marginBottom: isMobile ? 1 : 2, bgcolor: 'white', p: isMobile ? 2 : 4, width: 1 }}>
          {isMobile ? (
            <>
              <Typography variant='body2' sx={{ marginBottom: 2, color: theme.palette.primary.cloudBurst }}>
                Spark-E Unlimited Electrical Inc., believes in delivering not only top-tier electrical services but also exceptional communication and customer care.
                From your initial consultation to the completion of your project, we prioritize keeping you informed every step of the way.
              </Typography>
              <Typography variant='body2' sx={{ marginBottom: 2, color: theme.palette.primary.cloudBurst }}>
                Our fully licensed and insured electricians are committed to ensuring that all work is performed with the highest standards of safety and in full compliance with local and national electrical codes.
                We're here to answer your questions and ensure every detail meets your expectations, giving you peace of mind knowing your project is in expert hands.
              </Typography>
            </>
          ) : (
            <Typography variant='body1' sx={{ marginBottom: 2, color: theme.palette.primary.cloudBurst }}>
              Spark-E Unlimited Electrical Inc., believes in delivering not only top-tier electrical services but also exceptional communication and customer care.
              From your initial consultation to the completion of your project, we prioritize keeping you informed every step of the way.
              Our fully licensed and insured electricians are committed to ensuring that all work is performed with the highest standards of safety and in full compliance with local and national electrical codes.
              We're here to answer your questions and ensure every detail meets your expectations, giving you peace of mind knowing your project is in expert hands.
            </Typography>
          )}

          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant={isMobile ? 'h6' : 'h4'} sx={{ textAlign: 'center', marginBottom: 2, fontWeight: 'bold', color: theme.palette.primary.dark }}>
              How we communicate:
            </Typography>

            <List dense>
              <ListItem>
                <ListItemIcon>
                  <BoltIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant={isMobile ? 'body2' : 'body1'}>
                  Detailed explanations before work begins
                </Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <BoltIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant={isMobile ? 'body2' : 'body1'}>
                  Clear project timelines and step-by-step updates
                </Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <BoltIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant={isMobile ? 'body2' : 'body1'}>
                  Guided demonstrations and system explanations
                </Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <BoltIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant={isMobile ? 'body2' : 'body1'}>
                  Post-service follow-ups to ensure satisfaction
                </Typography>
              </ListItem>
            </List>
          </Box>
        </Box>
      </ThemeProvider>

      {/* Pass displayButton correctly as boolean */}
      <ContactUSFooter contactPage={displayButton} />
      <Box sx={{ bgcolor: 'white', mb: isMobile ? 1 : 2, pt: isMobile ? 2 : 4, pb: isMobile ? 2 : 4, width: 1 }}>
        <Testimonials />
      </Box>
    </>
  );
};

export default Home;
