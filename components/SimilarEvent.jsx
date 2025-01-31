"use client";
import React, { useMemo, useState, useEffect,use } from 'react';
import useFetchData from 'app/hooks/useFetchData';
import { getSmilarEvent } from 'app/services/api';
import { Box, Skeleton, Typography, Card, CardContent } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Link from 'next/link';
import Image from 'next/image';
import {useProfile} from '../Context/ProfileContext';

const SimilarEvent = ({ params }) => {
    const { id } = use(params); // Assuming 'use(params)' is a custom hook. If not, adjust this.
    const apiRequests = useMemo(() => [
        () => getSmilarEvent(id)
    ], [id]);
    const { data, isLoading, error } = useFetchData(apiRequests);
    
    const { setProfile } = useProfile(); // Only get setProfile from context now
    const [localProfile, setLocalProfile] = useState(null); // Local state to hold profile

    useEffect(() => {
        const storedProfile = sessionStorage.getItem("selectedProfile");
        if (storedProfile) {
          setLocalProfile(JSON.parse(storedProfile));
        }
        console.log("Local Profile:", localProfile);
    }, []); // Run once on mount

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
                    const imageUrl = event.poster?.path || 'https://picsum.photos/22';
                    return (
                        <SwiperSlide key={event.id || index}>
                            <Box className="event" sx={{ padding: 0 }}>
                                <Link href={`/events/${event.slug}`} style={{ textDecoration: "none" }}>
                                    <Card sx={{ minWidth: 275, height: '100%', borderColor: 'transparent', boxShadow: 'none', border: '2px solid #ececec' }}>
                                        <CardContent sx={{ padding: 0 }}>
                                            <div className="img-wrapper" style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', overflow: 'hidden' }}>
                                                <Image
                                                    src={imageUrl}
                                                    alt={event.title || 'Event Image'}
                                                    layout="fill"
                                                    objectFit="cover"
                                                    style={{ zIndex: 1 , padding:'10px'}}
                                                />
                                            </div>
                                            <div className="title" style={{fontSize:'1.5em', padding: '10px', fontWeight: 'bold' }}>
                                                {event.category?.speventTitle || 'Event Title'}
                                            </div>
                                            <div className="date" style={{ padding: '0 10px', fontSize: '1.3em', color:'#c11' }}>
                                                {event.start_date || 'Mar-16-2024'}
                                                <span style={{ margin:'5px', fontSize: '0.8em', color:'#7649B3', fontWeight:'700' }}>Started at {event.start_time || 'Started at 07 : 00 AM'}</span>
                                            </div>
                                            <div className="hosted" style={{ padding: '0 10px', fontSize: '1.1em',color:'#7649B3', }}>
                                                Hosted by <span style={{color:'#000', fontSize: '0.8em', textDecoration:'underline'}}>{localProfile?.spProfileName || 'Aneema Agarwal'}</span>
                                            </div>
                                            <div className="location" style={{ padding: '0 10px', display: 'flex', alignItems: 'center', fontSize: '0.9em' }}>
                                                <Image src="/images/location.svg" alt="Location Icon" width={16} height={16} />
                                                <span style={{ marginLeft: '5px' }}>{event.address || 'Rawalpindi, Pakistan'}</span>
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