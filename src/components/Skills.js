import React from 'react';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const skillCategories = [
    {
        title: 'Frontend',
        skills: ['React', 'TypeScript', 'Next.js', 'Material-UI', 'Tailwind CSS', 'HTML5/CSS3'],
    },
    {
        title: 'Backend',
        skills: ['Node.js', 'Express', 'Python', 'Django', 'RESTful APIs', 'GraphQL'],
    },
    {
        title: 'Tools & Others',
        skills: ['Git', 'Docker', 'AWS', 'Firebase', 'Jest', 'Webpack'],
    },
];

const Skills = () => {
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
                    Skills & Technologies
                </Typography>
                <Grid container spacing={4}>
                    {skillCategories.map((category, index) => (
                        <Grid item xs={12} md={4} key={index}>
                            <Paper
                                component={motion.div}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                sx={{
                                    p: 3,
                                    height: '100%',
                                    bgcolor: 'background.default',
                                    border: '1px solid',
                                    borderColor: 'primary.main',
                                    borderRadius: 4,
                                    '&:hover': {
                                        transform: 'translateY(-8px)',
                                        transition: 'transform 0.3s ease-in-out',
                                    },
                                }}
                            >
                                <Typography
                                    variant="h5"
                                    component="h3"
                                    sx={{
                                        mb: 3,
                                        color: 'primary.main',
                                        textAlign: 'center',
                                    }}
                                >
                                    {category.title}
                                </Typography>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        gap: 1,
                                        justifyContent: 'center',
                                    }}
                                >
                                    {category.skills.map((skill, i) => (
                                        <Typography
                                            key={i}
                                            variant="body2"
                                            sx={{
                                                color: 'text.primary',
                                                border: '1px solid',
                                                borderColor: 'text.secondary',
                                                borderRadius: 2,
                                                px: 2,
                                                py: 1,
                                                '&:hover': {
                                                    borderColor: 'primary.main',
                                                    color: 'primary.main',
                                                },
                                            }}
                                        >
                                            {skill}
                                        </Typography>
                                    ))}
                                </Box>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Skills; 