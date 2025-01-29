// Loading.js
import React from 'react';
import { CircularProgress, Box } from '@mui/material';

export default function Loading() {
  return (
    <Box 
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        backgroundColor: 'background.default', // Assuming you've set a default background color in your theme
      }}
    >
      <CircularProgress />
    </Box>
  );
}