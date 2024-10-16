'use client';
import * as React from 'react';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
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
const initValues = { fName: "", lName: "", phone: "", reqEmail: "", subject: "", message: "" };
const initState = { values: initValues, isLoading: false, responseData: "" };


const onSubmit = async (event) => {
    event.preventDefault();
    setState((prev) => ({ ...prev, isLoading: true }));
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
  
    
      const data = await response.json(); // Extract JSON response
      setState((prev) => ({ ...prev, isLoading: false, responseData: data }));

      if (data.success) {
        console.log("Email sent successfully:", data.message);
      } else {
        console.error("Error:", data.error);
      }
    } catch (error) {
      console.error("Request failed:", error);
      setState((prev) => ({ ...prev, isLoading: false }));
    } 
  }; 

const ContactForm = () => {

    const [displayButton, setDisplayButton] = useState(true); // Initialize as boolean

    const [state, setState] = useState(initState);
    const { values, isLoading, responseData } = state;
    const isMobile = useIsMobile();
  
     const handleInputChange = (event) => {
        const { name, value } = event.target;
        setState((prev) => ({
            ...prev,
            values: { ...prev.values, [name]: value },
        }));
    };
  
<Box sx={{ bgcolor:'white', marginBottom: 1, p:4, width:1 }}>
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
};

export default ContactForm;