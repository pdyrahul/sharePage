"use client";
import React, { useMemo, useState, use } from 'react';
import useFetchData from 'app/hooks/useFetchData';
import { getSmilarEvent } from 'app/services/api';
import { Box, Skeleton, Typography, Card, CardContent } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const SimilarEvent = ({ params }) => {
    const { id } = use(params);
    const apiRequests = useMemo(() => [
        () => getSmilarEvent(id)
    ], [id]);
    const { data, isLoading, error } = useFetchData(apiRequests);

    // Loading state: Show skeleton
    if (isLoading) {
        return (
            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', gap: '5px' }}>
                {[...Array(4)].map((_, index) => (
                    <Skeleton key={index} variant="rectangular" width={275} height={200} sx={{ marginBottom: 2 }} />
                ))}
            </Box>
        );
    }

    // Error state
    if (error) return <div>Error: {error.message}</div>;

    // No data state
    if (!data || !data[0] || !data[0].data) return <div>No data available</div>;

    const events = data[0].data.data || [];

    return (
        <Box sx={{ mt: 2, padding:'10px 0' }}>
            <Swiper
                modules={[Navigation]}
                spaceBetween={16}
                slidesPerView={1}
                navigation={true}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                }}
                className="mySwiper"
            >
                {events.map((event, index) => (
                    <SwiperSlide key={event.id || index}>
                        <Box sx={{marginBottom: 2 }}>
                            <Card sx={{ minWidth: 275, height: '100%' }}>
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        {event.title || 'Event Title'}
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                        ID: {event.id}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Profile ID: {event.profile_id || 'N/A'}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Category: {event.category?.speventTitle || 'No Category'}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
};

export default SimilarEvent;