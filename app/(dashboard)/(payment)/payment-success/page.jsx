"use client"
import React, { useEffect, useState, useRef } from 'react';
import { Container, Box, Paper, Typography } from '@mui/material';
import { CheckCircleOutline } from '@mui/icons-material';
import { styled, keyframes } from '@mui/system';
import Confetti from 'react-confetti';

// Custom keyframes for the animation
const bounceAnimation = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-30px); }
  60% { transform: translateY(-15px); }
`;

// Custom styled component for the animated icon
const AnimatedIcon = styled(CheckCircleOutline)({
  fontSize: '8rem',
  color: 'green',
  animation: `${bounceAnimation} 1s ease-in-out infinite`,
});

export default function Page({ params }) {
    const { amount } = params;
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const confettiContainer = useRef(null);

    useEffect(() => {
        if (confettiContainer.current) {
            setWidth(confettiContainer.current.offsetWidth);
            setHeight(confettiContainer.current.offsetHeight);
        }

        const handleResize = () => {
            if (confettiContainer.current) {
                setWidth(confettiContainer.current.offsetWidth);
                setHeight(confettiContainer.current.offsetHeight);
            }
        };
        
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Container maxWidth="sm">
            <Box 
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent:"center",
                    position: 'relative',
                }}
            >
                <Paper 
                    elevation={6} 
                    ref={confettiContainer}
                    sx={{ 
                        padding: 6, 
                        width: '100%', 
                        textAlign: 'center',
                        backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#1A2027' : '#FFFFFF',
                        borderRadius: 3,
                        position: 'relative',
                        overflow: 'hidden',
                    }}
                >
                    <AnimatedIcon />
                    <Typography variant="h4" gutterBottom>
                        Payment Successful!
                    </Typography>
                    <Typography variant="body1" color="text.secondary" gutterBottom>
                        Thank you for your payment!
                    </Typography>
                    {amount && (
                        <Typography 
                            variant="h5" 
                            sx={{
                                color: 'primary.main',
                                fontWeight: 'bold',
                                marginTop: 2,
                                padding: 2,
                                border: '3px solid',
                                borderColor: 'primary.main',
                                borderRadius: 2,
                                backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#272C34' : '#E7E7E7',
                            }}
                        >
                            $ {amount}
                        </Typography>
                    )}
                    <Confetti 
                        width={width}
                        height={height}
                    />
                </Paper>
            </Box>
        </Container>
    );
}