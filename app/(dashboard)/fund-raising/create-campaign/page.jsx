'use client'; // This is necessary for client-side rendering in Next.js 13+

import React, { useState } from 'react';
import { Modal, Box, Button, Typography } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%', // Responsive width
  maxWidth: 500, // Max width for larger screens
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Page = () => {
  const [formData, setFormData] = useState({
    title: '',
    type: '',
    category: '',
    goal: '',
    country: '',
    state: '',
    city: '',
    postalCode: '',
    launchDate: '',
    phoneNumber: '',
    beneficiary: '',
    beneficiaryFirstName: '',
    beneficiaryLastName: '',
    description: '',
    bannerImage: null,
    posterImage: null,
    albumPhotos: [],
    albumVideos: [],
  });

  const [error, setError] = useState(null); // State for error handling
  const [isLoading, setIsLoading] = useState(false); // State for loading indicator
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (event) => {
    const { name, files } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files.length > 1 ? Array.from(files) : files[0],
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true); // Set loading state

    // Basic validation
    if (!formData.title || !formData.type || !formData.category || !formData.goal) {
      setError('Please fill in all required fields.');
      setIsLoading(false);
      return;
    }

    // Log the form data to the console
    console.log('Form submitted successfully:', formData);

    // Reset form fields
    setFormData({
      title: '',
      type: '',
      category: '',
      goal: '',
      country: '',
      state: '',
      city: '',
      postalCode: '',
      launchDate: '',
      phoneNumber: '',
      beneficiary: '',
      beneficiaryFirstName: '',
      beneficiaryLastName: '',
      description: '',
      bannerImage: null,
      posterImage: null,
      albumPhotos: [],
      albumVideos: [],
    });
    setError(null); // Clear any previous errors
    setIsLoading(false); // Reset loading state
  };

  const handlePreview = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const isFormComplete = formData.title && formData.type && formData.category && formData.goal;

  return (
    <div className="event-body">
      <div className="heading">Create a Fund Raising Campaign</div>
      <form className="submit-an-event" onSubmit={handleSubmit}>
        {/* Title Field */}
        <div className="input-group in-1-col">
          <label>
            Title<span style={{ color: "#ef1d26" }}>*</span>
          </label>
          <input
            type="text"
            name="title"
            placeholder="Enter Event Title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>

        {/* Type Field */}
        <div className="input-group in-3-col">
          <label>
            Type<span style={{ color: "#ef1d26" }}>*</span>
          </label>
          <select
            name="type"
            className="form-select"
            value={formData.type}
            onChange={handleChange}
          >
            <option value="">Select Type</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>

        {/* Category Field */}
        <div className="input-group in-3-col">
          <label>
            Category<span style={{ color: "#ef1d26" }}>*</span>
          </label>
          <select
            name="category"
            className="form-select"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="">Select Category</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>

        {/* Fund Raising Goal Field */}
        <div className="input-group in-3-col">
          <label>
            Fund Raising Goal<span style={{ color: "#ef1d26" }}>*</span>
          </label>
          <input
            type="text"
            name="goal"
            placeholder="Enter Goals"
            value={formData.goal}
            onChange={handleChange}
          />
        </div>

        {/* Country Field */}
        <div className="input-group in-3-col">
          <label>
            Country Where Funds Will Go<span style={{ color: "#ef1d26" }}>*</span>
          </label>
          <select
            name="country"
            className="form-select"
            value={formData.country}
            onChange={handleChange}
          >
            <option value="">Select Country</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>

        {/* State Field */}
        <div className="input-group in-3-col">
          <label>
            State<span style={{ color: "#ef1d26" }}>*</span>
          </label>
          <select
            name="state"
            className="form-select"
            value={formData.state}
            onChange={handleChange}
          >
            <option value="">Select State</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>

        {/* City Field */}
        <div className="input-group in-3-col">
          <label>
            City<span style={{ color: "#ef1d26" }}>*</span>
          </label>
          <select
            name="city"
            className="form-select"
            value={formData.city}
            onChange={handleChange}
          >
            <option value="">Select City</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>

        {/* Postal Code Field */}
        <div className="input-group in-3-col">
          <label>
            Postal Code<span style={{ color: "#ef1d26" }}>*</span>
          </label>
          <input
            type="text"
            name="postalCode"
            placeholder="Enter Postal Code"
            value={formData.postalCode}
            onChange={handleChange}
          />
        </div>

        {/* Launch Date Field */}
        <div className="input-group in-3-col">
          <label>
            Launch Date<span style={{ color: "#ef1d26" }}>*</span>
          </label>
          <input
            type="date"
            name="launchDate"
            value={formData.launchDate}
            onChange={handleChange}
          />
        </div>

        {/* Phone Number Field */}
        <div className="input-group in-3-col">
          <label>
            Your Phone Number<span style={{ color: "#ef1d26" }}>*</span>
          </label>
          <input
            type="number"
            name="phoneNumber"
            placeholder="Enter Phone number"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>

        {/* Beneficiary Field */}
        <div className="input-group in-3-col">
          <label>
            Who is this Fund Raising For?<span style={{ color: "#ef1d26" }}>*</span>
          </label>
          <select
            name="beneficiary"
            className="form-select"
            value={formData.beneficiary}
            onChange={handleChange}
          >
            <option value="">Some One Else</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>

        {/* Beneficiary Full Name Fields */}
        <div className="input-group in-3-col">
          < label>
            Type the beneficiary’s Full Name<span style={{ color: "#ef1d26" }}>*</span>
          </label>
          <input
            type="text"
            name="beneficiaryFirstName"
            placeholder="First Name"
            value={formData.beneficiaryFirstName}
            onChange={handleChange}
          />
        </div>
        <div className="input-group in-3-col">
          <label>-<span style={{ color: "#ef1d26" }}>*</span></label>
          <input
            type="text"
            name="beneficiaryLastName"
            placeholder="Last Name"
            value={formData.beneficiaryLastName}
            onChange={handleChange}
          />
        </div>

        {/* Description Field */}
        <div className="input-group in-1-col desc">
          <label>
            Description<span style={{ color: "#ef1d26" }}>*</span>
          </label>
          <textarea
            name="description"
            placeholder="Type Description"
            rows={6}
            value={formData.description}
            onChange={handleChange}
          />
          <div className="icons">
            <div className="icon">
              <img src="./images/italic.svg" alt="" />
            </div>
            <div className="icon">
              <img src="./images/bold.svg" alt="" />
            </div>
            <div className="icon">
              <img src="./images/underline.svg" alt="" />
            </div>
            <div className="icon">
              <img src="./images/line-through.svg" alt="" />
            </div>
            <div className="icon">Generate By AI</div>
          </div>
        </div>

        {/* Banner Image Upload */}
        <div className="banner-img">
          <label htmlFor="banner-upload">
            <p>
              <span>Click Here</span> to upload banner image of Fund Raising*(png, jpg, jpeg)
            </p>
            <input type="file" id="banner-upload" name="bannerImage" onChange={handleFileChange} />
          </label>
        </div>

        {/* Fund Raising Poster Upload */}
        <div className="in-1-col img-label">
          <label>
            Fund Raising Poster<span style={{ color: "#ef1d26" }}>*</span>
          </label>
          <div className="poster-img">
            <label htmlFor="poster-upload">
              <p>
                <span>Click Here</span> to upload Image
              </p>
              <input type="file" id="poster-upload" name="posterImage" onChange={handleFileChange} />
            </label>
          </div>
        </div>

        {/* Album Photos Upload */}
        <div className="in-1-col img-label">
          <label>
            Album Photos<span style={{ color: "#ef1d26" }}>*</span>
          </label>
          <div className="photo-wrapper">
            <div className="photo">
              <div className="img-wrapper">
                <img src="./images/photo.svg" alt="" />
              </div>
              <div className="icon">
                <img src="./images/cross.svg" alt="" />
              </div>
            </div>
            <div className="poster-img photo">
              <label htmlFor="photo-upload">
                <p>
                  <span>Click Here</span> to upload Image
                </p>
                <input type="file" id="photo-upload" name="albumPhotos" multiple onChange={handleFileChange} />
              </label>
            </div>
          </div>
        </div>

        {/* Album Videos Upload */}
        <div className="in-1-col img-label">
          <label>
            Album Videos<span style={{ color: "#ef1d26" }}>*</span>
          </label>
          <div className="video-wrapper">
            <div className="video">
              <div className="img-wrapper">
                <img src="./images/video-1.svg" alt="" />
              </div>
              <div className="icon">
                <img src="./images/cross.svg" alt="" />
              </div>
              <div className="play">
                <img src="./images/play.svg" alt="" />
              </div>
            </div>
            <div className="poster-img video" style={{ height: "auto", margin: 0, minHeight: 160 }}>
              <label htmlFor="video-upload">
                <p>
                  <span>Click Here</span> to upload video
                </p>
                <input type="file" id="video-upload" name="albumVideos" multiple onChange={handleFileChange} />
              </label>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="main-btn">
          <button
            type="button"
            style={{
              border: "1px solid #cc1111",
              color: "#cc1111",
              background: "none"
            }}
            onClick={() => console.log('Draft saved')}
          >
            SAVE AS DRAFT
          </button>
          <button
            type="button"
            style={{
              border: "1px solid #cc1111",
              color: "#cc1111",
              background: "none"
            }}
            onClick={handlePreview}
            disabled={!isFormComplete} // Disable until form is complete
          >
            PREVIEW
          </button>
          <button className="prim" type="submit" disabled={isLoading}>
            {isLoading ? 'Submitting...' : 'LAUNCH'}
          </button>
        </div>

        {/* Error Message Display */}
        {error && <div className="error-message" style={{ color: 'red' }}>{error}</div>}
      </form>

      {/* Modal to show form data */}
      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-title" variant="h6" component="h2">
            Preview Data
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }}>
            <div>Title: {formData.title}</div>
            <div>Type: {formData.type}</div>
            <div>Category: {formData.category}</div>
            <div>Goal: {formData.goal}</div>
            <div>Country: {formData.country}</div>
            <div>State: {formData.state}</div>
            <div>City: {formData.city}</div>
            <div>Postal Code: {formData.postalCode}</div>
            <div>Launch Date: {formData.launchDate}</div>
            <div>Phone Number: {formData.phoneNumber}</div>
            <div>Beneficiary: {formData.beneficiary}</div>
            <div>Beneficiary First Name: {formData.beneficiaryFirstName}</div>
            <div>Beneficiary Last Name: {formData.beneficiaryLastName}</div>
            <div>Description: {formData.description}</div>
            {/* Add other fields as necessary */}
          </Typography>
          <Button onClick={handleCloseModal}>Close</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default Page;