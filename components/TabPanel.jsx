import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import BoltIcon from '@mui/icons-material/Bolt';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useMediaQuery, useTheme } from '@mui/material';
import useIsMobile from './IsMobile';

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


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  const isMobile = useIsMobile();

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ 
            p: isMobile ? 1 : 3,
            width: isMobile ? 'w-screen' : 'w-full', // Use full viewport width on mobile
            margin: isMobile ? '0' : 'auto', // Remove margin on mobile
            bgcolor: 'white',
            
            
           }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const isMobile = useIsMobile();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
   <>
  
        <Box
          sx={{
            bgcolor:'white', 
            marginBottom: 1, 
            
            width:1,
            borderBottom: 1,
            borderColor: 'divider',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="service tabs"
            variant="scrollable" // Enables scrolling
            scrollButtons="auto"  // Show scroll buttons if needed
          >
            <Tab label="Residential" {...a11yProps(0)} />
            <Tab label="EV Chargers" {...a11yProps(1)} />
            <Tab label="Generators" {...a11yProps(2)} />
            <Tab label="Energy-Efficient" {...a11yProps(3)} />
            <Tab label="Smart Home" {...a11yProps(4)} />
            <Tab label="Commercial" {...a11yProps(5)} />
          </Tabs>
        </Box>

      <CustomTabPanel value={value} index={0}>
        <ThemeProvider theme={theme}>
            
                <Typography variant={isMobile ? 'h6' : 'h4'} sx={{textAlign: 'center', marginBottom:2, fontWeight:'bold', color:theme.palette.primary.dark}}>
                
                    Residential
                </Typography>
                <Typography variant={isMobile ? 'body2' : 'body1'} sx={{ marginBottom:2, color:theme.palette.primary.cloudBurst}}>
                We know how important your home is, and we’re committed to keeping
                you informed throughout every step of your electrical project.
                From simple repairs to full-scale installations, we work closely
                with you to make sure all your needs are met. We provide updates,
                explain the process, and ensure no surprises.
                </Typography>
                <Typography variant={isMobile ? 'h6' : 'h4'} sx={{textAlign: 'left', marginBottom:2, fontWeight:'bold', color:theme.palette.primary.dark}}>
                    Key services:
                </Typography>
                <List dense>
                <ListItem >
                    <ListItemIcon>
                    <BoltIcon fontSize="small" />
                    </ListItemIcon>
                    <Typography variant={isMobile ? 'body2' : 'body1'} >
                        Electrical wiring and rewiring
                    </Typography>
                    
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                    <BoltIcon fontSize="small" />
                    </ListItemIcon>
                    <Typography variant={isMobile ? 'body2' : 'body1'} >
                        Breaker panel upgrades
                    </Typography>
                 
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                    <BoltIcon fontSize="small" />
                    </ListItemIcon>
                    <Typography variant={isMobile ? 'body2' : 'body1'} >
                        Indoor and outdoor lighting installations
                    </Typography>
                    
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                    <BoltIcon fontSize="small" />
                    </ListItemIcon>
                    <Typography variant={isMobile ? 'body2' : 'body1'} >
                        GFCI and AFCI installations
                    </Typography>
                    
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                    <BoltIcon fontSize="small" />
                    </ListItemIcon>
                    <Typography variant={isMobile ? 'body2' : 'body1'} >
                        Electrical inspections and code compliance                    
                    </Typography>
                    
                </ListItem>
                </List>
         
        </ThemeProvider>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <ThemeProvider theme={theme}>
            
            <Typography variant={isMobile ? 'h6' : 'h4'} sx={{textAlign: 'center', marginBottom:2, fontWeight:'bold', color:theme.palette.primary.dark}}>
            EV Charger Installations
            </Typography>
            <Typography variant={isMobile ? 'body2' : 'body1'} sx={{ marginBottom:2, color:theme.palette.primary.cloudBurst}}>
            As electric vehicles (EVs) become more common, we’re here to help you stay ahead with convenient and safe EV charger installations. 
            Whether you’re looking to install a charger at your home or provide charging stations at your business, we offer tailored solutions to fit your needs. 
            Our team works closely with you to ensure that you understand your options and make an informed decision.
            </Typography>
            <Typography variant={isMobile ? 'h6' : 'h4'} sx={{textAlign: 'left', marginBottom:2, fontWeight:'bold', color:theme.palette.primary.dark}}>
                Key services:
            </Typography>
            <List dense>
            <ListItem >
                <ListItemIcon>
                <BoltIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant={isMobile ? 'body2' : 'body1'} >
                Home EV charger installation
                </Typography>
                
            </ListItem>
            <ListItem>
                <ListItemIcon>
                <BoltIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant={isMobile ? 'body2' : 'body1'} >
                Commercial EV charging stations
                </Typography>
             
            </ListItem>
            <ListItem>
                <ListItemIcon>
                <BoltIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant={isMobile ? 'body2' : 'body1'} >
                Charger compatibility and safety assessments
                </Typography>
                
            </ListItem>
            <ListItem>
                <ListItemIcon>
                <BoltIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant={isMobile ? 'body2' : 'body1'} >
                Panel upgrades to support EV chargers
                </Typography>
                
            </ListItem>
            <ListItem>
                <ListItemIcon>
                <BoltIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant={isMobile ? 'body2' : 'body1'} >
                Ongoing maintenance and support                    
                </Typography>
                
            </ListItem>
            </List>
     
    </ThemeProvider>
      
              
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      <ThemeProvider theme={theme}>
            
            <Typography variant={isMobile ? 'h6' : 'h4'} sx={{textAlign: 'center', marginBottom:2, fontWeight:'bold', color:theme.palette.primary.dark}}>
            Backup Generators
            </Typography>
            <Typography variant={isMobile ? 'body2' : 'body1'} sx={{ marginBottom:2, color:theme.palette.primary.cloudBurst}}>
            Power outages can cause major disruptions, but with a reliable backup generator, you can ensure that your home or business stays powered even during unexpected blackouts. 
            At Spark-E Unlimited Electrical, we offer expert installation, maintenance, and repair of backup generators to give you peace of mind. 
            Our team will work closely with you to determine the best solution for your energy needs, and we’ll keep you updated throughout the entire process.
            </Typography>
            <Typography variant={isMobile ? 'h6' : 'h4'} sx={{textAlign: 'left', marginBottom:2, fontWeight:'bold', color:theme.palette.primary.dark}}>
                Key services:
            </Typography>
            <List dense>
            <ListItem >
                <ListItemIcon>
                <BoltIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant={isMobile ? 'body2' : 'body1'} >
                Backup generator selection and installation
                </Typography>
                
            </ListItem>
            <ListItem>
                <ListItemIcon>
                <BoltIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant={isMobile ? 'body2' : 'body1'} >
                Whole-house or business backup solutions
                </Typography>
             
            </ListItem>
            <ListItem>
                <ListItemIcon>
                <BoltIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant={isMobile ? 'body2' : 'body1'} >
                Generator maintenance and repairs
                </Typography>
                
            </ListItem>
            <ListItem>
                <ListItemIcon>
                <BoltIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant={isMobile ? 'body2' : 'body1'} >
                Automatic transfer switch installations
                </Typography>
                
            </ListItem>
            <ListItem>
                <ListItemIcon>
                <BoltIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant={isMobile ? 'body2' : 'body1'} >
                Generator grounding and code compliance                   
                </Typography>
                
            </ListItem>
            </List>
     
    </ThemeProvider>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
      
        <ThemeProvider theme={theme}>
            
            <Typography variant={isMobile ? 'h6' : 'h4'} sx={{textAlign: 'center', marginBottom:2, fontWeight:'bold', color:theme.palette.primary.dark}}>
            Energy-Efficient Solutions
            </Typography>
            <Typography variant={isMobile ? 'body2' : 'body1'} sx={{ marginBottom:2, color:theme.palette.primary.cloudBurst}}>
            When making the switch to energy-efficient solutions, we understand that communication is key. 
            We take the time to discuss your energy goals, explain the technology behind solar panels or other upgrades, and ensure that you understand every option before moving forward.
            </Typography>
            <Typography variant={isMobile ? 'h6' : 'h4'} sx={{textAlign: 'left', marginBottom:2, fontWeight:'bold', color:theme.palette.primary.dark}}>
                Key services:
            </Typography>
            <List dense>
            <ListItem >
                <ListItemIcon>
                <BoltIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant={isMobile ? 'body2' : 'body1'} >
                Solar panel installation and maintenance
                </Typography>
                
            </ListItem>
            <ListItem>
                <ListItemIcon>
                <BoltIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant={isMobile ? 'body2' : 'body1'} >
                Energy-efficient lighting and appliances
                </Typography>
             
            </ListItem>
            <ListItem>
                <ListItemIcon>
                <BoltIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant={isMobile ? 'body2' : 'body1'} >
                Smart thermostats and energy monitors
                </Typography>
                
            </ListItem>
            <ListItem>
                <ListItemIcon>
                <BoltIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant={isMobile ? 'body2' : 'body1'} >
                EV charging station installations
                </Typography>
                
            </ListItem>
            <ListItem>
                <ListItemIcon>
                <BoltIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant={isMobile ? 'body2' : 'body1'} >
                Energy audits and recommendations                   
                </Typography>
                
            </ListItem>
            </List>
     
    </ThemeProvider>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
      
        <ThemeProvider theme={theme}>
            
            <Typography variant={isMobile ? 'h6' : 'h4'} sx={{textAlign: 'center', marginBottom:2, fontWeight:'bold', color:theme.palette.primary.dark}}>
            Smart Home Solutions
            </Typography>
            <Typography variant={isMobile ? 'body2' : 'body1'} sx={{ marginBottom:2, fontWeight:'bold', color:'primary.cloudBurst'}}>
            We know smart home technology can be overwhelming, but our team makes it easy by providing clear communication at every stage. 
            Whether it's helping you choose the right system or guiding you through the setup process, we keep you informed and comfortable with the technology.
            </Typography>
            <Typography variant={isMobile ? 'h6' : 'h4'} sx={{textAlign: 'left', marginBottom:2, fontWeight:'bold', color:theme.palette.primary.dark}}>
                Key services:
            </Typography>
            <List dense>
            <ListItem >
                <ListItemIcon>
                <BoltIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant={isMobile ? 'body2' : 'body1'} >
                Smart lighting systems
                </Typography>
                
            </ListItem>
            <ListItem>
                <ListItemIcon>
                <BoltIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant={isMobile ? 'body2' : 'body1'} >
                Automated security and surveillance
                </Typography>
             
            </ListItem>
            <ListItem>
                <ListItemIcon>
                <BoltIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant={isMobile ? 'body2' : 'body1'} >
                Smart thermostats and climate control
                </Typography>
                
            </ListItem>
            <ListItem>
                <ListItemIcon>
                <BoltIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant={isMobile ? 'body2' : 'body1'} >
                Home entertainment systems
                </Typography>
                
            </ListItem>
            <ListItem>
                <ListItemIcon>
                <BoltIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant={isMobile ? 'body2' : 'body1'} >
                Voice-activated devices and home integration                   
                </Typography>
                
            </ListItem>
            </List>
     
    </ThemeProvider>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
        <ThemeProvider theme={theme}>
            
            <Typography variant={isMobile ? 'h6' : 'h4'} sx={{textAlign: 'center', marginBottom:2, fontWeight:'bold', color:theme.palette.primary.dark}}>
            Commercial Electrical Services
            </Typography>
            <Typography variant={isMobile ? 'body2' : 'body1'} sx={{ marginBottom:2, fontWeight:'bold', color:'primary.cloudBurst'}}>
            For businesses, clear communication is essential. We ensure that you’re always informed about timelines, work progress, and any necessary adjustments. 
            Whether you’re expanding your business or upgrading your infrastructure, we coordinate closely with you to minimize disruptions and keep you updated.
            </Typography>
            <Typography variant={isMobile ? 'h6' : 'h4'} sx={{textAlign: 'left', marginBottom:2, fontWeight:'bold', color:theme.palette.primary.dark}}>
                Key services:
            </Typography>
            <List dense>
            <ListItem >
                <ListItemIcon>
                <BoltIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant={isMobile ? 'body2' : 'body1'} >
                Power distribution and wiring for offices
                </Typography>
                
            </ListItem>
            <ListItem>
                <ListItemIcon>
                <BoltIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant={isMobile ? 'body2' : 'body1'} >
                Energy-efficient lighting systems
                </Typography>
             
            </ListItem>
            
            <ListItem>
                <ListItemIcon>
                <BoltIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant={isMobile ? 'body2' : 'body1'} >
                Emergency electrical services
                </Typography>
                
            </ListItem>
            <ListItem>
                <ListItemIcon>
                <BoltIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant={isMobile ? 'body2' : 'body1'} >
                Backup generators and surge protection                   
                </Typography>
                
            </ListItem>
            <ListItem>
                <ListItemIcon>
                <BoltIcon fontSize="small" />
                </ListItemIcon>
                <Typography color='textDisabled' variant={isMobile ? 'body2' : 'body1'} >
                Fire Alarm installation and maintenance (Coming Soon!)
                </Typography>
                
            </ListItem>
            </List>
     
    </ThemeProvider>
      </CustomTabPanel>
     
   </>
  );
}
