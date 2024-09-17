'use client';
import * as React from 'react';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

const ContactForm = () => {
<Box sx={{ bgcolor:'white', marginBottom: 1, p:4, width:1 }}>
            <form onSubmit={onSubmit}>
                <Grid container spacing={2}>
                    <Grid display="flex" justifyContent="center" alignItems="center" size={12}>
                        <TextField 
                            id='fName' 
                            name="fName"
                            label='First Name' 
                            variant="outlined" 
                            fullWidth 
                            required 
                            value={values.fName}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid display="flex" justifyContent="center" alignItems="center" size={12}>
                        <TextField 
                            id='lName' 
                            name="lName"
                            label='Last Name' 
                            variant="outlined" 
                            fullWidth 
                            required 
                            value={values.lName}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid display="flex" justifyContent="center" alignItems="center" size={12}>
                        <TextField 
                            id='phone' 
                            name="phone"
                            label='Phone Number' 
                            type='tel' 
                            variant="outlined" 
                            fullWidth 
                            required 
                            value={values.phone}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid display="flex" justifyContent="center" alignItems="center" size={12}>
                        <TextField 
                            id='reqEmail' 
                            name="reqEmail"
                            label='Email' 
                            type='email' 
                            variant="outlined" 
                            fullWidth 
                            required 
                            value={values.reqEmail}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid display="flex" justifyContent="center" alignItems="center" size={12}>
                        <TextField 
                            id='subject' 
                            name="subject"
                            label='Subject' 
                            variant="outlined" 
                            fullWidth 
                            required 
                            value={values.subject}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid display="flex" justifyContent="center" alignItems="center" size={12}>
                        <TextField 
                            id='message' 
                            name="message"
                            label='Message' 
                            multiline 
                            rows={8} 
                            variant="outlined" 
                            fullWidth 
                            required 
                            value={values.message}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid display="flex" justifyContent="center" alignItems="center" size={12}>
                        <FormGroup>
                            <FormControlLabel 
                                control={
                                    <Switch
                                    id="ccEmail"
                                        checked={values.checked}
                                        onChange={handleSwitchChange}
                                        color='warning'
                                        inputProps={{ 'aria-label': 'controlled' }}
                                    />
                                } 
                                label="Would you like to be cc'd on this email?" 
                            />
                        </FormGroup>
                    </Grid>
                    <Grid display="flex" justifyContent="center" alignItems="center" size={12}>
                        <Button 
                            disabled={!values.fName || !values.lName || !values.phone || !values.reqEmail || !values.subject || !values.message || isLoading} 
                            id="submitButton"
                            type='submit' 
                            variant='contained' 
                            color='warning' 
                            fullWidth
                        >
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
};

export default ContactForm;