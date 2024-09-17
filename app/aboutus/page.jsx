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
      <section className='mb-6 w-full flex-center flex-col'>
        <h1 className='h2_text text-center'>
          <p className='orange_gradient text-center mb-6'>
          About Us
         </p>
        </h1>
      </section>
      <ThemeProvider theme={theme}>
      <Box sx={{bgcolor:'white', marginBottom:isMobile ? 1 : 2, p:4, width:1}}>
        <Typography variant={isMobile ? 'body2' : 'body1'} sx={{ marginBottom:2,  color:theme.palette.primary.cloudBurst}}>
        At Spark-E Unlimited Electrical Inc., we combine technical expertise with strong project management to provide top-tier electrical services for residential and commercial clients. Our founder's extensive experience as both a client-facing electrician and project manager ensures that every project is handled with professionalism, precision, and clear communication.
        </Typography>
        <Typography variant={isMobile ? 'body2' : 'body1'} sx={{ marginBottom:2,  color:theme.palette.primary.cloudBurst}}>
        With a wide range of skills, our team offers services like wiring, installing lighting, pools or hot tubs, and home generators. We take pride in leading large-scale installations, such as fire alarm systems at the Bank of Canada and advanced control systems at Vale mines. From planning and cost assessments to quality assurance, we deliver projects on time and within budget.
        </Typography>
        <Typography variant={isMobile ? 'body2' : 'body1'} sx={{ marginBottom:2,  color:theme.palette.primary.cloudBurst}}>
        Efficiency is central to our approach. We optimize daily service calls, provide same-day service when possible, and manage complex multi-phase projects with precision. At Spark-E Unlimited, we’re dedicated to delivering energy-efficient, safe, and innovative electrical solutions with a focus on client satisfaction and high-quality outcomes.
        </Typography>
        <Typography variant={isMobile ? 'h6' : 'h5'} sx={{textAlign:'center', marginBottom:2,  background: 'linear-gradient(to right, #f59e0b, #f97316, #fcd34d)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent', }}>
          Let Spark-E Unlimited Electrical Inc. power your next project with the expertise and reliability you can count on.
        </Typography>

      </Box>
     
      {isMobile ? (
        <Box sx={{bgcolor:'white', width: 1, margin:2 , textAlign: 'left' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 1, marginTop: 4 }}>
            <Image
              src="/assets/img/pro_headshot-min.jpg"
              alt="rmaxwell_headshot"
              width={100}
              height={100}
              style={imageStyle}
            />
            
          </Box>
        <Typography variant={isMobile ? 'body2' : 'body1'} sx={{ marginTop:2, fontWeight:'bold', textAlign: 'center',  color:theme.palette.primary.dark}}>
        Ryan Maxwell, <br/>
        Owner and Master Electrician
            </Typography>
          
          <Typography variant={isMobile ? 'body2' : 'body1'} sx={{padding:2, color: theme.palette.primary.cloudBurst }}>
                  Ryan began working in the IT field after graduating from college in 2004, but his passion for the electrical trade had him transition in 2011. After working in Nova Scotia and Ontario, Ryan received his Certificate of Qualification in 2018.
                  While working as an apprentice and Journeyman, he worked in a multitude of sites including underground mine in Sudbury, West Block of Canada's Parliament buildings and many other commerical and residential settings. 
                  During the pandemic Ryan returned to IT to provide for his family, and holds a position as Team Lead of a Professional Servcies team, all while maintaining his electrical certification.
                </Typography>
               
                <Typography variant={isMobile ? 'body2' : 'body1'} sx={{marginBottom: 2, padding:2, color: theme.palette.primary.cloudBurst }}>
                  In 2024, Ryan achieved both his Master’s and Contractor’s licenses, solidifying his expertise in the electrical industry. His unique combination of technical knowledge, project management skills, and client-focused communication has made him a leader across both IT and electrical sectors.
                </Typography>
        </Box>
      

):(
  

    <Box sx={{bgcolor:'white', marginBottom:isMobile ? 1 : 2, width:1}}>
      <Typography variant={isMobile ? 'h6' : 'h4'} sx={{textAlign: 'center', marginBottom:2, marginTop:2, fontWeight:'bold', color:theme.palette.primary.dark}}>
              Who are we?
          </Typography>
          
          <Box sx={{ width: "70%", margin: '0 auto', textAlign: 'left' }}>
            <Grid container spacing={2} alignItems="center" sx={{ marginTop: 2 }}>
              {/* Image Section */}
              <Grid item='true' size={4} sx={{marginBottom:4, display: 'flex', textAlign: 'center', justifyContent: 'center' }}>
                <Image
                  src="/assets/img/pro_headshot-min.jpg"
                  alt="rmaxwell_headshot"
                  width={200}
                  height={200}
                  style={imageStyle}
                />
                
              </Grid>

              {/* Text Section */}
              <Grid item='true' size={8} sx={{paddingRight:8}}>
              <Typography variant={isMobile ? 'body2' : 'body1'} sx={{fontWeight: 'bold',  color: theme.palette.primary.cloudBurst }}>
                  Ryan Maxwell, Owner and Master Electrician
                </Typography>
                <Typography variant={isMobile ? 'body2' : 'body1'} sx={{ marginTop: 2, marginBottom: 2, color: theme.palette.primary.cloudBurst }}>
                  Ryan began his career in IT after graduating from college in 2004, transitioning to the electrical trade in 2011. He earned his Certificate of Qualification in 2018. During the pandemic, Ryan returned to IT, where he now serves as Team Lead for the Professional Services team.
                </Typography>
               
                <Typography variant={isMobile ? 'body2' : 'body1'} sx={{ marginTop: 2, marginBottom: 2, color: theme.palette.primary.cloudBurst }}>
                  In 2024, Ryan achieved both his Master’s and Contractor’s licenses, solidifying his expertise in the electrical industry. His unique combination of technical knowledge, project management skills, and client-focused communication has made him a leader across both IT and electrical sectors.
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
        
)
}
      
</ThemeProvider>
      
<ContactUSFooter contactPage={displayButton} />
    </>
    
  );
};

export default AboutUs;
