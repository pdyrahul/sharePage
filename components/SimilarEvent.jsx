
import React, { useMemo, useState, useEffect, use } from 'react';
import useFetchData from 'app/hooks/useFetchData';
import { getSmilarEvent } from 'app/services/api';
import { Box, Skeleton, Typography, Card, CardContent } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Link from 'next/link';
import Image from 'next/image';

const SimilarEvent = ({ params }) => {
    const { id } = params;
    const apiRequests = useMemo(() => [() => getSmilarEvent(id)], [id]);
    const { data,  loading: isLoading, error } = useFetchData(apiRequests);
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
    const events = data[0].data || [];
console.log("Eventse",events)
    return (
        <Box sx={{ mt: 2 }}>
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
                {events.map((event, index) => {
                    const imageUrl = event.poster;
                    return (
                        <SwiperSlide key={event.id || index}>
                            <Box className="event" sx={{ padding: 0 }}>
                                <Link href={`/events/${event.slug}`} style={{ textDecoration: "none" }}>
                                    <Card sx={{ minWidth: 275, height: '100%', borderColor: 'transparent',  boxShadow: ' rgba(0, 0, 0, 0.16) 0px 1px 4px', aspectRatio:'3/4', '&:hover': {
                                                boxShadow: 'rgba(0, 0, 0, 0.24) 0px 8px 16px', // box-shadow on hover
                                                filter: 'none' // remove blur on hover
                                            }, }}>
                                        <CardContent sx={{ padding: 0 }}>
                                            <div className="img-wrapper" style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', overflow: 'hidden' }}>
                                                <Image
                                                    src={imageUrl}
                                                    alt={event.title || 'Event Image'}
                                                    layout="fill"
                                                    objectFit="cover"
                                                    style={{ zIndex: 1, padding: '10px' }}
                                                />
                                            </div>
                                            <div className="title" style={{ fontSize: '1.5em', padding: '10px', fontWeight: 'bold' }}>
                                                {event.slug || 'Event Title'}
                                            </div>
                                            <div className="date" style={{ padding: '0 10px', fontSize: '1.3em', color: '#c11' }}>
                                                {event.start_date || 'Mar-16-2024'}
                                                <span style={{ margin: '5px', fontSize: '0.8em', color: '#7649B3', fontWeight: '700' }}>Started at {event.startTime || 'Started at 07 : 00 AM'}</span>
                                            </div>
                                            <div className="hosted" style={{ padding: '0 10px', fontSize: '1.1em', color: '#7649B3', }}>
                                                Hosted by <span style={{ color: '#000', fontSize: '0.8em', textDecoration: 'underline' }}>{event?.sponsor?.sponsorName || 'Aneema Agarwal'}</span>
                                            </div>
                                            <div className="location" style={{ padding: '10px 5px', display: 'flex', alignItems: 'center', fontSize: '0.9em' }}>
                                                <Image src="/images/location.svg" alt="Location Icon" width={16} height={16} />
                                                <span style={{ marginLeft: '5px', lineHeight:'11px' }}>{event.address || 'Rawalpindi, Pakistan'}</span>
                                            </div>
                                            <div className="from" style={{ padding: '10px', fontWeight: 'bold' }}>
                                                For ${event.event_type || '109.5'}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </Box>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </Box>
    );
};

export default SimilarEvent;