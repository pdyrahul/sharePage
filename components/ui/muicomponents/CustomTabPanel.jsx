'use client'
import * as React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab, Box, TextField, Button, Grid } from '@mui/material';
import VideoCard from '../VideoCard'; // Import the VideoCard component
import SeatingLayout from '../SeatingLayout'; // Import the SeatingLayout component
import Sponsor from '../Sponsor';
import Artist from '../Artist';
import PhotosCard from '../../../components/PhotosCard';
import AdvertiserCard from '../../../components/PhotosCard';
import { ToastContainer, toast } from 'react-toastify';
import { useForm } from 'react-hook-form';

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

export default function BasicTabs({ data }) {
  const [value, setValue] = React.useState(0);
  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm();
  const formData = watch(); // Watch the form data
  console.log('event', data);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const onSubmit = (data) => {
    toast.success('Message sent successfully!', {
      style: { width: '300px', marginTop: '10px' },
    });
    console.log('Form submitted:', data);
    reset(); // Reset the form after submission
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
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
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
              <Grid item md={6} xs={12}>
                <h2>Contact Information</h2>
                <p><strong style={{ color: '#c11' }}>Name:</strong> CICA Vancouver</p>
                <p><strong style={{ color: '#c11' }}>Phone:</strong> <span>+92323456456</span></p>
                <p><strong style={{ color: '#c11' }}>Organizer Email:</strong>  <span>codegenio@gmail.com</span></p>
              </Grid>
              <Grid item md={6} xs={12}>

                {/*    form start here */}
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Grid container spacing={2}>
                    <Grid item md={6} xs={12}>
                      <TextField
                        label="Name"
                        {...register('name', { required: 'Name is required' })}
                        fullWidth
                        margin="normal"
                        error={!!errors.name}
                        helperText={
                          errors.name
                            ? <span style={{ color: '#c11' }}>{errors.name.message}</span>
                            : <span style={{ color: '#c11' }}>e.g., John Doe</span>
                        }
                        InputProps={{
                          style: { fontSize: '12px' }, // Set input font size
                          sx: {
                            '&:focus': {
                              borderColor: '#c11', // Change border color on focus
                              outline: 'none',
                            },
                          },
                        }}
                        InputLabelProps={{
                          style: { fontSize: '12px' }, // Set label font size
                        }}
                      />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <TextField
                        label="Email"
                        type="email"
                        {...register('email', {
                          required: 'Email is required',
                          pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: 'Invalid email address'
                          }
                        })}
                        fullWidth
                        margin="normal"
                        error={!!errors.email}
                        helperText={
                          errors.email
                            ? <span style={{ color: '#c11' }}>{errors.email.message}</span>
                            : <span style={{ color: '#c11' }}>e.g., example@mail.com</span>
                        }
                        InputProps={{
                          style: { fontSize: '12px' }, // Set input font size
                          sx: {
                            '&:focus': {
                              borderColor: '#c11', // Change border color on focus
                              outline: 'none',
                            },
                          },
                        }}
                        InputLabelProps={{
                          style: { fontSize: '12px' }, // Set label font size
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label="Message"
                        {...register('message', { required: 'Message is required' })}
                        fullWidth
                        margin="normal"
                        multiline
                        rows={4}
                        error={!!errors.message}
                        helperText={
                          errors.message
                            ? <span style={{ color: '#c11' }}>{errors.message.message}</span>
                            : <span style={{ color: '#c11' }}>e.g., Your message here</span>
                        }
                        InputProps={{
                          style: { fontSize: '12px' }, // Set input font size
                          sx: {
                            '&:focus': {
                              borderColor: '#c11', // Change border color on focus
                              outline: 'none',
                            },
                          },
                        }}
                        InputLabelProps={{
                          style: { fontSize: '12px' }, // Set label font size
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        disabled={!formData.name || !formData.email || !formData.message}
                        variant="contained"
                        sx={{ backgroundColor: '#c11', '&:hover': { backgroundColor: '#a00' } }}
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                  <ToastContainer />
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
            <Sponsor />
          ) : link.label === 'Artists' ? (
            <Artist />
          ) : link.label === 'Photos' ? (
            <PhotosCard data={data} />
          ) : link.label === 'Advertisers' ? (
            <AdvertiserCard />
          ) : (
            <>
              <h2>{link.label}</h2>
              <p>{link.data}</p>
              <p>No Data</p>
            </>
          )}
        </CustomTabPanel>
      ))}
    </Box>
  );
}