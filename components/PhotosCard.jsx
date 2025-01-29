import React, { useState } from 'react';
import { Box, Grid, ImageList, ImageListItem, Modal, Button } from '@mui/material';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'; // Effect for progressive loading
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const PhotosCard = ({ data }) => {
    if (!data || !data.gallery) {
        console.error("Data is not structured properly");
        return null;
    }

    const [open, setOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);

    const photos = data.gallery.map((image, index) => ({
        id: `${data.id}-${index}`,
        image: image.image_url || '/images/event-placeholder.svg'
    }));

    const handleOpen = (index) => {
        setCurrentImage(index);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleNext = () => {
        setCurrentImage((prev) => (prev + 1) % photos.length);
    };

    const handlePrev = () => {
        setCurrentImage((prev) => (prev - 1 + photos.length) % photos.length);
    };

    return (
        <Box className="photos-wrapper" sx={{ cursor: "pointer" }}>
            <ImageList cols={4} gap={15} sx={{ width: '100%' }}>
                {photos.map((photo, index) => (
                    <ImageListItem
                        key={photo.id}
                        onClick={() => handleOpen(index)}
                        sx={{ position: 'relative', width: '100%', paddingBottom: '80%' }}
                    >
                        <Box sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                        }}>
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

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Box sx={{
                    position: 'relative',
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                    maxWidth: '90vw',
                    maxHeight: '90vh',
                }}>
                    <LazyLoadImage
                        src={photos[currentImage].image}
                        alt={`Photo ${photos[currentImage].id}`}
                        effect="blur"
                        style={{
                            maxWidth: '100%',
                            maxHeight: '80vh',
                            objectFit: 'contain',
                        }}
                    />
                    <Button
                        onClick={handlePrev}
                        style={{
                            position: 'absolute',
                            left: 0,
                            top: '50%',
                            transform: 'translateY(-50%)',
                            backgroundColor: '#c11',
                            color: '#fff',
                            borderRadius: '50%',
                            minWidth: '40px',
                            height: '40px'
                        }}
                    >
                        <NavigateBeforeIcon />
                    </Button>
                    <Button
                        onClick={handleNext}
                        style={{
                            position: 'absolute',
                            right: 0,
                            top: '50%',
                            transform: 'translateY(-50%)',
                            backgroundColor: '#c11',
                            color: '#fff',
                            borderRadius: '50%',
                            minWidth: '40px',
                            height: '40px'
                        }}
                    >
                        <NavigateNextIcon />
                    </Button>
                </Box>
            </Modal>
        </Box>
    );
};

export default PhotosCard;