'use client';
import Link from "next/link";
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BoltIcon from '@mui/icons-material/Bolt';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ContactUSFooter from "@/components/ContactUSFooter";
import { Typography } from "@mui/material";
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useIsMobile from "@/components/IsMobile";
import { useState } from "react";

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

export default function AccordionFAQ() {
  const [displayButton, setDisplayButton] = useState(false); // Initialize as boolean
  const isMobile = useIsMobile();
  return (
    <>
    <section className='mb-6 w-full flex-center flex-col'>
        <h1 className='h1_text text-center orange_gradient text-center mb-6 pb-2'>
          Frequently Asked Questions
        </h1>
      </section>
      <ThemeProvider theme={theme}>
      <Box sx={{ marginBottom: isMobile ? 1 : 2, bgcolor: 'white', p: isMobile ? 2 : 4, width: 1 }}>
      <Typography variant={isMobile ? 'h6' : 'h4'} sx={{ textAlign: 'center', marginBottom:4, fontWeight:'bold', color:theme.palette.primary.dark}}>
              Have questions? Here are some answers.
          </Typography>
            
              <Typography variant={isMobile ? 'body2' : 'body1'} sx={{ marginBottom: 2, color: theme.palette.primary.cloudBurst }}>
              Below are some common questions I receive. If you don&apos;t find the answer you&apos;re looking for, feel free to call or email me, and I&apos;ll get back to you with the information within 24 hours.              </Typography>
         
        
          </Box>
    </ThemeProvider>
    <Box sx={{ marginBottom: isMobile ? 1 : 2, bgcolor: 'white', p: isMobile ? 2 : 4, width: 1 }}>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          What is a Licensed Electrical Contractor and why should I hire one?
        </AccordionSummary>
        <AccordionDetails>
        Licensed Electrical Contractors are the only businesses, with certain exemptions, in Ontario legally authorized to do electrical work in your home or facility. 
        All Licensed Electrical Contractors: 
            <List dense>
              <ListItem>
                <ListItemIcon>
                  <BoltIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant={isMobile ? 'body2' : 'body1'}>
                    carry liability insurance;
                </Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <BoltIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant={isMobile ? 'body2' : 'body1'}>
                    have Workplace Safety and Insurance Board coverage;
                </Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <BoltIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant={isMobile ? 'body2' : 'body1'}>
                    understand that they must arrange for an electrical notification to ESA;
                </Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <BoltIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant={isMobile ? 'body2' : 'body1'}>
                    are qualified to perform electrical work to meet the Ontario Electrical Safety Code;
                </Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <BoltIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant={isMobile ? 'body2' : 'body1'}>
                    can show an ECRA/ESA licence number
                </Typography>
              </ListItem>
            </List>
        For more information contact ESA at: <Link
                size="small"
                href="https://esasafe.com/hiring-an-electrician-or-contractor/" 
                color="inherit">https://esasafe.com/hiring-an-electrician-or-contractor/</Link> 

        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Are you licensed and insured? 
        </AccordionSummary>
        <AccordionDetails>
        Yes, I am fully licensed and insured to perform electrical work. I am a certified Master Electricians, ensuring high-quality and code-compliant service.
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          What areas do you serve?
        </AccordionSummary>
        <AccordionDetails>
        I proudly serve clients in Ottawa and surrounding areas and I&apos;m also pleased to offer services across most of Ontario. Please contact me to confirm I can assist you in your location.
        </AccordionDetails>
       
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4-content"
          id="panel4-header"
        >
          How do I schedule an appointment? 
        </AccordionSummary>
        <AccordionDetails>
        You can schedule an appointment by calling us directly at 
            <Link
                size="small"
                href="tel::3435966337" 
                color="inherit">                              
                (343) 596-6337
            </Link> 
            or by email at 
            <Link
                size="small"
                href="mailto::rmaxwell@sparkeunlimited.ca" 
                color="inherit">                              
                rmaxwell@sparkeunlimited.ca
            </Link>. I&apos;ll get back to you promptly to confirm your appointment.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5-content"
          id="panel5-header"
        >
          Do you provide free estimates?
        </AccordionSummary>
        <AccordionDetails>
        Yes, I offer free estimates for most services. I&apos;ll assess your needs and provide a detailed quote based on the scope of work required.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6-content"
          id="panel6-header"
        >
          Can you install standby generators or EV chargers?  
        </AccordionSummary>
        <AccordionDetails>
        Yes, I specialize in the installation of standby generators (including Generac) and EV chargers. I’ll guide you through the process and ensure the installation meets all safety and performance standards.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel7-content"
          id="panel7-header"
        >
          How do I know if I need an electrical panel upgrade?
        </AccordionSummary>
        <AccordionDetails>
        You may need an electrical panel upgrade if you notice frequent circuit breaker trips, flickering lights, or if your current panel is outdated and not equipped to handle modern electrical loads. I can evaluate your system and recommend the best solution.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel8-content"
          id="panel8-header"
        >
          Do I need an electrical permit for my project?  
        </AccordionSummary>
        <AccordionDetails>
        Most electrical projects, especially those involving new installations or major upgrades, require a permit. I&apos;ll handle the permitting process and ensure all work complies with local regulations. Note that permit fees are additional.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel9-content"
          id="panel9-header"
        >
          What should I do if I have flickering lights or frequent power outages?
        </AccordionSummary>
        <AccordionDetails>
        Flickering lights or frequent power outages may be a sign of a bigger electrical issue, such as faulty wiring or an overloaded circuit. Contact us immediately for an inspection, and I&apos;ll diagnose and resolve the problem.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel10-content"
          id="panel10-header"
        >
         How often should I schedule electrical maintenance for my home or business?  
        </AccordionSummary>
        <AccordionDetails>
        Regular electrical maintenance is crucial for safety and efficiency. I recommend scheduling an inspection at least once a year or whenever you notice any electrical issues. Our maintenance packages also help ensure your systems remain in top condition.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel11-content"
          id="panel11-header"
        >
          What is your warranty on services or installations?
        </AccordionSummary>
        <AccordionDetails>
        I stand behind our work with a satisfaction guarantee. Our installations come with a 1 Year warranty, covering labor and materials. Please ask for more details on specific warranties for products and services.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel12-content"
          id="panel12-header"
        >
          Do you handle commercial electrical projects?
        </AccordionSummary>
        <AccordionDetails>
        Yes, I provide comprehensive electrical services for commercial properties, including lighting installation, electrical upgrades, and new construction wiring. I&apos;m equipped to handle jobs of all sizes for businesses.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel13-content"
          id="panel13-header"
        >
          Do you offer any discounts or promotions?
        </AccordionSummary>
        <AccordionDetails>
        I frequently offer seasonal promotions, including discounts on services such as standby generator maintenance and installation. Be sure to ask about our current offers, and check our website for updates.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel14-content"
          id="panel14-header"
        >
          What types of payment do you accept?
        </AccordionSummary>
        <AccordionDetails>
        I accept a few forms of payment, but primarily I accept cash and e-transfers. I also offer financing options for larger projects to help make your electrical upgrades more affordable.
        </AccordionDetails>
      </Accordion>
      </Box>
    <ContactUSFooter contactPage={displayButton} />
    </>
  );
}
