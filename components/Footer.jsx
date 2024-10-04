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
import XIcon from '@mui/icons-material/X';
import PlaceIcon from '@mui/icons-material/Place';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import BoltIcon from '@mui/icons-material/Bolt';

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
                        <Typography>ECRA/ESA#:</Typography>
                        <Typography>7017645</Typography>
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
                                textAlign: 'center',          // Left-align the text
                              }}>
                            <Typography variant="h6">Follow Us</Typography>
                            <IconButton href="https://www.linkedin.com/company/spark-e-unlimited-electrical" color="inherit">
                            <LinkedInIcon />
                            </IconButton>
                            <IconButton href="https://x.com/_Spark_E" color="inherit">
                            <XIcon />
                            </IconButton>
                            
                        </Grid>
                    </Grid>
                    <Box textAlign="center" mt={4}>
                        <Typography variant="body2">
                            © 2024 Spark-E Unlimited Electrical Inc.
                            {/* <Link href="/privacy" color="inherit">
                            Privacy Policy
                            </Link> */}
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
                            <Typography paddingLeft={isMobile? 0 : 1.5} variant="h6">
                              Spark-E Unlimited Electrical Inc.
                            </Typography>
                            <Typography>
                              <IconButton 
                                size="small"
                                href="https://www.google.com/maps/place/367+Balinroan+Crescent,+Nepean,+ON+K2J+3V1/@45.2682511,-75.7353759,17z/data=!3m1!4b1!4m6!3m5!1s0x4ccdfcd0d8749eeb:0x97225472790c30f2!8m2!3d45.2682511!4d-75.732801!16s%2Fg%2F11c5dx6tmj?entry=ttu&g_ep=EgoyMDI0MDkyMi4wIKXMDSoASAFQAw%3D%3D" 
                                color="inherit"
                                >
                              <PlaceIcon size="small" />
                              </IconButton>
                              <Link
                                href="https://www.google.com/maps/place/367+Balinroan+Crescent,+Nepean,+ON+K2J+3V1/@45.2682511,-75.7353759,17z/data=!3m1!4b1!4m6!3m5!1s0x4ccdfcd0d8749eeb:0x97225472790c30f2!8m2!3d45.2682511!4d-75.732801!16s%2Fg%2F11c5dx6tmj?entry=ttu&g_ep=EgoyMDI0MDkyMi4wIKXMDSoASAFQAw%3D%3D" 
                                color="inherit">
                                367 Balinroan Crescent, Nepean, ON
                              </Link>
                              
                            </Typography>
                            <Typography>
                              <IconButton 
                                size="small"
                                href="mailto:info@sparkeunlimited.ca" 
                                color="inherit">
                              <AlternateEmailIcon />
                              </IconButton><Link 
                                href="mailto:info@sparkeunlimited.ca" 
                                color="inherit">info@sparkeunlimited.ca
                                </Link>
                            </Typography>
                            <Typography>
                            <IconButton 
                                size="small"
                                href="tel::3435966337" 
                                color="inherit">
                              <PhoneIphoneIcon />
                              </IconButton>
                              <Link 
                                href="tel::3435966337" 
                                color="inherit">(343) 596-6337
                              </Link>  
                            </Typography>
                        </Grid>
                        <Grid item='true' size={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Image
                            src="/assets/img/ECRA-ESA-logo-black.png"
                            alt="ecra_esa_logo"
                            sizes="100vw"
                            width= {150} 
                            height= {150}
                            
                            />
                            <Typography >ECRA/ESA#:</Typography>
                            <Typography >7017645</Typography>
                        </Grid>
                        <Grid item='true'sx={{ textAlign: 'center'}} size={3}>
                            <Typography variant="h6">Quick Links</Typography>
                            <Link href="/" color="inherit">Home</Link><br/>
                            <Link href="/services" color="inherit">Services</Link><br />
                            <Link href="/aboutus" color="inherit">About Us</Link><br />
                            <Link href="/contactus" color="inherit">Contact Us</Link>
                        </Grid>
                        <Grid item='true' textAlign='center' size={2}>
                            <Typography variant="h6">Follow Us</Typography>
                            <IconButton href="https://facebook.com" color="inherit">
                            <FacebookIcon />
                            </IconButton>
                            <IconButton href="https://www.linkedin.com/company/spark-e-unlimited-electrical" color="inherit">
                            <LinkedInIcon />
                            </IconButton>
                            <IconButton href="https://x.com/_Spark_E" color="inherit">
                            <XIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                    <Box textAlign="center" mt={4}>
                        <Typography variant="body2">
                            © 2024 Spark-E Unlimited Electrical Inc. 
                            {/* <Link href="/privacy" color="inherit">
                            Privacy Policy
                            </Link> */}
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
