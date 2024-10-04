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
             {isMobile ? (
  <section className="mb-6 w-full flex-center flex-col">
    <h2 className="h2_text text-center orange_gradient mb-6 pb-2">
      Reliable Energy Solutions
    </h2>
  </section>
) : (
  <>
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
    <section className="mb-6 w-full flex-center flex-col">
      <h1 className="h1_text text-center orange_gradient mb-6 pb-2">
        Reliable Energy Solutions
      </h1>
    </section>
  </>
)}

        
      <ThemeProvider theme={theme}>

      <Box sx={{bgcolor:'white', marginBottom:isMobile ? 1 : 2, p: isMobile ? 2 : 4, width:1}}>
      <Typography variant={isMobile ? 'h6' : 'h4'} sx={{textAlign:'center', marginBottom:2, fontWeight: 'bold'  }}>
          Expertise and Reliability You Can Count On
        </Typography>
        <Typography variant={isMobile ? 'body2' : 'body1'} sx={{ marginBottom:2,  color:theme.palette.primary.cloudBurst}}>
        At Spark-E Unlimited Electrical Inc., we combine technical expertise with strong project management to provide top-tier electrical services for residential and commercial clients. Our founder's extensive experience as both a client-facing electrician and project manager ensures that every project is handled with professionalism, precision, and clear communication.
        </Typography>
        <Typography variant={isMobile ? 'body2' : 'body1'} sx={{ marginBottom:2,  color:theme.palette.primary.cloudBurst}}>
        With a wide range of skills, our team offers services like wiring, installing lighting, pools or hot tubs, and home generators. From planning and cost assessments to quality assurance, we deliver projects on time and within budget.
        </Typography>
        <Typography variant={isMobile ? 'body2' : 'body1'} sx={{ marginBottom:2,  color:theme.palette.primary.cloudBurst}}>
        Efficiency is central to our approach. We optimize daily service calls, provide same-day service when possible, and manage complex multi-phase projects with precision. At Spark-E Unlimited, we’re dedicated to delivering energy-efficient, safe, and innovative electrical solutions with a focus on client satisfaction and high-quality outcomes.
        </Typography>     

          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant={isMobile ? 'h6' : 'h4'} sx={{ textAlign: 'center', marginBottom: 2, fontWeight: 'bold', color: theme.palette.primary.dark }}>
              How We Communicate:
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
