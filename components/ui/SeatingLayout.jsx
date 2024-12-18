// SeatingLayout.jsx
import React from 'react';
import { Box, Typography } from '@mui/material'; 
import seatImg from '../../public/images/seating.jpg'
import Image from 'next/image';
const SeatingLayout = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom>
        Seating Layout
      </Typography>
      <Typography variant="body1">
      
      </Typography>
      {/* Example of an image for seating layout */}
      <Image src={seatImg} alt="Seating Layout" style={{ width: '100%', height: '550px' }} />
    </Box>
  );
};

export default SeatingLayout;