import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { motion } from 'framer-motion';

const experiences = [
    {
        title: 'Junior Developer',
        company: 'Flutter Solutions Inc.',
        period: '2024 - 2025',
        description: 'Developing cross-platform mobile applications using Flutter and Dart. Working on UI implementation, state management with Provider/Riverpod, and Firebase integration for backend services.',
    },
    {
        title: 'Mobile Developer',
        company: 'personal development',
        period: '2023 - 2024',
        description: 'Developed and released two mobile applications using Flutter and Firebase: a workout tracking app and a TODO management app. Gained hands-on experience with mobile app development from concept to deployment.',
    },
    {
        title: 'System Engineer',
        company: 'IT Solutions Company',
        period: '2022 - 2023',
        description: 'Started as a system engineer focusing on internal development projects. Successfully developed and released in-house applications using C# and Java. Expanded skills into modern web development with React and Next.js through various internal projects. Gained practical experience in the complete development cycle from planning to release.',
    },
];

const education = [
    {
        degree: 'Master of Computer Science',
        school: 'University Name',
        period: '2016 - 2018',
        description: 'Focused on web technologies and software engineering principles.',
    },
    {
        degree: 'Bachelor of Computer Science',
        school: 'University Name',
        period: '2012 - 2016',
        description: 'Studied computer science fundamentals and programming.',
    },
];

const Experience = () => {
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
                    Experience & Education
                </Typography>

                <Box sx={{ mb: 8 }}>
                    <Typography
                        variant="h4"
                        sx={{ mb: 4, color: 'primary.main' }}
                    >
                        Work Experience
                    </Typography>
                    <Timeline position="alternate">
                        {experiences.map((exp, index) => (
                            <TimelineItem key={index}>
                                <TimelineSeparator>
                                    <TimelineDot sx={{ bgcolor: 'primary.main' }} />
                                    <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Box
                                        component={motion.div}
                                        initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.2 }}
                                        sx={{
                                            p: 2,
                                            bgcolor: 'background.paper',
                                            borderRadius: 3,
                                            boxShadow: 1,
                                        }}
                                    >
                                        <Typography variant="h6" component="h3">
                                            {exp.title}
                                        </Typography>
                                        <Typography color="primary.main" gutterBottom>
                                            {exp.company}
                                        </Typography>
                                        <Typography variant="caption" color="text.secondary" display="block" gutterBottom>
                                            {exp.period}
                                        </Typography>
                                        <Typography variant="body2">
                                            {exp.description}
                                        </Typography>
                                    </Box>
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </Timeline>
                </Box>

                <Box>
                    <Typography
                        variant="h4"
                        sx={{ mb: 4, color: 'primary.main' }}
                    >
                        Education
                    </Typography>
                    <Timeline position="alternate">
                        {education.map((edu, index) => (
                            <TimelineItem key={index}>
                                <TimelineSeparator>
                                    <TimelineDot sx={{ bgcolor: 'primary.main' }} />
                                    <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Box
                                        component={motion.div}
                                        initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.2 }}
                                        sx={{
                                            p: 2,
                                            bgcolor: 'background.paper',
                                            borderRadius: 3,
                                            boxShadow: 1,
                                        }}
                                    >
                                        <Typography variant="h6" component="h3">
                                            {edu.degree}
                                        </Typography>
                                        <Typography color="primary.main" gutterBottom>
                                            {edu.school}
                                        </Typography>
                                        <Typography variant="caption" color="text.secondary" display="block" gutterBottom>
                                            {edu.period}
                                        </Typography>
                                        <Typography variant="body2">
                                            {edu.description}
                                        </Typography>
                                    </Box>
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </Timeline>
                </Box>
            </Container>
        </Box>
    );
};

export default Experience; 