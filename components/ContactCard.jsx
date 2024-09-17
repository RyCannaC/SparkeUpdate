'use client';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
/* import { SendEmailCommand } from "@aws-sdk/client-ses";
import { sesClient } from '@/app/contactus/sesClient'; */
import { Typography } from "@mui/material";
import useIsMobile from "./IsMobile";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { SendEmailCommand } from "@aws-sdk/client-ses";
import sesClient from '@/app/libs/sesClient';

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

   

    const createSendEmailCommand = (htmlEmailBody) => {
        return new SendEmailCommand({
          Destination: {
            /* required */
            CcAddresses: [
                "rmaxwell@sparkeunlimited.ca",
            ]
            ,
            ToAddresses: [
              "info@sparkeunlimited.ca",
              /* more To-email addresses */
            ],
          },
          Message: {
            /* required */
            Body: {
              /* required */
              Html: {
                Charset: "UTF-8",
                Data: htmlEmailBody,
              },
              Text: {
                Charset: "UTF-8",
                Data: values.message,
              },
            },
            Subject: {
              Charset: "UTF-8",
              Data: values.subject,
            },
          },
          Source: "info@sparkeunlimited.ca",
          ReplyToAddresses: [
            /* more items */
          ],
        });
      };

    const onSubmit = async (event) => {
        event.preventDefault();
        setState((prev) => ({ ...prev, isLoading: true }));

        const htmlEmailBody = `
    <div style="font-family: Arial, sans-serif; color: #333;">
        <h2 style="color: #0056b3;">New Contact Request</h2>
        <p><strong>First Name:</strong> ${values.fName}</p>
        <p><strong>Last Name:</strong> ${values.lName}</p>
        <p><strong>Phone Number:</strong> ${values.phone}</p>
        <p><strong>Email:</strong> ${values.reqEmail}</p>
        <p><strong>Subject:</strong> ${values.subject}</p>
        <h3>Message:</h3>
        <p style="border-left: 4px solid #ddd; padding-left: 10px; color: #555;">
            ${values.message}
        </p>
        <br />
        <hr />
        <p>This message was sent from your website contact form.</p>
    </div>
`;




  const sendEmailCommand = createSendEmailCommand(htmlEmailBody);

  try {
    return await sesClient.send(sendEmailCommand);
  } catch (caught) {
    if (caught instanceof Error && caught.name === "MessageRejected") {
      /** @type { import('@aws-sdk/client-ses').MessageRejected} */
      const messageRejectedError = caught;
      return messageRejectedError;
    }
    throw caught;
  }

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
                    {/* <Grid item='true' size={12}>
                        <FormGroup>
                            <FormControlLabel
                                control={
                                    <Switch
                                        id="ccEmail"
                                        checked={values.checked}
                                        onChange={handleSwitchChange}
                                        color="warning"
                                    />
                                }
                                label="Would you like to be cc'd on this email?"
                            />
                        </FormGroup>
                    </Grid> */}
                    <Grid item='true' size={12}>
                        <Button
                            //disabled
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
