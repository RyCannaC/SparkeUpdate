'use client';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { Typography } from "@mui/material";
import useIsMobile from "./IsMobile";
import { createTheme, ThemeProvider } from '@mui/material/styles';

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

// Initial form values
const initValues = { fName: "", lName: "", phone: "", reqEmail: "", subject: "", message: "", checked: false };
const initState = { values: initValues, isLoading: false };


const ContactCard = () => {
    const [state, setState] = useState(initState);
    const { values, isLoading } = state;
    const isMobile = useIsMobile();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setState((prev) => ({
            ...prev,
            values: { ...prev.values, [name]: value },
        }));
    };

    

    const onSubmit = async (event) => {
        event.preventDefault();
        setState((prev) => ({ ...prev, isLoading: true }));

        event.preventDefault();
        setState((prev) => ({ ...prev, isLoading: true }));
      
        const response = await fetch('/api/sendEmail', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });
      
        /* if (response.ok) {
          console.log('Email sent successfully');
        } else {
          console.error('Error sending email');
        } */
      
        setState((prev) => ({ ...prev, isLoading: false }));
    }; 

    return (
        <Box sx={{ bgcolor: 'white', p: 4, width: 1 }}>
            <ThemeProvider theme={theme}>
                <Typography variant={isMobile ? 'h6' : 'h4'} sx={{textAlign: 'center', marginBottom: 2, fontWeight: 'bold', color: theme.palette.primary.dark}}>
                    Contact Form:
                </Typography>
            </ThemeProvider>
            <form onSubmit={onSubmit}>
                <Grid container spacing={2}>
                    {['fName', 'lName', 'phone', 'reqEmail', 'subject'].map((field, idx) => (
                        <Grid item='true' size={12} key={idx}>
                            <TextField
                                id={field}
                                name={field}
                                label={field === 'reqEmail' ? 'Email' : field === 'phone' ? 'Phone Number' : field === 'fName' ? 'First Name' : field === 'lName' ? 'Last Name' : 'Subject'}
                                type={field === 'phone' ? 'tel' : field === 'reqEmail' ? 'email' : 'text'}
                                variant="outlined"
                                fullWidth
                                required
                                value={values[field]}
                                onChange={handleInputChange}
                            />
                        </Grid>
                    ))}
                    <Grid item='true' size={12}>
                        <TextField
                            id="message"
                            name="message"
                            label="Message"
                            multiline
                            rows={8}
                            variant="outlined"
                            fullWidth
                            required
                            value={values.message}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    
                    <Grid item='true' size={12}>
                        <Button
                            disabled={!values.fName || !values.lName || !values.phone || !values.reqEmail || !values.subject || !values.message || isLoading}
                            id="submitButton"
                            type="submit"
                            variant="contained"
                            color="warning"
                            fullWidth
                        >
                            {isLoading ? 'Sending...' : 'Submit'}
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
};

export default ContactCard;
