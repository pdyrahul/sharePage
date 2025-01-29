"use client";
import React, { useMemo } from 'react';
import useFetchData from 'app/hooks/useFetchData';
import { getCategory } from 'app/services/api';
import { Card, CardContent, Typography, Grid } from '@mui/material';

function CategoryDetailPage({slug}) {
    const apiRequests = useMemo(() => {
        return [getCategory]; // Assuming getCategory doesn't require any arguments
    }, []);

    const { data, isLoading, error } = useFetchData(apiRequests);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    console.log("category", data);

    // Here, we're checking if 'data' exists and if it has at least one item, 
    // then we look inside that item for 'data'
    return (
        <div>
            <h1>{slug}</h1>
            {data && data.length > 0 && data[0].data && data[0].data.length > 0 ? (
                <Grid container spacing={2}>
                    {data[0].data.map((category) => (
                        <Grid item xs={12} sm={6} md={4} key={category.idspevent}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        {category.speventTitle}
                                    </Typography>
                                    <Typography color="text.secondary">
                                        ID: {category.idspevent}
                                    </Typography>
                                    <Typography variant="body2">
                                        <a href={category.image_url} target="_blank" rel="noopener noreferrer">
                                            View Image
                                        </a>
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            ) : (
                <p>No category data available.</p>
            )}
        </div>
    );
}

export default CategoryDetailPage;