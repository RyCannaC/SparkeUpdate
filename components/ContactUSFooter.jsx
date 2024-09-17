import Link from "next/link";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useIsMobile from './IsMobile';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import BoltIcon from '@mui/icons-material/Bolt';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Grid2 } from "@mui/material";
import CircleIcon from '@mui/icons-material/Circle';

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


const ContactUSFooter = ({contactpage}) => {
    const isMobile = useIsMobile();

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
                        {contactpage ? (
                            <>
                            <Grid2 container alignItems="center">
                                <Grid2 item='true' size={12} sx={{display: 'flex', textAlign: 'center', justifyContent: 'center' }}>
                                    <Typography variant={isMobile ? 'h6' : 'h4'} sx={{textAlign: 'center', marginBottom:2, fontWeight:'bold', color:theme.palette.primary.dark}}>
                                        Location & Contact Information:
                                    </Typography>
                                    
                                </Grid2>
                                <Grid2 item='true' size={12} sx={{marginBottom:4, display: 'flex', textAlign: 'center', justifyContent: 'center' }}>
                                    <Grid2 container>
                                        <Grid2 item='true' spacing={2} size={6}>
                                        <List dense >
                                        <ListItem>
                                        <ListItemIcon>
                                            <BoltIcon fontSize="small" />
                                        </ListItemIcon>
                                        <Typography sx={{fontWeight: 'bold'}} variant={isMobile ? 'body2' : 'body1'}>
                                            Address:
                                        </Typography>
                                        </ListItem>
                                        <ListItem>
                                        <ListItemIcon>
                                            <BoltIcon fontSize="small" />
                                        </ListItemIcon>
                                        <Typography sx={{fontWeight: 'bold'}} variant={isMobile ? 'body2' : 'body1'}>
                                            Phone:
                                        </Typography>
                                        </ListItem>
                                        <ListItem>
                                        <ListItemIcon>
                                            <BoltIcon fontSize="small" />
                                        </ListItemIcon>
                                        <Typography sx={{fontWeight: 'bold'}} variant={isMobile ? 'body2' : 'body1'}>
                                            Email: 
                                        </Typography>
                                        </ListItem>
                                        <ListItem>
                                        <ListItemIcon>
                                            <BoltIcon fontSize="small" />
                                        </ListItemIcon>
                                        <Typography sx={{fontWeight: 'bold'}} variant={isMobile ? 'body2' : 'body1'}>
                                            Business Hours: 
                                        </Typography>
                                        </ListItem>
                                        </List>
                                        </Grid2>
                                    </Grid2>
                                    <List dense >
                                        <ListItem>
                                        {/* <ListItemIcon>
                                            <BoltIcon fontSize="small" />
                                        </ListItemIcon>
                                        <Typography sx={{fontWeight: 'bold'}} variant={isMobile ? 'body2' : 'body1'}>
                                            Address:
                                        </Typography> */}
                                        <Typography variant={isMobile ? 'body2' : 'body1'}>
                                           367 Balinroan Cres., Nepean ON, K2J 3V1
                                        </Typography>
                                        </ListItem>
                                        <ListItem>
                                        {/* <ListItemIcon>
                                            <BoltIcon fontSize="small" />
                                        </ListItemIcon>
                                        <Typography sx={{fontWeight: 'bold'}} variant={isMobile ? 'body2' : 'body1'}>
                                            Phone:
                                        </Typography> */}
                                        <Typography variant={isMobile ? 'body2' : 'body1'}>
                                            (343)596-6337
                                        </Typography>
                                        </ListItem>
                                        <ListItem>
                                        {/* <ListItemIcon>
                                            <BoltIcon fontSize="small" />
                                        </ListItemIcon>
                                        <Typography sx={{fontWeight: 'bold'}} variant={isMobile ? 'body2' : 'body1'}>
                                            Email: 
                                        </Typography> */}
                                        <Typography variant={isMobile ? 'body2' : 'body1'}>
                                            rmaxwell@sparkeunlimited.ca
                                        </Typography>
                                        </ListItem>
                                         {/* <ListItem>
                                       <ListItemIcon>
                                            <BoltIcon fontSize="small" />
                                        </ListItemIcon>
                                        <Typography sx={{fontWeight: 'bold'}} variant={isMobile ? 'body2' : 'body1'}>
                                            Business Hours: 
                                        </Typography> 
                                        </ListItem>*/}
                                        <ListItem >                                        
                                        <Typography variant={isMobile ? 'body2' : 'body1'}>
                                            Mon-Fri: 5:00 PM – 9:00 PM 
                                        </Typography>
                                        </ListItem>
                                        <ListItem >
                                        
                                        <Typography variant={isMobile ? 'body2' : 'body1'}>
                                        Sat-Sun: 9:00 AM – 9:00 PM 
                                        </Typography>
                                        </ListItem>
                                    </List>
                                </Grid2>
                            </Grid2>
                        </>
                            
                            ) : (

                                <Link href="/contactus" className="orange_grad_btn">
                                <Typography sx={{ fontWeight: 'bold', display: 'flex' }}>
                                Contact Us
                                </Typography>
                            </Link>

                                
                        )}
                    
                </Box>
            </Box>
        </ThemeProvider>

);
}

export default ContactUSFooter;