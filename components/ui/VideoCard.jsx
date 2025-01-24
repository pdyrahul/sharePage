import React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import YouTube from 'react-youtube';

const VideoCard = ({ title, description, data }) => {
  // Extract the video ID from the YouTube URL
  const videoId = new URL(data.youTubeUrl).searchParams.get('v');

  const opts = {
    height: '350',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <Card>
      <div style={{ height: '350px', overflow: 'hidden' }}>
        {videoId ? (
          <YouTube videoId={"videoId"} opts={opts} />
        ) : (
          <div style={{ backgroundColor: 'lightgray', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <Typography variant="body2" color="text.secondary">Video not available</Typography>
          </div>
        )}
      </div>
     
    </Card>
  );
};

VideoCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  data: PropTypes.shape({
    youTubeUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default VideoCard;