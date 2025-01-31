"use client";
import React, { useMemo, useState, use } from 'react';
import useFetchData from 'app/hooks/useFetchData';
import { getCategoryWise } from 'app/services/api';
import { Box, Button, Card, CardContent, Typography, Grid } from '@mui/material';
const SimilarEvent = ({ params }) => {
    const { id } = use(params);
    const apiRequests = useMemo(() => [
        () => getCategoryWise(id)
    ], [id]);
    const { data, isLoading, error } = useFetchData(apiRequests);
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!data || !data[0] || !data[0].data) return <div>No data available</div>;
    const events = data[0].data.data || []; 

    return (
        <>
            <Box sx={{ mt: 2, display: 'flex', justifyContent:'space-evenly',flexWrap:'wrap' }}>
                {events.map((event, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={2} key={event.id || index}>
                        <Card sx={{ minWidth: 275, marginBottom: 2 }}>
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
                                    Category: {event.category.speventTitle || 'No Category'}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Box>
        </>
    );
};

export default SimilarEvent;