'use client'; // For Next.js client components
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Modal, Box, Typography, Button } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    toast.success('submitted successfully!', {
      style: { width: '300px', marginTop: '10px' },
    });
    console.log('Form submitted successfully:', data);
    reset();
    setIsModalOpen(false);
  };

  const handlePreview = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const watchFormFields = watch({ disabled: true });

  return (
    <div className="event-body">
      <div className="heading">Submit an Event</div>
      <form className="submit-an-event" onSubmit={handleSubmit(onSubmit)}>
        {/* Title Field */}
        <div className="input-group">
          <label>
            Title<span style={{ color: "#EF1D26" }}>*</span>
          </label>
          <input
            type="text"
            placeholder="Enter Event Title"
            {...register('title', { required: 'Title is required' })}
          />
          {errors.title && <span style={{ color: 'red' }}>{errors.title.message}</span>}
        </div>
        {/* Type Field */}
        <div className="input-group  in-3-col">
          <label>
            Type<span style={{ color: "#EF1D26" }}>*</span>
          </label>
          <select
            {...register('type', { required: 'Type is required' })}
          >
            <option value="">Select Category</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          {errors.type && <span style={{ color: 'red' }}>{errors.type.message}</span>}
        </div>
        {/* Category Field */}
        <div className="input-group  in-3-col">
          <label>
            Category<span style={{ color: "#EF1D26" }}>*</span>
          </label>
          <select
            {...register('category', { required: 'Category is required' })}
          >
            <option value="">Select Category</option>
            <option value="Music">Music</option>
            <option value="Tech">Tech</option>
            <option value="Sports">Sports</option>
          </select>
          {errors.category && <span style={{ color: 'red' }}>{errors.category.message}</span>}
        </div>

        {/* Sub Category Field */}
        <div className="input-group  in-3-col">
          <label>
            Sub Category
          </label>
          <input
            type="text"
            placeholder="Enter Sub Category"
            {...register('subCategory')}
          />
        </div>
        {/* Address */}
        <div className="input-group">
          <label>
            Address<span style={{ color: "#EF1D26" }}>*</span>
          </label>
          <textarea
            placeholder="Enter Address"
            {...register('address', { required: 'Address is required' })}
          />
          {errors.address && <span style={{ color: 'red' }}>{errors.address.message}</span>}
        </div>
        {/* Event Date */}
        <div className="input-group  in-7-col">
          <label>
            Event Date<span style={{ color: "#EF1D26" }}>*</span>
          </label>
          <input
            type="date"
            {...register('eventDate', { required: 'Event Date is required' })}
          />
          {errors.eventDate && <span style={{ color: 'red' }}>{errors.eventDate.message}</span>}
        </div>

        {/* Start Time */}
        <div className="input-group  in-5-col">
          <label>
            Start Time<span style={{ color: "#EF1D26" }}>*</span>
          </label>
          <input
            type="time"
            {...register('startTime', { required: 'Start Time is required' })}
          />
          {errors.startTime && <span style={{ color: 'red' }}>{errors.startTime.message}</span>}
        </div>

        {/* End Time */}
        <div className="input-group  in-3-col">
          <label>
            End Time<span style={{ color: "#EF1D26" }}>*</span>
          </label>
          <input
            type="time"
            {...register('endTime', { required: 'End Time is required' })}
          />
          {errors.endTime && <span style={{ color: 'red' }}>{errors.endTime.message}</span>}
        </div>

        {/* Venue Name */}
        <div className="input-group  in-3-col">
          <label>
            Venue Name<span style={{ color: "#EF1D26" }}>*</span>
          </label>
          <input
            type="text"
            placeholder="Enter Venue Name"
            {...register('venueName', { required: 'Venue Name is required' })}
          />
          {errors.venueName && <span style={{ color: 'red' }}>{errors.venueName.message}</span>}
        </div>



        {/* Capacity */}
        <div className="input-group  in-3-col">
          <label>
            Capacity<span style={{ color: "#EF1D26" }}>*</span>
          </label>
          <input
            type="number"
            placeholder="Enter Capacity"
            {...register('capacity', { required: 'Capacity is required' })}
          />
          {errors.capacity && <span style={{ color: 'red' }}>{errors.capacity.message}</span>}
        </div>

        {/* Refund Policy */}
        <div className="input-group">
          <label>
            Refund Policy<span style={{ color: "#EF1D26" }}>*</span>
          </label>
          <textarea
            placeholder="Enter Refund Policy"
            {...register('refundPolicy', { required: 'Refund Policy is required' })}
          />
          {errors.refundPolicy && <span style={{ color: 'red' }}>{errors.refundPolicy.message}</span>}
        </div>

        {/* Amenities */}
        <div className="input-group">
          <label>
            Amenities
          </label>
          <textarea
            placeholder="Enter Amenities"
            {...register('amenities')}
          />
        </div>

        {/* Buttons */}
        <div className="main-btn">
          <button
            type="button"
            onClick={() => console.log('Save as Draft')}
            style={{ border: "1px solid #CC1111", color: "#CC1111", background: "none" }}
          >
            SAVE AS DRAFT
          </button>
          <button
            type="button"
            onClick={handlePreview}
            style={{ border: "1px solid #CC1111", color: "#CC1111", background: "none" }}
          >
            PREVIEW
          </button>
          <button className="prim" type="submit">SUBMIT</button>
        </div>
        <ToastContainer />
      </form>

      {/* Modal for Preview */}
      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-title" variant="h6">
            Preview Event
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }}>
            {Object.keys(watchFormFields).map((field, index) => (
              <React.Fragment key={index}>
                <strong>{field.replace(/([A-Z])/g, ' $1').trim()}:</strong> {watchFormFields[field] || 'N/A'}
                <br />
              </React.Fragment>
            ))}
          </Typography>
          <Button onClick={handleCloseModal}>Close</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default Page;
