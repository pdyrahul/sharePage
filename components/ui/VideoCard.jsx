import React from 'react';
import { Box } from '@mui/material';

const VideoCard = ({ videoUrl }) => {
  const getCleanEmbedUrl = (url) => {
    const regex = /(?:youtube\.com\/embed\/|youtube\.com.*(?:\?|&)v=|youtu\.be\/)([^&]+)/;
    const match = url.match(regex);
    return match ? `https://www.youtube.com/embed/${match[1]}` : null;
  };

  const embedUrl = getCleanEmbedUrl(videoUrl);

  if (!embedUrl) {
    return <p>Invalid or Restricted YouTube URL</p>;
  }

  return (
    <Box
      sx={{
        position: 'relative',
        height: 400,
        overflow: 'hidden',
      }}
    >
      <iframe
        src={embedUrl}
        title="YouTube Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '500px',
          borderRadius:'10px',
        }}
      ></iframe>
    </Box>
  );
};

export default VideoCard;
