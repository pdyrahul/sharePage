'use client'; 

import React, { useState } from 'react';
import { Modal, Box, Button, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { Editor } from '../../../../components/ui/TextEditor/Editor';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%', // Responsive width
  maxHeight: 400, // Max height for overflow
  maxWidth: 500, // Max width for larger screens
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  overflowY: 'auto', // ya 'scroll'
};

const Page = () => {
  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm();
  const [isLoading, setIsLoading] = useState(false); // State for loading indicator
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  const handleEditorChange = (content) => {
    console.log('Content changed:', content);
  };

  const onSubmit = (data) => {
   toast.success('Launched successfully!', {
       style: { width: '300px', marginTop: '10px' },
     });
    setIsLoading(true); // Set loading state

    // Log the form data to the console
    console.log('Form submitted successfully:', data);

    // Reset form fields
    Object.keys(data).forEach(key => setValue(key, ''));
    setIsLoading(false); // Reset loading state
  };

  const handlePreview = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const isFormComplete = watch('title') && watch('type') && watch('category') && watch('goal');

  const watchFormFields = watch({ disabled: true });
  return (
    <div className="event-body">
      <div className="heading">Create a Fund Raising Campaign</div>
      <form className="submit-an-event" onSubmit={handleSubmit(onSubmit)}>
        {/* Title Field */}
        <div className="input-group in-1-col">
          <label>
            Title<span style={{ color: "#ef1d26" }}>*</span>
          </label>
          <input
            type="text"
            {...register('title', { required: true })}
            placeholder="Enter Event Title"
          />
          {errors.title && <span style={{ color: 'red' }}>This field is required</span>}
        </div>

        {/* Type Field */}
        <div className="input-group in-3-col">
          <label>
            Type<span style={{ color: "#ef1d26" }}>*</span>
          </label>
          <select
            {...register('type', { required: true })}
            className="form-select"
          >
            <option value="">Select Type</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          {errors.type && <span style={{ color: 'red' }}>This field is required</span>}
        </div>

        {/* Category Field */}
        <div className="input-group in-3-col">
          <label>
            Category<span style={{ color: "#ef1d26" }}>*</span>
          </label>
          <select
            {...register('category', { required: true })}
            className="form-select"
          >
            <option value="">Select Category</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          {errors.category && <span style={{ color: 'red' }}>This field is required</span>}
        </div>

        {/* Fund Raising Goal Field */}
        <div className="input-group in-3-col">
          <label>
            Fund Raising Goal<span style={{ color: "#ef1d26" }}>*</span>
          </label>
          <input
            type="text"
            {...register('goal', { required: true })}
            placeholder="Enter Goals"
          />
          {errors.goal && <span style={{ color: 'red' }}>This field is required</span>}
        </div>

        {/* Country Field */}
        <div className="input-group in-3-col">
          <label>
            Country Where Funds Will Go<span style={{ color: "#ef1d26" }}>*</span>
          </label>
          <select
            {...register('country', { required: true })}
            className="form-select"
          >
            <option value="">Select Country</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          {errors.country && <span style={{ color: 'red' }}>This field is required</span>}
        </div>

        {/* State Field */}
        <div className="input-group in-3-col">
          <label>
            State<span style={{ color: "#ef1d26" }}>*</span>
          </label>
          <select
            {...register('state', { required: true })}
            className="form-select"
          >
            <option value="">Select State</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          {errors.state && <span style={{ color: 'red' }}>This field is required</span>}
        </div>

        {/* City Field */}
        <div className="input-group in-3-col">
          <label>
            City<span style={{ color: "#ef1d26" }}>*</span>
          </label>
          <select
            {...register('city', { required: true })}
            className="form-select"
          >
            <option value="">Select City</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          {errors.city && <span style={{ color: 'red' }}>This field is required</span>}
        </div>

        {/* Postal Code Field */}
        <div className="input-group in-3-col">
          <label>
            Postal Code<span style={{ color: "#ef1d26" }}>*</span>
          </label>
          <input
            type="text"
            {...register('postalCode', { required: true })}
            placeholder="Enter Postal Code"
          />
          {errors.postalCode && <span style={{ color: 'red' }}>This field is required</span>}
        </div>

        {/* Launch Date Field */}
        <div className="input-group in-3-col">
          <label>
            Launch Date<span style={{ color: "#ef1d26" }}>*</span>
          </label>
          <input
            type="date"
            {...register('launchDate', { required: true })}
          />
          {errors.launchDate && <span style={{ color: 'red' }}>This field is required</span>}
        </div>

        {/* Phone Number Field */}
        <div className="input-group in-3-col">
          <label>
            Your Phone Number<span style={{ color: "#ef1d26" }}>*</span>
          </label>
          <input
            type="number"
            {...register('phoneNumber', { required: true })}
            placeholder="Enter Phone number"
          />
          {errors.phoneNumber && <span style={{ color: 'red' }}>This field is required</span>}
        </div>

        {/* Beneficiary Field */}
        <div className="input-group in-3-col">
          <label>
            Who is this Fund Raising For?<span style={{ color: "#ef1d26" }}>*</span>
          </label>
          <select
            {...register('beneficiary', { required: true })}
            className="form-select"
          >
            <option value="">Some One Else</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          {errors.beneficiary && <span style={{ color: 'red' }}>This field is required</span>}
        </div>

        {/* Beneficiary Full Name Fields */}
        <div className="input-group in-3-col">
          <label>
            Type the beneficiary’s Full Name<span style={{ color: "#ef1d26" }}>*</span>
          </label>
          <input
            type="text"
            {...register('beneficiaryFirstName', { required: true })}
            placeholder="First Name"
          />
          {errors.beneficiaryFirstName && <span style={{ color: 'red' }}>This field is required</span>}
        </div>
        <div className="input-group in-3-col">
          <label>-<span style={{ color: "#ef1d26 " }}>*</span></label>
          <input
            type="text"
            {...register('beneficiaryLastName', { required: true })}
            placeholder="Last Name"
          />
          {errors.beneficiaryLastName && <span style={{ color: 'red' }}>This field is required</span>}
        </div>

        {/* Description Field */}
        <div className="input-group in-1-col desc">
          <label>
            Description<span style={{ color: "#ef1d26" }}>*</span>
          </label>
          {/* <textarea
            {...register('description', { required: true })}
            placeholder="Type Description"
            rows={6}
          /> */}
           <Editor 
            onEditorChange={handleEditorChange}
            initialValue="<p>Start writing here...</p>"
          />
          {errors.description && <span style={{ color: 'red' }}>This field is required</span>}
          {/* <div className="icons">
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
          </div> */}
        </div>

        {/* Banner Image Upload */}
        <div className="banner-img">
          <label htmlFor="banner-upload">
            <p>
              <span>Click Here</span> to upload banner image of Fund Raising*(png, jpg, jpeg)
            </p>
            <input type="file" id="banner-upload" {...register('bannerImage')} />
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
              <input type="file" id="poster-upload" {...register('posterImage')} />
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
                <input type="file" id="photo-upload" {...register('albumPhotos')} multiple />
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
                <input type="file" id="video-upload" {...register('albumVideos')} multiple />
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
          </ button>
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
        {Object.keys(errors).length > 0 && (
          <div className="error-message" style={{ color: 'red' }}>
            Please fill in all required fields.
          </div>
        )}
        <ToastContainer/>
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
          <Box id="modal-description" sx={{ mt: 2 }}>
            {Object.keys(watchFormFields).map((field, index) => (
              <Typography key={index} variant="body1" sx={{ mb: 1 }}>
                <strong>{field.replace(/([A-Z])/g, ' $1').trim().toUpperCase()}:</strong> {watchFormFields[field] || 'N/A'}
              </Typography>
            ))}
          </Box>
          <Button onClick={handleCloseModal} sx={{ mt: 3 }}>
            Close
          </Button>
        </Box>
      </Modal>

    </div>
  );
};

export default Page;