import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useIsMobile from './IsMobile';
import Grid from '@mui/material/Grid2';

const theme = createTheme({
  palette: {
    primary: {
        cloudBurst: '#374151',
        main: '#3f50b5',
        dark: '#111827',
        contrastText: '#fff',
    },
    secondary: {
        light: '#DADDE1',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
    },
},
    components: {
        MuiTypography: {
          styleOverrides: {
            gradientText: {
              background: 'linear-gradient(to right, #f59e0b, #f97316, #fcd34d)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            },
          },
        },
      }  
});
/* async function getData() {
    const path = process.cwd() + "/app/json/Testimonials.json"
    const file = await fs.readFile(path, "utf8");
    const data = JSON.parse(file);
    return data;
  } */

export default function Testimonials(props)
{
    
    var items = [
        {
        
        
            "title": "'Professional and Courteous'",
            "name": "-Nick N.",
            "description": "We have used Sparke Unlimited numerous times for various home projects.  Each and every time we have found them to be professional, courteous and easy to work with.  The job is done right, on time and on budget. Ryan is very responsive and works hard to make his customers feel happy.  We recommend Sparke to our friends and family and we would not hesitate to use them again for all our electrical needs."
        } ,
        {
            "title": "'Great Service and Communication'",
            "name": "-Shawn S.",
            "description": "Ryan is a very knowledgeable electrician, he provides great service, recommendations, and very reasonable rates. His communication is also excellent, unlike many other contractors. I recently hired Ryan to complete some residential electrical work. Scope of work was to install some motion lights, remove the old ones and install a switch. I am very pleased with all of his work, and providing recommendations. If you are looking for a great electrician, contact Ryan. I will certainly use him for any future electrical needs."
        }
    ]

    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
                
            }
            
    
        </Carousel>
    )
}

function Item(props)
{
    const isMobile = useIsMobile();
    return (
        <ThemeProvider theme={theme}>
            
                <Grid container sx={{marginLeft:4, marginRight:4}}>
                    <Grid  display="flex" justifyContent="center" alignItems="center" size={12}>
                        <Typography 
                            variant={isMobile ? 'h6' : 'h4'} 
                            sx={{
                                textAlign: 'center', 
                                marginBottom:2, 
                                paddingTop:2, 
                                fontWeight:'bold',
                                background: 'linear-gradient(to right, #f59e0b, #f97316, #fcd34d)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent', 
                                }}>
                                    {props.item.title}
                        </Typography>
                    </Grid>
                    <Grid display="flex" justifyContent="center" alignItems="center" size={12}>
                        <Typography 
                            variant={isMobile ? 'body2' : 'body1'} 
                            sx={{
                                textAlign: 'center',
                                marginBottom:2, 
                                fontWeight:'bold', 
                                color:theme.palette.primary.cloudBurst
                                }}>
                                    {props.item.description}
                        </Typography>
                    </Grid>
                    <Grid display="flex" justifyContent="center" alignItems="center" size={12}>
                        <Typography 
                            variant={isMobile ? 'body2' : 'body1'} 
                            sx={{
                                textAlign: 'center', 
                                marginBottom:2, 
                                fontWeight:'bold', 
                                color:theme.palette.primary.cloudBurst
                                }}>
                                    {props.item.name}
                        </Typography>
                    </Grid>
                </Grid>    
            
        </ThemeProvider>
        
    )
}