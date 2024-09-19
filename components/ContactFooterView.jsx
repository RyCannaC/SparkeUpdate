import BoltIcon from '@mui/icons-material/Bolt';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Grid from '@mui/material/Grid2';
import Link from "next/link";
import Typography from '@mui/material/Typography';
import useIsMobile from './IsMobile';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Iframe from 'react-iframe';
import { useMemo } from "react";

const ViewportContent = ({contactpage}) =>{
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
    
    if (contactpage){
        if (isMobile){
            return(
                <ThemeProvider theme={theme}>
                    <Grid container alignItems="center">
                        <Grid item="true" size={12} sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                            <Typography
                                variant={titleVariant}
                                sx={{ marginBottom: 2, fontWeight: 'bold', color: theme.palette.primary.dark }}
                            >
                                Business Hours:
                            </Typography>
                        </Grid>
                    
                    <Grid item="true" size={12} sx={{ marginBottom: 1, display: 'flex', justifyContent: 'center', textAlign: 'center' }}>       
                        <Typography variant={bodyVariant}>
                            Mon-Fri: 5:00 PM – 9:00 PM <br/>
                            Sat-Sun: 9:00 AM – 9:00 PM
                        </Typography>
                    </Grid>
                    <Grid item="true" size={12} sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                            <Iframe url="https://linko.page/spark-e"
                                    position="relative"
                                    width="100%"
                                    id="myId"
                                    className="myClassname"
                                    height="100%"
                                    styles={{height: "2024px"}}/>
                        </Grid>
                    </Grid>
                    

                </ThemeProvider>

            )
            
        }
        else{
            return(                                  
                <Grid container alignItems="center">
                    <Grid item="true" size={12} sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                        <Typography
                            variant={titleVariant}
                            sx={{ marginBottom: 2, fontWeight: 'bold', color: theme.palette.primary.dark }}
                        >
                            Business Hours:
                        </Typography>
                    </Grid>
                    <Grid item="true" size={12} sx={{ marginBottom: 4, display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                        
                        <Typography variant={bodyVariant}>
                            Mon-Fri: 5:00 PM – 9:00 PM
                        </Typography>
                    
                        <Typography variant={bodyVariant}>
                            Sat-Sun: 9:00 AM – 9:00 PM
                        </Typography>
                               
                    </Grid>
                    <Grid item="true" size={12} sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                        <Iframe url="https://linko.page/spark-e"
                                width="100%"
                                height="2048px"
                                id="contactusframe"
                                className=""
                                display="block"
                                position="relative"/>
                    </Grid>
                </Grid>
                         
            )
        }
    

    }
    else{ 
        return(
        <Link href="/contactus" className="orange_grad_btn">
            <Typography sx={{ fontWeight: 'bold', display: 'flex' }}>
                Contact Us
            </Typography>
        </Link>
        )
    }
};

export default ViewportContent;