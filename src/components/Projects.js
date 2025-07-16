import React from 'react';
import { Box, Container, Grid, Card, CardContent, CardMedia, Typography, Link, IconButton } from '@mui/material';
import { GitHub, Launch } from '@mui/icons-material';
import { motion } from 'framer-motion';

const projects = [
    {
        title: 'Project 1',
        description: 'A modern web application built with React and Material-UI',
        image: 'https://source.unsplash.com/random/400x300?tech',
        technologies: ['React', 'Material-UI', 'Node.js'],
        github: 'https://github.com',
        live: 'https://example.com',
    },
    {
        title: 'Project 2',
        description: 'Mobile-first responsive design with modern animations',
        image: 'https://source.unsplash.com/random/400x300?coding',
        technologies: ['React Native', 'Firebase', 'Framer Motion'],
        github: 'https://github.com',
        live: 'https://example.com',
    },
    // Add more projects as needed
];

const Projects = () => {
    return (
        <Box component="section" sx={{ py: 8 }}>
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
                    Featured Projects
                </Typography>
                <Grid container spacing={4}>
                    {projects.map((project, index) => (
                        <Grid item xs={12} md={6} key={index}>
                            <Card
                                component={motion.div}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                sx={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    bgcolor: 'background.paper',
                                    borderRadius: 4,
                                    overflow: 'hidden',
                                    '&:hover': {
                                        transform: 'translateY(-8px)',
                                        transition: 'transform 0.3s ease-in-out',
                                    },
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={project.image}
                                    alt={project.title}
                                    sx={{
                                        borderTopLeftRadius: 16,
                                        borderTopRightRadius: 16,
                                    }}
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography variant="h5" component="h3" gutterBottom>
                                        {project.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" paragraph>
                                        {project.description}
                                    </Typography>
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                                        {project.technologies.map((tech, i) => (
                                            <Typography
                                                key={i}
                                                variant="caption"
                                                sx={{
                                                    color: 'primary.main',
                                                    border: '1px solid',
                                                    borderColor: 'primary.main',
                                                    borderRadius: 1,
                                                    px: 1,
                                                    py: 0.5,
                                                }}
                                            >
                                                {tech}
                                            </Typography>
                                        ))}
                                    </Box>
                                    <Box sx={{ display: 'flex', gap: 1 }}>
                                        <IconButton
                                            component={Link}
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            size="small"
                                            sx={{ color: 'text.primary' }}
                                        >
                                            <GitHub />
                                        </IconButton>
                                        <IconButton
                                            component={Link}
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            size="small"
                                            sx={{ color: 'text.primary' }}
                                        >
                                            <Launch />
                                        </IconButton>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Projects; 