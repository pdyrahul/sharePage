'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  maxWidth: '92%',
  bgcolor: 'background.paper',
  border: '2px solid #c11', // Ensure border is in #c11
  borderRadius: 4,
  boxShadow: 24,
  p: 4,
};

export default function ChangeLocationModal() {
  const [open, setOpen] = React.useState(false);
  const [country, setCountry] = React.useState('');
  const [state, setState] = React.useState('');
  const [city, setCity] = React.useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        onClick={handleOpen}
        style={{
          textTransform: 'capitalize',
          color: '#c11',
          padding: 0,
          textDecoration: 'underline',
        }}
      >
        Change Location
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"

      >
        <Box sx={style}>
          <Box className="modal-header" sx={{ mb: 2, fontSize: '10px', }}>
            <Box className="loc-info">
              <Typography
                variant="subtitle1"
                className="title"
                sx={{
                  fontSize: '12px',
                  fontWeight: 'bold',
                  color: '#c11',
                }}
              >
                Current Location
              </Typography>
              <p className="m-0 fs-6 fw-bold pb-2">
                Rawalpindi, Punjab, Pakistan
              </p>
              <Typography
                id="modal modal-title"
                sx={{ fontWeight: 600, fontSize: 18 }}
              >
                Change Location
              </Typography>
              {/* Underline below "Change Location" */}
              <Box
                sx={{
                  width: '26%',
                  height: '4px',
                  bgcolor: '#c11',
                  mt: 1,
                }}
              />
            </Box>
          </Box>

          <Box className="modal-body">
            <form>
              <FormControl
                fullWidth
                sx={{
                    mb: 2,
                    '& .MuiOutlinedInput-root': {
                      '&:hover fieldset': {
                        borderColor: '#c11', // Hover outline
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#c11', // Focused outline
                      },
                    },
                    '& .MuiInputLabel-root': {
                      backgroundColor: 'white', // Background for label to prevent overlap
                      padding: '0 4px', // Add some padding for better appearance
                      transform: 'translate(14px, -6px) scale(0.75)', // Ensure label stays in the correct position
                    },
                    '& .MuiInputLabel-shrink': {
                      backgroundColor: 'white', // Background when label shrinks
                      padding: '0 4px',
                    },
                  }}
              >
                <InputLabel>Country</InputLabel>
                <Select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                >
                  <MenuItem value="">Select Country</MenuItem>
                  <MenuItem value="1">One</MenuItem>
                  <MenuItem value="2">Two</MenuItem>
                  <MenuItem value="3">Three</MenuItem>
                </Select>
              </FormControl>

              <FormControl
                fullWidth
                sx={{
                    mb: 2,
                    '& .MuiOutlinedInput-root': {
                      '&:hover fieldset': {
                        borderColor: '#c11', // Hover outline
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#c11', // Focused outline
                      },
                    },
                    '& .MuiInputLabel-root': {
                      backgroundColor: 'white', // Background for label to prevent overlap
                      padding: '0 4px', // Add some padding for better appearance
                      transform: 'translate(14px, -6px) scale(0.75)', // Ensure label stays in the correct position
                    },
                    '& .MuiInputLabel-shrink': {
                      backgroundColor: 'white', // Background when label shrinks
                      padding: '0 4px',
                    },
                  }}
              >
                <InputLabel>State</InputLabel>
                <Select
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                >
                  <MenuItem value="">Select State</MenuItem>
                  <MenuItem value="1">One</MenuItem>
                  <MenuItem value="2">Two</MenuItem>
                  <MenuItem value="3">Three</MenuItem>
                </Select>
              </FormControl>

              <FormControl
                fullWidth
                sx={{
                    mb: 2,
                    '& .MuiOutlinedInput-root': {
                      '&:hover fieldset': {
                        borderColor: '#c11', // Hover outline
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#c11', // Focused outline
                      },
                    },
                    '& .MuiInputLabel-root': {
                      backgroundColor: 'white', // Background for label to prevent overlap
                      padding: '0 4px', // Add some padding for better appearance
                      transform: 'translate(14px, -6px) scale(0.75)', // Ensure label stays in the correct position
                    },
                    '& .MuiInputLabel-shrink': {
                      backgroundColor: 'white', // Background when label shrinks
                      padding: '0 4px',
                    },
                  }}
              >
                <InputLabel>City</InputLabel>
                <Select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                >
                  <MenuItem value="">Select City</MenuItem>
                  <MenuItem value="1">One</MenuItem>
                  <MenuItem value="2">Two</MenuItem>
                  <MenuItem value="3">Three</MenuItem>
                </Select>
              </FormControl>
            </form>
          </Box>

          <Box
            className="modal-footer"
            sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2, gap: 4 }}
          >
            <Button
              onClick={handleClose}
              variant="outlined"
              color="secondary"
              sx={{ mr: 1 }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              style={{ color: 'white', backgroundColor: '#CC1111' }}
              onClick={() => {
                // Handle the change location logic here
                handleClose();
              }}
            >
              Change
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
