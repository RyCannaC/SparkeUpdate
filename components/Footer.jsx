'use client';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2'; 
import Link from '@mui/material/Link'; 
import Typography from '@mui/material/Typography'; 
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Card from '@mui/material/Card'
import CardContent  from '@mui/material/CardContent';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Image from 'next/image';
import useIsMobile from './IsMobile';

const theme = createTheme({
    newcolors: {
      background: {
        footer: '#A1A1AA',
      }
    },
  });

const Footer = () => {
  const isMobile = useIsMobile();

  return (
    <>
      {isMobile ? (
        <ThemeProvider theme={theme}>
           <Card sx={{bgcolor:theme.newcolors.background.footer, width:1}}>
                <CardContent> 
                    <Grid container >
                        
                        <Grid item='true' 
                            size={4}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',    // Stack items vertically
                                alignItems: 'center',       // Center the content horizontally
                                textAlign: 'left',          // Left-align the text
                              }}
                            >
                        <Typography>ECRA/ESA#: 7017645</Typography>
                        <Image
                            src="/assets/img/ECRA-ESA-logo-black.png"
                            alt="ecra_esa_logo"
                            width={100}
                            height={100}
                            //className="object-contain"
                            />
                            
                        </Grid>
                        <Grid  
                            item='true' 
                            size={4}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',    // Stack items vertically
                                alignItems: 'center',       // Center the content horizontally
                                textAlign: 'left',          // Left-align the text
                              }}
                              >
                            <Typography variant="h6">Links</Typography>
                            <Link href="/" color="inherit">Home</Link>
                            <Link href="/services" color="inherit">Services</Link>
                            <Link href="/aboutus" color="inherit">About Us</Link>
                            <Link href="/contactus" color="inherit">Contact Us</Link>
                        </Grid>
                        <Grid item='true' 
                            size={4}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',    // Stack items vertically
                                alignItems: 'center',       // Center the content horizontally
                                textAlign: 'left',          // Left-align the text
                              }}>
                            <Typography variant="h6">Follow Us</Typography>
                            <IconButton href="https://facebook.com" color="inherit">
                            <FacebookIcon />
                            </IconButton>
                            <IconButton href="https://www.linkedin.com/company/spark-e-unlimited-electrical" color="inherit">
                            <LinkedInIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                    <Box textAlign="center" mt={4}>
                        <Typography variant="body2">
                            © 2024 Spark-E Unlimited Electrical Inc. |{' '}
                            <Link href="/privacy" color="inherit">
                            Privacy Policy
                            </Link>
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </ThemeProvider>

      ):(
        
            <ThemeProvider theme={theme}>
                <Card sx={{bgcolor:theme.newcolors.background.footer, width:1}}>
                <CardContent> 
                    <Grid container >
                        <Grid item='true' size={4}>
                            <Typography variant="h6">Spark-E Unlimited Electrical Inc.</Typography>
                            <Typography>367 Balinroan Crescent, Nepean, ON</Typography>
                            <Typography>Email: info@sparkeunlimited.ca</Typography>
                            <Typography>Phone: (343) 596-6337</Typography>
                        </Grid>
                        <Grid item='true' size={4}>
                        <Image
                            src="/assets/img/ECRA-ESA-logo-black.png"
                            alt="ecra_esa_logo"
                            sizes="100vw"
                            width= {100} 
                            height= {100}
                            className="object-contain"
                            />
                            <Typography>ECRA/ESA#: 7017645</Typography>
                        </Grid>
                        <Grid item='true' size={2}>
                            <Typography variant="h6">Quick Links</Typography>
                            <Link href="/" color="inherit">Home</Link><br/>
                            <Link href="/services" color="inherit">Services</Link><br />
                            <Link href="/aboutus" color="inherit">About Us</Link><br />
                            <Link href="/contactus" color="inherit">Contact Us</Link>
                        </Grid>
                        <Grid item='true' textAlign='right' size={2}>
                            <Typography variant="h6">Follow Us</Typography>
                            <IconButton href="https://facebook.com" color="inherit">
                            <FacebookIcon />
                            </IconButton>
                            <IconButton href="https://linkedin.com" color="inherit">
                            <LinkedInIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                    <Box textAlign="center" mt={4}>
                        <Typography variant="body2">
                            © 2024 Spark-E Unlimited Electrical Inc. |{' '}
                            <Link href="/privacy" color="inherit">
                            Privacy Policy
                            </Link>
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </ThemeProvider>

      )}
        

   
    </>
  );
};

export default Footer;
