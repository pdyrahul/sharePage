"use client";
import React, { useMemo, createContext, useContext } from "react";

import useFetchData from "../../../app/hooks/useFetchData";
import { getEventList } from "../../../app/services/api";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Card, CardContent, CardMedia, Typography, Box, useTheme } from '@mui/material';
import { CiLocationOn } from "react-icons/ci";
import Link from "next/link";

// Theme Context
const ThemeContext = createContext();

function ThemeProvider({ children }) {
    const theme = useTheme();
    const toggleTheme = () => {
        theme.palette.mode = theme.palette.mode === 'light' ? 'dark' : 'light';
        // This is a simplified version. In a real application, you'd probably update the theme in a more sophisticated way.
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

const Event = () => {
    const apiRequests = useMemo(() => [getEventList], []);
    const { data, isLoading, error } = useFetchData(apiRequests);
    const { theme } = useContext(ThemeContext);

    const events = data?.[0]?.data?.map((event) => ({
        id: event.id || 'N/A',
        slug: event.slug || 'default-slug',  // Assuming 'slug' is available in the API response
        title: event.eventTitle || 'Untitled Event',
        date: event.startDate ? new Date(event.startDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).replace(/ /g, '-') : 'Date not available',
        time: event.startTime ? new Date(`1970-01-01T${event.startTime}`).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }) : 'Time not available',
        hostedBy: event.sponsor?.sponsorName || 'Unknown Host',
        location: event.address || 'Location not available',
        price: `$${event.sponsor?.sponsorPrice || 0}`,
        ticketsSold: event.capacity || 'Not Available',
        image: event.poster || '/images/event-placeholder.svg',
    })) || [];

    if (isLoading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '16px' }}>
                {[...Array(6)].map((_, index) => (
                    <Box
                        key={index}
                        sx={{
                            width: '100%',
                            height: 300,
                            bgcolor: theme.palette.background.default,
                            border: `2px solid ${theme.palette.divider}`,
                            borderRadius: 2,
                        }}
                    />
                ))}
            </Box>
        );
    }

    if (error) {
        return <Typography variant="h6" color="error">Failed to load events.</Typography>;
    }

    // Determine border color based on theme mode
    const borderColor = theme.palette.mode === 'light' ? '#e0e0e0' : '#303030';

    return (
        <Box className="event-wrapper" sx={{ position: 'relative', paddingTop: '40px', background:"#f2f2f240" }}>
            <Box sx={{ position: 'absolute', top: "-10%", right: "5%", display: 'flex', }}>
                <Box
                    className="swiper-button-prev"
                    sx={{
                        color: '#c11 !important',
                        opacity: 0.8,
                        marginRight: '10px',
                        fontSize: '12px' // Making the icons smaller
                    }}
                />
                <Box
                    className="swiper-button-next"
                    sx={{
                        color: '#c11 !important',
                        opacity: 0.8,
                        fontSize: '12px' // Making the icons smaller
                    }}
                />
            </Box>
            <Swiper
                modules={[Navigation]}
                spaceBetween={16}
                slidesPerView={1}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                breakpoints={{
                    1024: {
                        slidesPerView: 4,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                }}
                className="mySwiper"
            >
                {events.length > 0 ? events.map((event, index) => (
                    <SwiperSlide key={index}>
                        <Link href={`/events/${event.slug}`} style={{ textDecoration: "none" }}>
                            <Card sx={{
                                maxWidth: 345,
                                minHeight: 400,
                                boxShadow: theme.shadows[3],
                                cursor: 'pointer',
                            }}>
                                <CardMedia
                                    component="img"
                                    height="180"
                                    image={event.image}
                                    alt={event.title}
                                    sx={{
                                        transition: 'transform 0.3s ease-in-out',
                                        '&:hover': {
                                            transform: 'scale(1.05)',
                                        },
                                    }}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" color={theme.palette.primary.main}>
                                        {event.title}
                                    </Typography>
                                    <Typography variant="body2" color={theme.palette.text.secondary}>
                                        <strong style={{color:"#c11", fontSize:"18px"}}> {event.date} </strong>
                                        <strong style={{color:"#7649B3"}}>started at {event.time}</strong> <br />
                                        <strong>Hosted by:</strong> {event.hostedBy} <br />
                                        <strong><CiLocationOn style={{color:"#c11", fontSize:"21px"}}/></strong> {event.location} <br />
                                        <strong>Price:</strong> {event.price} <br />
                                        <strong>Tickets Sold:</strong> {event.ticketsSold}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Link>
                    </SwiperSlide>
                )) : (
                    <SwiperSlide>
                        <Typography variant="h6" sx={{ textAlign: 'center', padding: '20px', color: theme.palette.text.primary }}>No events found.</Typography>
                    </SwiperSlide>
                )}
            </Swiper>
        </Box>
    );
};

export default function ThemedEvent() {
    return (
        <ThemeProvider>
            <Event />
        </ThemeProvider>
    );
}