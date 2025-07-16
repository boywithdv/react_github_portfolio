import React, { useState } from 'react';
import {
    Box,
    Container,
    Typography,
    TextField,
    Button,
    Grid,
    IconButton,
    Snackbar,
} from '@mui/material';
import {
    GitHub,
    LinkedIn,
    Twitter,
    Email,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const socialLinks = [
    {
        icon: <GitHub />,
        url: 'https://github.com',
        label: 'GitHub',
    },
    {
        icon: <LinkedIn />,
        url: 'https://linkedin.com',
        label: 'LinkedIn',
    },
    {
        icon: <Twitter />,
        url: 'https://twitter.com',
        label: 'Twitter',
    },
];

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle the form submission
        // For now, we'll just show a success message
        setSnackbar({
            open: true,
            message: 'Message sent successfully!',
        });
        setFormData({
            name: '',
            email: '',
            message: '',
        });
    };

    const handleCloseSnackbar = () => {
        setSnackbar({ ...snackbar, open: false });
    };

    return (
        <Box component="section" sx={{ py: 8, bgcolor: 'background.paper' }}>
            <Container maxWidth="lg">
                <Typography
                    variant="h2"
                    component={motion.h2}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    sx={{
                        mb: 6,
                        textAlign: 'center',
                        background: 'linear-gradient(45deg, #64ffda 30%, #00bcd4 90%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}
                >
                    Get In Touch
                </Typography>

                <Grid container spacing={6}>
                    <Grid item xs={12} md={6}>
                        <Box
                            component={motion.form}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            onSubmit={handleSubmit}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 3,
                            }}
                        >
                            <TextField
                                name="name"
                                label="Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                fullWidth
                                variant="outlined"
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: 'text.secondary',
                                            borderRadius: 3,
                                        },
                                        '&:hover fieldset': {
                                            borderColor: 'primary.main',
                                        },
                                    },
                                }}
                            />
                            <TextField
                                name="email"
                                label="Email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                fullWidth
                                variant="outlined"
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: 'text.secondary',
                                            borderRadius: 3,
                                        },
                                        '&:hover fieldset': {
                                            borderColor: 'primary.main',
                                        },
                                    },
                                }}
                            />
                            <TextField
                                name="message"
                                label="Message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                fullWidth
                                multiline
                                rows={4}
                                variant="outlined"
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: 'text.secondary',
                                            borderRadius: 3,
                                        },
                                        '&:hover fieldset': {
                                            borderColor: 'primary.main',
                                        },
                                    },
                                }}
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                size="large"
                                sx={{
                                    bgcolor: 'primary.main',
                                    color: 'background.default',
                                    borderRadius: 3,
                                    '&:hover': {
                                        bgcolor: 'primary.dark',
                                    },
                                }}
                            >
                                Send Message
                            </Button>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Box
                            component={motion.div}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            sx={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: 4,
                            }}
                        >
                            <Typography variant="h5" sx={{ color: 'text.primary' }}>
                                Let's connect
                            </Typography>
                            <Box sx={{ display: 'flex', gap: 2 }}>
                                {socialLinks.map((social, index) => (
                                    <IconButton
                                        key={index}
                                        component="a"
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.label}
                                        sx={{
                                            color: 'text.primary',
                                            '&:hover': {
                                                color: 'primary.main',
                                            },
                                        }}
                                    >
                                        {social.icon}
                                    </IconButton>
                                ))}
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1,
                                    color: 'text.secondary',
                                }}
                            >
                                <Email />
                                <Typography>contact@example.com</Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

                <Snackbar
                    open={snackbar.open}
                    autoHideDuration={6000}
                    onClose={handleCloseSnackbar}
                    message={snackbar.message}
                />
            </Container>
        </Box>
    );
};

export default Contact; 