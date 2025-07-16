import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <Container maxWidth="lg">
            <Box
                component={motion.div}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                sx={{ py: 8 }}
            >
                <Typography
                    variant="h1"
                    component={motion.h1}
                    sx={{
                        background: 'linear-gradient(45deg, #64ffda 30%, #00bcd4 90%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        mb: 2,
                    }}
                >
                    Hello, I'm
                </Typography>
                <Typography
                    variant="h2"
                    color="text.secondary"
                    sx={{ mb: 4 }}
                >
                    A Creative Developer
                </Typography>
                <Typography variant="body1" sx={{ maxWidth: '600px', mb: 4 }}>
                    I craft exceptional digital experiences with modern web technologies.
                    Welcome to my portfolio where I showcase my projects and skills.
                </Typography>
            </Box>
        </Container>
    );
};

export default Hero; 