"use client";
import React, { useMemo, useState, use } from 'react';
import useFetchData from 'app/hooks/useFetchData';
import { getCategoryWise } from 'app/services/api';
import { Box, Button, Card, CardContent, Typography, Grid, Skeleton } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const CategoryDetails = ({ params }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 2;
    const { id } = use(params);
    const apiRequests = useMemo(() => [
        () => getCategoryWise(id, currentPage)
    ], [id, currentPage]);
    const { data, isLoading, error } = useFetchData(apiRequests);
    if (isLoading) {
        return (
            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', gap: '5px' }}>
                {[...Array(4)].map((_, index) => (
                    <Skeleton key={index} variant="rectangular" width={275} height={200} sx={{ marginBottom: 2 }} />
                ))}
            </Box>
        );
    }
    if (error) return <div>Error: {error.message}</div>;
    if (!data || !data[0] || !data[0].data) return <div>No data available</div>;

    const events = data[0].data|| [];
    const paginationInfo = data[0].data;
console.log("Events",events);
    // if (events.length === 0) {
    //     return <div>Data Coming Soon</div>;
    // }

    const handleNextPage = () => {
        if (paginationInfo.current_page < paginationInfo.last_page) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <>
            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', gap: '16px' }}>
                {events.map((event, index) => {
                    const imageUrl = event?.poster; // Fallback image if no poster available
                    return (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={event.id || index}>
                            <Link href={`/events/${event.slug}`} style={{ textDecoration: "none" }}>
                                <Card sx={{ width: "300px", borderColor: 'transparent', boxShadow: 'none', border: '1px solid #ececec' }}>
                                    <CardContent sx={{ padding: 0 }}>
                                        <div className="img-wrapper" style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', overflow: 'hidden' }}>
                                            <Image
                                                src={imageUrl}
                                                alt={event.title || 'Event Image'}
                                                layout="fill"
                                                objectFit="cover"
                                                style={{ zIndex: 1 }}
                                            />
                                        </div>
                                        <div className="title" style={{ padding: '10px', fontWeight: 'bold', fontSize:'1.5em' }}>
                                            {event.eventTitle || 'Event Title'}
                                        </div>
                                        <div className="date" style={{ padding: '0 10px', fontSize: '1.3em', color:'#c11'}}>
                                            {event.startDate || 'Date not available'}
                                            <span style={{ margin:'5px', fontSize: '0.8em', color:'#7649B3', fontWeight:'700' }}>{event.startTime || 'Time not available'}</span>
                                        </div>
                                        <div className="hosted" style={{ padding: '0 10px', fontSize: '1.1em',color:'#7649B3', }}>
                                            Hosted by <span style={{color:'#000', fontSize: '0.8em', textDecoration:'underline'}}>{event.sponsor?.sponsorName || 'Unknown Host'}</span>
                                        </div>
                                        <div className="location" style={{ padding: '0 10px', display: 'flex', alignItems: 'center', fontSize: '0.9em' }}>
                                            <Image src="/images/location.svg" alt="Location Icon" width={16} height={16} />
                                            <span style={{ marginLeft: '5px' }}>{event.address || 'Location not available'}</span>
                                        </div>
                                        <div className="from" style={{ padding: '10px', fontWeight: 'bold' }}>
                                            From ${event.price || '0'}
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        </Grid>
                    );
                })}
            </Box>

            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
                <Button
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                    sx={{ mr: 1 }}
                >
                    Previous
                </Button>
                <Button
                    onClick={handleNextPage}
                    disabled={currentPage === paginationInfo.last_page}
                >
                    Next
                </Button>
            </Box>
        </>
    );
};

export default CategoryDetails;