import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useIsMobile from './IsMobile';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ViewportContent from '@/components/ContactFooterView';


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
                        
                        <ViewportContent contactpage={contactPage}/>
                        
                </Box>
            </Box>
        </ThemeProvider>

);
}

export default ContactUSFooter;