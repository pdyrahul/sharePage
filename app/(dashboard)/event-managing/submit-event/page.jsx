'use client'; // For Next.js client components
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Modal, Box, Typography, Button } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import { Editor } from '@/components/ui/TextEditor/Editor';
import * as yup from 'yup';

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

// Validation schema
const schema = yup.object().shape({
  title: yup.string().required('Title is required'),
  type: yup.string().required('Type is required'),
  category: yup.string().required('Category is required'),
  address: yup.string().required('Address is required'),
  venueName: yup.string().required('Venue Name is required'),
  capacity: yup.number().required('Capacity is required').positive().integer(),
  eventDate: yup.date().required('Event Date is required').min(new Date(), 'Event Date cannot be in the past'),
  startTime: yup.string().required('Start Time is required'),
  endTime: yup.string().required('End Time is required').test('is-greater', 'End Time must be after Start Time', function(value) {
    const { startTime } = this.parent;
    return value > startTime;
  }),
  amenities: yup.string(),
});

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formValues, setFormValues] = useState({}); // State to hold form values for preview

  const handleEditorChange = (content) => {
    console.log('Content changed:', content);
  };

  const onSubmit = (values, { resetForm }) => {
    toast.success('Submitted successfully!', {
      style: { width: '300px', marginTop: '10px' },
    });
    console.log('Form submitted successfully:', values);
    resetForm();
    setIsModalOpen(false);
  };

  const handlePreview = (values) => {
    setFormValues(values); // Set the form values for preview
    setIsModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="event-body">
      <div className="heading">Submit an Event</div>
      <Formik
        initialValues={{
          title: '',
          type: '',
          category: '',
          address: '',
          venueName: '',
          capacity: '',
          eventDate: '',
          startTime: '',
          endTime: '',
          amenities: '',
        }}
        validationSchema={schema}
        onSubmit={onSubmit}
      >
        {({ values }) => (
          <Form className="submit-an-event">
            {/* Title Field */}
            <div className="input-group">
              <label>
                Title<span style={{ color: "#EF1D26" }}>*</span>
              </label>
              <Field type="text" name="title" placeholder="Enter Event Title" />
              <ErrorMessage name="title" component="span" style={{ color: 'red' }} />
            </div>
            {/* Type Field */}
            <div className="input-group in-3-col">
              <label>
                Type<span style={{ color: "#EF1D26" }}>*</span>
              </label>
              <Field as="select" name="type">
                <option value="">Select Category</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </Field>
              <ErrorMessage name="type" component="span" style={{ color: 'red' }} />
            </div>
            {/* Category Field */}
            <div className="input-group in-3-col">
              <label>
                Category<span style={{ color: "#EF1D26" }}>*</span>
              </label>
              <Field as="select" name="category">
                <option value="">Select Category</option>
                <option value="Music">Music</option>
                <option value="Tech">Tech</option>
                <option value="Sports">Sports</option>
              </Field>
              <ErrorMessage name="category" component="span" style={{ color: 'red' }} />
            </div>

            {/* Sub Category Field */}
            <div className="input-group in-3-col">
              <label>
                Sub Category
              </label>
              <Field type="text" name="subCategory" placeholder="Enter Sub Category" />
            </div>
            {/* Address */}
            <div className="input-group">
              <label>
                Address<span style={{ color: "#EF1D26" }}>*</span>
              </label>
              <Field as="textarea" name="address" placeholder="Enter Address" />
              <ErrorMessage name="address" component="span" style={{ color: 'red' }} />
            </div>
            {/* Venue Name */}
            <div className="input-group in-0-75-col">
              <label>
                Venue Name<span style={{ color: "#EF1D26" }}>*</span>
              </label>
              <Field type="text" name="venueName" placeholder="Enter Venue Name" />
              <ErrorMessage name="venueName" component="span" style={{ color: 'red' }} />
            </div>
            {/* Capacity */}
            <div className="input-group in-3-col">
              <label>
                Capacity<span style={{ color: "#EF1D26" }}>*</span>
              </label>
              <Field type="number" name="capacity" placeholder="Enter Capacity" />
              <ErrorMessage name="capacity" component="span" style={{ color: 'red' }} />
            </div>

            {/* Event Date */}
            <div className="input-group in-3-col">
              <label>
                Event Date<span style={{ color: "#EF1D26" }}>*</span>
              </label>
              <Field type="date" name="eventDate" />
              <ErrorMessage name="eventDate" component="span" style={{ color: 'red' }} />
            </div>
            <div className='in-3-col' style={{ display: 'flex', gap: '15px' }}>
              {/* Start Time */}
              <div className="input-group in-0-75-col">
                <label>
                  Start Time<span style={{ color: "#EF1D26" }}>*</span>
                </label>
                <Field type="time" name="startTime" />
                <ErrorMessage name="startTime" component="span" style={{ color: 'red' }} />
              </div>
              {/* End Time */}
              <div className="input-group in-0-75-col">
                <label>
                  End Time<span style={{ color: "#EF1D26" }}>*</span>
                </label>
                <Field type="time" name="endTime" />
                <ErrorMessage name="endTime" component="span" style={{ color: 'red' }} />
              </div>
            </div>
            <Editor
              onEditorChange={handleEditorChange}
              initialValue="<p>Start writing here...</p>"
            />
            {/* Amenities */}
            <div className="input-group">
              <label>
                Amenities
              </label>
              <Field as="textarea" name="amenities" placeholder="Enter Amenities" rows={6} />
            </div>
            <div className="in-1-col" style={{ marginTop: 10, marginBottom: 20 }}>
              <button
                type="button"
                className="my-btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#ticket-add"
              >
                Add Ticket
              </button>
            </div>
            <>
              <div className="input-group in-1-col">
                <label>
                  Refund Policy<span style={{ color: "#EF1D26" }}>*</span>
                </label>
                <Field as="textarea" name="refundPolicy" placeholder="Type Here" rows={6} />
              </div>
              <div className="cancel-policy">
                <p>
                  <a href="">Click Here</a> to see cancellation policy
                </p>
              </div>
              <div className="banner-img">
                <label htmlFor="banner-upload">
                  <p>
                    <span>Click Here</span> to upload banner image of Event*(png, jpg, jpeg)
                  </p>
                  <input type="file" id="banner-upload" />
                </label>
              </div>
              <div className="in-1-col img-label">
                <label>
                  Event Poster<span style={{ color: "#EF1D26" }}>*</span>
                </label>
                <div className="poster-img">
                  <label htmlFor="poster-upload">
                    <p>
                      <span>Click Here</span> to upload Image
                    </p>
                    <input type="file" id="poster-upload" />
                  </label>
                </div>
              </div>
              <div className="in-1-col img-label">
                <label>
                  Sitting Layout Image<span style={{ color: "#EF1D26" }}>*</span>
                </label>
                <div className="poster-img">
                  <label htmlFor="layout-upload">
                    <p>
                      <span>Click Here</span> to upload Image
                    </p>
                    <input type="file" id="layout-upload" />
                  </label>
                </div>
              </div>
              <div className="in-1-col img-label">
                <label>
                  Album Photos<span style={{ color: "#EF1D26" }}>*</span>
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
                      <input type="file" id="photo-upload" />
                    </label>
                  </div>
                </div>
              </div>
              <div className="in-1-col img-label">
                <label>
                  Album Videos<span style={{ color: "#EF1D26" }}>*</span>
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
                  <div
                    className="poster-img video"
                    style={{ height: "auto", margin: 0, minHeight: 160 }}
                  >
                    <label htmlFor="video-upload">
                      <p>
                        <span>Click Here</span> to upload video
                      </p>
                      <input type="file" id="video-upload" />
                    </label>
                  </div>
                </div>
              </div>
            </>

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
                onClick={() => handlePreview(values)}
                style={{ border: "1px solid #CC1111", color: "#CC1111", background: "none" }}
              >
                PREVIEW
              </button>
              <button className="prim" type="submit">SUBMIT</button>
            </div>
            <ToastContainer />
          </Form>
        )}
      </Formik>

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
            {Object.keys(formValues).map((field, index) => (
              <React.Fragment key={index}>
                <strong>{field.replace(/([A-Z])/g, ' $1').trim()}:</strong> {formValues[field] || 'N/A'}
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