import React from 'react'; 
import { Box, Grid, ImageList, ImageListItem } from '@mui/material'; 
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'; // Effect for progressive loading

const PhotosCard = ({ data }) => { 
    if (!data || !data.gallery) {
        console.error("Data is not structured properly");
        return null;
    }
    const photos = data.gallery.map((image, index) => ({
        id: `${data.id}-${index}`,
        image: image.image_url || '/images/event-placeholder.svg'
    }));
    return ( 
        <Box className="photos-wrapper"> 
            <ImageList cols={4} gap={15} sx={{ width: '100%', }}>
                {photos.map((photo) => ( 
                    <ImageListItem key={photo.id} data-bs-toggle="modal" data-bs-target="#view-image" sx={{ position: 'relative', width: '100%', paddingBottom: '100%' }}>
                        <Box
                            sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                               
                            }}
                        >
                            <LazyLoadImage
                                src={photo.image}
                                alt={`Photo ${photo.id}`}
                                effect="blur"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    borderRadius: '10px',
                                }}
                            />
                        </Box>
                    </ImageListItem> 
                ))} 
            </ImageList> 
        </Box> 
    ); 
}; 

export default PhotosCard;
