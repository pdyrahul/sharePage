import React from 'react';
import Photo from '../public/images/photo.svg';
import Image from 'next/image';
import { Box, Grid, ImageList, ImageListItem } from '@mui/material';

const PhotosCard = () => {
    return (
        <Box className="photos-wrapper">
            <ImageList cols={4} gap={15} >
                {Array.from({ length: 4 }).map((_, index) => (
                    <ImageListItem key={index} data-bs-toggle="modal" data-bs-target="#view-image" >
                        <Image src={Photo} alt={`Photo ${index + 1}`} layout="responsive" />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    );
};

export default PhotosCard;