'use client'
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import VideoCard from '../VideoCard'; // Import the VideoCard component
import SeatingLayout from '../SeatingLayout'; // Import the SeatingLayout component
import Sponsor from '../Sponsor';
import Artist from '../Artist';
import PhotosCard from '@/components/PhotosCard';
import AdvertiserCard from '@/components/AdvertiserCard';
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const navigationLinks = [
  { label: 'Photos', href: '#', data: 'Photos of our events and activities.' },
  { label: 'Videos', href: '#', data: 'Videos of our events and activities.' },
  { label: 'Sponsors', href: '#', data: 'Our sponsors who support us.' },
  { label: 'Advertisers', href: '#', data: 'Our advertisers who promote their products.' },
  { label: 'Artists', href: '#', data: 'Our artists who perform at our events.' },
  { label: 'Seating Layout', href: '#', data: 'Seating layout of our events.' },
  { label: 'Specification', href: '#', data: 'Specification of our events.' },
  { label: 'Contact Organizer', href: '#', data: 'Contact information of our organizers.' },
];

// Sample video data
const videoData = [
  {
    title: 'Event Highlights',
    description: 'Highlights from our recent event.',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', // Demo video URL
  },
  {
    title: 'Behind the Scenes',
    description: 'A look behind the scenes of our events.',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', // Demo video URL
  },
  {
    title: 'Interviews with Artists',
    description: 'Interviews with the artists who performed.',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', // Demo video URL
  },
];

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box
        sx={{
          borderColor: '#c11',
          border: '1px solid #c11',
          borderRadius: '4px',
        }}>
        <Tabs value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          indicatorColor="none"
        >
          {navigationLinks.map((link, index) => (
            <Tab key={index} label={link.label} {...a11yProps(index)} sx={{
              borderColor: '#c11',
              '&.Mui-selected': {
                backgroundColor: '#c11',
                color: 'white',
              },
            }} />
          ))}
        </Tabs>
      </Box>
      {navigationLinks.map((link, index) => (
        <CustomTabPanel key={index} value={value} index={index}>
          {link.label === 'Contact Organizer' ? (
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <h2>Contact Information</h2>
                <p><strong>Name:</strong> CICA Vancouver</p>
                <p><strong>Phone:</strong></p>
                <p>+92323456456</p>
                <p><strong>Organizer Email:</strong></p>
                <p>codegenio@gmail.com</p>
              </Grid>
              <Grid item xs={6}>
                <form onSubmit={handleSubmit}>
                  <TextField
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                    required
                  />
                  <TextField
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                    required
                  />
                  <TextField
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                    multiline
                    rows={4}
                    required
                  />
                  <Button type="submit"
                    variant="contained"
                    sx={{ backgroundColor: '#c11', '&:hover': { backgroundColor: '#a00' } }}
                  >
                    Send Message
                  </Button>
                </form>
              </Grid>
            </Grid>
          ) : link.label === 'Videos' ? (
            <Grid container spacing={2}>
              {videoData.map((video, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <VideoCard
                    title={video.title}
                    description={video.description}
                    videoUrl={video.videoUrl}
                  />
                </Grid>
              ))}
            </Grid>
          ) : link.label === 'Seating Layout' ? (
            <SeatingLayout /> // Render the SeatingLayout component
          ) : link.label === 'Specification' ? (
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <h2 style={{ color: '#c11' }}>Event Specification</h2>
              </Grid>
              <Grid item xs={4}>
                <p style={{ color: '#c11' }}><strong>Venue Name:</strong></p>
                <p>CICA Vancouver</p>
              </Grid>
              <Grid item xs={4}>
                <p style={{ color: '#c11' }}><strong>Category:</strong></p>
                <p>Music</p>
              </Grid>
              <Grid item xs={4}>
                <p style={{ color: '#c11' }}><strong>Sub Category:</strong></p>
                <p>Music</p>
              </Grid>
              <Grid item xs={4}>
                <p style={{ color: '#c11' }}><strong>Ethnicity:</strong></p>
                <p>American</p>
              </Grid>
              <Grid item xs={4}>
                <p style={{ color: '#c11' }}><strong>Capacity:</strong></p>
                <p>100</p>
              </Grid>
              <Grid item xs={4}>
                <p style={{ color: '#c11' }}><strong>Time:</strong></p>
                <p>05:00 PM - 06:00 PM</p>
              </Grid>
              <Grid item xs={4}>
                <p style={{ color: '#c11' }}><strong>Start Date:</strong></p>
                <p>2024-12-06</p>
              </Grid>
              <Grid item xs={4}>
                <p style={{ color: '#c11' }}><strong>End Date:</strong></p>
                <p>2024-12-06</p>
              </Grid>
              <Grid item xs={4}>
                <p style={{ color: '#c11' }}><strong>Address:</strong></p>
                <p>228 Abbott Street Vancouver, BC V6B 1C8 Canada</p>
              </Grid>
            </Grid>
          ) : link.label === 'Sponsors' ? (
            <Sponsor />) : link.label === 'Artists' ? (<Artist />) : link.label === 'Photos' ? (<PhotosCard />) : link.label === 'Advertisers' ? (<AdvertiserCard />) : 
              (
                <>
                  <h2>{link.label}</h2>
                  <p>{link.data}</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
                </>
              )}
        </CustomTabPanel>
      ))}
    </Box>
  );
}