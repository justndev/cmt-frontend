'use client';

import React from 'react';
import withPublicRoute from '@/utils/WithPublicRoute';
import {Container, TextField, Button, Typography, Box, ThemeProvider} from '@mui/material';
import {lightTheme} from "@/hooks/theme";


function ContactsPage() {
    return (
        <ThemeProvider theme={lightTheme}>

            <Container maxWidth="sm" sx={{mt: 8}}>
                <Typography variant="h4" component="h1" align="center" gutterBottom>
                    Contact Us
                </Typography>
                <Box component="form" noValidate autoComplete="off"
                     sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
                    <TextField
                        id="name"
                        label="Name"
                        variant="outlined"
                        fullWidth
                    />
                    <TextField
                        id="email"
                        label="Email"
                        type="email"
                        variant="outlined"
                        fullWidth
                    />
                    <TextField
                        id="message"
                        label="Message"
                        multiline
                        rows={4}
                        variant="outlined"
                        fullWidth
                    />
                    <Button variant="contained" color="primary" fullWidth>
                        Send Message
                    </Button>
                </Box>
            </Container>
        </ThemeProvider>

    );
}

export default withPublicRoute(ContactsPage);
