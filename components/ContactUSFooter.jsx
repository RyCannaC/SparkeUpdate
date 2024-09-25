'use client';
import Link from "next/link";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useIsMobile from './IsMobile';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useMemo } from "react";
import BoltIcon from '@mui/icons-material/Bolt';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Grid from "@mui/material/Grid2";


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


const ContactUSFooter = ({contactPage}) => {
    const isMobile = useIsMobile();
    // Simplify typography variants
    const titleVariant = isMobile ? 'h6' : 'h4';
    const bodyVariant = isMobile ? 'body2' : 'body1';
    const marginBottom = isMobile ? 1 : 2;
    const padding = isMobile ? 2 : 4;

    const theme = useMemo(() => createTheme({
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
   }), []);

   
   if (contactPage){
    if (isMobile){
        return(
            <ThemeProvider theme={theme}>
                
           <Box sx={{bgcolor:'white', marginBottom: isMobile ? 1 : 2, p:isMobile ? 2 : 4, width:1}}>
           
                <Typography variant={isMobile ? 'h6' : 'h4'} sx={{textAlign: 'center', marginBottom:2, fontWeight:'bold', color:theme.palette.primary.dark}}>
                        
                    Contact Us for a Free Estimate
                </Typography>
                <Typography variant={isMobile ? 'body2' : 'body1'} sx={{ marginBottom:2, color:theme.palette.primary.cloudBurst}}>
                        At Spark-E Unlimited Electrical, we&apos;re always here to answer your questions and help you make informed decisions. 
                        Whether you need a detailed estimate, more information about our services, or advice on an upcoming project, our team is ready to assist. 
                        Expect prompt responses and clear communication from the very first interaction.
                </Typography>
                
                <Box
                    sx={{
                        display: 'flex',               // Enable flexbox
                        justifyContent: 'center',       // Center horizontally
                        alignItems: 'center',           // Center vertically (if needed)
                        textAlign: 'center',            // Ensure text alignment is centered
                        margin: '0 auto',                //Additional centering for larger widths
                    }}
                    >
                        
                {/* <Grid container alignItems="center">
                    <Grid item="true" size={12} sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                        <Typography
                            variant={titleVariant}
                            sx={{ marginBottom: 2, fontWeight: 'bold', color: theme.palette.primary.dark }}
                        >
                            Location & Contact Information:
                        </Typography>
                    </Grid>
                <Grid item="true" size={12} sx={{ marginBottom: 1, display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                    
                    <BoltIcon fontSize="small" />
                    <Typography sx={{ fontWeight: 'bold' }} variant={bodyVariant}>
                        Address:<br/>
                        </Typography>
                        </Grid>
                <Grid item="true" size={12} sx={{ marginBottom: 1, display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                    <Typography variant={bodyVariant}>
                        367 Balinroan Cres., <br/>
                        Nepean ON, K2J 3V1
                    </Typography>
                    </Grid>
                    <Grid item="true" size={12} sx={{ marginBottom: 1, display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                        <BoltIcon fontSize="small" />
                    <Typography sx={{ fontWeight: 'bold' }} variant={bodyVariant}>
                        Phone:<br/>
                        </Typography>
                        </Grid>
                <Grid item="true" size={12} sx={{ marginBottom: 1, display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                    <Typography variant={bodyVariant}>
                        (343) 596-6337
                    </Typography>
                    </Grid>
                    <Grid item="true" size={12} sx={{ marginBottom: 1, display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                        <BoltIcon fontSize="small" />
                    <Typography sx={{ fontWeight: 'bold' }} variant={bodyVariant}>
                        Email:<br/>
                        </Typography>
                        </Grid>
                <Grid item="true" size={12} sx={{ marginBottom: 1, display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                    <Typography variant={bodyVariant}>
                        rmaxwell@sparkeunlimited.ca
                    </Typography>
                     </Grid>
                    <Grid item="true" size={12} sx={{ marginBottom: 1, display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                        <BoltIcon fontSize="small" />
                    <Typography sx={{ fontWeight: 'bold' }} variant={bodyVariant}>
                        Business Hours:<br/>
                    </Typography>
                    </Grid>
                <Grid item="true" size={12} sx={{ marginBottom: 1, display: 'flex', justifyContent: 'center', textAlign: 'center' }}>       
                    <Typography variant={bodyVariant}>
                        Mon-Fri: 5:00 PM – 9:00 PM <br/>
                        Sat-Sun: 9:00 AM – 9:00 PM
                    </Typography>
                </Grid>
                </Grid> */}
                </Box>
                
            </Box>
                
            </ThemeProvider>
        )
        
    }
    else{
        return(   
        <ThemeProvider theme={theme}>
           <Box sx={{bgcolor:'white', marginBottom: isMobile ? 1 : 2, p:isMobile ? 2 : 4, width:1}}>
           
                <Typography variant={isMobile ? 'h6' : 'h4'} sx={{textAlign: 'center', marginBottom:2, fontWeight:'bold', color:theme.palette.primary.dark}}>
                        
                    Contact Us for a Free Estimate
                </Typography>
                <Typography variant={isMobile ? 'body2' : 'body1'} sx={{ marginBottom:2, color:theme.palette.primary.cloudBurst}}>
                        At Spark-E Unlimited Electrical, we’re always here to answer your questions and help you make informed decisions. 
                        Whether you need a detailed estimate, more information about our services, or advice on an upcoming project, our team is ready to assist. 
                        Expect prompt responses and clear communication from the very first interaction.
                </Typography>
                
                <Box
                    sx={{
                        display: 'flex',               // Enable flexbox
                        justifyContent: 'center',       // Center horizontally
                        alignItems: 'center',           // Center vertically (if needed)
                        textAlign: 'center',            // Ensure text alignment is centered
                        margin: '0 auto',                //Additional centering for larger widths
                    }}
                    >
                    <Grid container alignItems="center">
                        <Grid item="true" size={12} sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                            <Typography
                                variant={titleVariant}
                                sx={{ marginBottom: 2, fontWeight: 'bold', color: theme.palette.primary.dark }}
                            >
                                Location & Contact Information:
                            </Typography>
                        </Grid>
                        <Grid item="true" size={12} sx={{ marginBottom: 4, display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                            <Grid container spacing={2}>
                                <Grid item="true" size={6}>
                                    <List dense>
                                        <ListItem>
                                            <ListItemIcon>
                                                <BoltIcon fontSize="small" />
                                            </ListItemIcon>
                                            <Typography sx={{ fontWeight: 'bold' }} variant={bodyVariant}>
                                                Address:
                                            </Typography>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <BoltIcon fontSize="small" />
                                            </ListItemIcon>
                                            <Typography sx={{ fontWeight: 'bold' }} variant={bodyVariant}>
                                                Phone:
                                            </Typography>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <BoltIcon fontSize="small" />
                                            </ListItemIcon>
                                            <Typography sx={{ fontWeight: 'bold' }} variant={bodyVariant}>
                                                Email:
                                            </Typography>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <BoltIcon fontSize="small" />
                                            </ListItemIcon>
                                            <Typography sx={{ fontWeight: 'bold' }} variant={bodyVariant}>
                                                Business Hours:
                                            </Typography>
                                        </ListItem>
                                    </List>
                                </Grid>
                                <Grid item="true" size={6}>
                                    <List dense>
                                        <ListItem>
                                            <Typography variant={bodyVariant}>
                                                367 Balinroan Cres., Nepean ON, K2J 3V1
                                            </Typography>
                                        </ListItem>
                                        <ListItem>
                                            <Typography variant={bodyVariant}>
                                                (343) 596-6337
                                            </Typography>
                                        </ListItem>
                                        <ListItem>
                                            <Typography variant={bodyVariant}>
                                                rmaxwell@sparkeunlimited.ca
                                            </Typography>
                                        </ListItem>
                                        <ListItem>
                                            <Typography variant={bodyVariant}>
                                                Mon-Fri: 5:00 PM – 9:00 PM
                                            </Typography>
                                        </ListItem>
                                        <ListItem>
                                            <Typography variant={bodyVariant}>
                                                Sat-Sun: 9:00 AM – 9:00 PM
                                            </Typography>
                                        </ListItem>
                                    </List>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    
                </Box>
            </Box> 
            
           
                                    
            
        </ThemeProvider>       
        )
    }


}
else{ 
    return(
        <ThemeProvider theme={theme}>
            <Box sx={{bgcolor:'white', marginBottom: isMobile ? 1 : 2, p:isMobile ? 2 : 4, width:1}}>
           
                <Typography variant={isMobile ? 'h6' : 'h4'} sx={{textAlign: 'center', marginBottom:2, fontWeight:'bold', color:theme.palette.primary.dark}}>
                        
                    Contact Us for a Free Estimate
                </Typography>
                <Typography variant={isMobile ? 'body2' : 'body1'} sx={{ marginBottom:2, color:theme.palette.primary.cloudBurst}}>
                        At Spark-E Unlimited Electrical, we’re always here to answer your questions and help you make informed decisions. 
                        Whether you need a detailed estimate, more information about our services, or advice on an upcoming project, our team is ready to assist. 
                        Expect prompt responses and clear communication from the very first interaction.
                </Typography>
                
                <Box
                    sx={{
                        display: 'flex',               // Enable flexbox
                        justifyContent: 'center',       // Center horizontally
                        alignItems: 'center',           // Center vertically (if needed)
                        textAlign: 'center',            // Ensure text alignment is centered
                        margin: '0 auto',                //Additional centering for larger widths
                    }}
                    >
                    <Link href="/contactus" className="orange_grad_btn">
                        <Typography sx={{ fontWeight: 'bold', display: 'flex' }}>
                            Contact Us
                        </Typography>
                    </Link>
                    
                </Box>
            
           
            </Box>
        </ThemeProvider>  
    )
}
        

};


export default ContactUSFooter;