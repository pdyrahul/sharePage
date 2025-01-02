'use client';
import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Modal, Box, Typography, Button } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import { Editor } from '../../../../components/ui/TextEditor/Editor';
import validationSchema from '../../../utils/Schema';
import ImageUpload from './component/ImageUpload';

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

const initialValues = {
  category: '',
  ethnicity: '',
  eventTitle: '',
  event: '',
  description: 'null',
  privacy: 'null',
  country: '',
  state: '',
  city: '',
  address: '',
  place: '',
  eventType: 'free',
  registrationRequired: 'yes',
  capacity: '',
  organizerName: '',
  organizerEmail: '',
  organizerPhone: '',
  startDate: '',
  endDate: '',
  startTime: '',
  endTime: '',
  ticketLinkType: '',
  ticketUrl: '',
  featuredEvent: 'no',
};




const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formValues, setFormValues] = useState({}); // State to hold form values for preview
  const [modalContent, setModalContent] = useState('');
  const [posterPreview, setPosterPreview] = useState(null);
  const [seatingLayoutPreview, setSeatingLayoutPreview] = useState(null);
  const [galleryImagesPreview, setGalleryImagesPreview] = useState([]);
  const [sponsorModalOpen, setSponsorModalOpen] = useState(false)
  // Hardcoded ticket details
  const [tickets, setTickets] = useState([
    { name: 'VIP Ticket', price: 50, quantity: 100 },
    { name: 'General Admission', price: 20, quantity: 200 }
  ]);

  // Add a new ticket
  const addTicket = () => {
    const newTicket = {
      name: 'New Ticket',
      price: 30,
      quantity: 150,
    };
    setTickets([...tickets, newTicket]);
  };

  // Remove a ticket
  const removeTicket = (index) => {
    const updatedTickets = tickets.filter((_, idx) => idx !== index);
    setTickets(updatedTickets);
  };

  const handleEditorChange = (content) => {
    console.log('Content changed:', content);
  };

  const handleSubmit = (values) => {
    console.log('Form data:', values);
    toast.success('Event submitted successfully!');
  };

  const handlePreview = (values) => {
    setFormValues(values); // Set the form values for preview
    setIsModalOpen(true); // Open the modal
  };
  const handleCloseModal = () => setIsModalOpen(false);
  const openModal = (content) => {
    setModalContent(content); // Set the modal content dynamically
    setIsModalOpen(true);
  };
  // Handle file upload for poster
  const handlePosterUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPosterPreview(URL.createObjectURL(file));
    }
  };

  // Handle file upload for seating layout
  const handleSeatingLayoutUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSeatingLayoutPreview(URL.createObjectURL(file));
    }
  };

  const handleGalleryImagesUpload = (e) => {
    const files = Array.from(e.target.files);
    const filePreviews = files.map((file) => URL.createObjectURL(file));
    setGalleryImagesPreview(filePreviews);
  };

  const handleOpenModal = () => {
    setSponsorModalOpen(true);
  };
  const CloseModal = () => {
    setSponsorModalOpen(false);
  }

  return (
    <div className="event-body">
      <div className="heading">Submit an Event</div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, isSubmitting }) => (
          <Form className="submit-an-event">
            {/* Category Field */}
            <div className="input-group in-0-5-col">
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
            {/* Ethnicity* Field */}
            <div className="input-group in-0-5-col">
              <label>
                Ethnicity<span style={{ color: "#EF1D26" }}>*</span>
              </label>
              <Field as="select" name="ethnicity">
                <option value="">Select Category</option>
                <option value="indian">indian</option>
              </Field>
              <ErrorMessage name="ethnicity" component="span" style={{ color: 'red' }} />
            </div>
            {/* Title Field */}
            <div className="input-group in-0-5-col">
              <label>
                Event Title  (Max 60 characters)<span style={{ color: "#EF1D26" }}>*</span>
              </label>
              <Field type="text" name="eventTitle" placeholder="Enter Event Title" />
              <ErrorMessage name="eventTitle" component="span" style={{ color: 'red' }} />
            </div>
            {/* Sub Category Field */}
            <div className="input-group in-0-5-col">
              <label>
                Write a catchy phrase for your event (Max 100 characters)<span style={{ color: "#EF1D26" }}>*</span>
              </label>
              <Field type="text" name="event" placeholder="Enter Sub Category" />
              <ErrorMessage name="event" component="span" style={{ color: 'red' }} />
            </div>

            {/* Event Description */}
            <div className="input-group input-group in-1-col">
              <Editor
                onEditorChange={handleEditorChange}
                name="description"
              />
              <ErrorMessage name="description" component="span" style={{ color: 'red' }} />
            </div>

            {/* Return Policy */}
            <div className="input-group in-1-col">
              <Editor
                onEditorChange={handleEditorChange}
                name="privacy"
              />
              <ErrorMessage name="privacy" component="span" style={{ color: 'red' }} />
            </div>
            {/* Country Field */}
            <div className="input-group in-3-col">
              <label>
                Country<span style={{ color: "#EF1D26" }}>*</span>
              </label>
              <Field as="select" name="country">
                <option value="">Select Country</option>
                <option value="USA">USA</option>
                <option value="India">India</option>
                <option value="Canada">Canada</option>
                {/* Add more countries as needed */}
              </Field>
              <ErrorMessage name="country" component="span" style={{ color: 'red' }} />
            </div>

            {/* State Field */}
            <div className="input-group in-3-col">
              <label>
                State<span style={{ color: "#EF1D26" }}>*</span>
              </label>
              <Field as="select" name="state">
                <option value="">Select State</option>
                <option value="California">California</option>
                <option value="Texas">Texas</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Ontario">Ontario</option>
                {/* Add more states as needed */}
              </Field>
              <ErrorMessage name="state" component="span" style={{ color: 'red' }} />
            </div>

            {/* City Field */}
            <div className="input-group in-3-col">
              <label>
                City<span style={{ color: "#EF1D26" }}>*</span>
              </label>
              <Field as="select" name="city">
                <option value="">Select City</option>
                <option value="Los Angeles">Los Angeles</option>
                <option value="New York">New York</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Toronto">Toronto</option>
                {/* Add more cities as needed */}
              </Field>
              <ErrorMessage name="city" component="span" style={{ color: 'red' }} />
            </div>

            {/* Address */}
            <div className="input-group in-0-5-col">
              <label>
                Event Address<span style={{ color: "#EF1D26" }}>*</span>
              </label>
              <Field type="text" name="address" placeholder="Enter Venue Name" />
              <ErrorMessage name="address" component="span" style={{ color: 'red' }} />
            </div>
            {/* Venue Name */}
            <div className="input-group in-0-5-col">
              <label>
                Name Of Place<span style={{ color: "#EF1D26" }}>*</span>
              </label>
              <Field type="text" name="place" placeholder="Enter Venue Name" />
              <ErrorMessage name="place" component="span" style={{ color: 'red' }} />
            </div>

            {/* Event Type - Radio Buttons */}
            <div className='input-group in-3-col' >
              <label>Event Type</label>
              <div className='radiobttn' style={{ display: "flex", alignItems: "center", gap: "10px" }} role="group" aria-labelledby="radio-group">
                <label>
                  <Field type="radio" name="eventType" value="free" />
                  Free
                </label>
                <label>
                  <Field type="radio" name="eventType" value="paid" />
                  Paid
                </label>
              </div>
              <ErrorMessage name="eventType" component="div" style={{ color: 'red' }} />
            </div>

            <div className='input-group in-3-col'>
              <label>
                Registration Needed<span style={{ color: "#EF1D26" }}>*</span>
              </label>
              <div className='radiobttn' style={{ display: "flex", alignItems: "center", gap: "10px" }} role="group" aria-labelledby="radio-group">
                <label>
                  <Field type="radio" name="registrationRequired" value="yes" />
                  Yes
                </label>
                <label>
                  <Field type="radio" name="registrationRequired" value="no" />
                  No
                </label>
              </div>
              <ErrorMessage name="registrationRequired" component="div" style={{ color: 'red' }} />
            </div>

            {/* Registration Needed - Radio Buttons */}

            {/* Capacity Field */}
            <div className="input-group in-3-col">
              <label>
                Capacity<span style={{ color: "#EF1D26" }}>*</span>
              </label>
              <Field type="number" name="capacity" placeholder="Enter Capacity" />
              <ErrorMessage name="capacity" component="span" style={{ color: 'red' }} />
            </div>
            {values.eventType === 'paid' && (
              <div className="submit-an-event">
                {/* Add Ticket Link Field */}
                <div className="input-group in-1-col">
                  <label>
                    Add Ticket Link<span style={{ color: "#EF1D26" }}>*</span>
                  </label>
                  <div className='in-0-5-col radiobttn' style={{ display: "flex", alignItems: "center", gap: "10px" }} role="group" aria-labelledby="radio-group">
                    <label>
                      <Field type="radio" name="ticketLinkType" value="external" />
                      External
                    </label>
                    <label>
                      <Field type="radio" name="ticketLinkType" value="sharePage" />
                      Sell Ticket on TheSharePage
                    </label>
                  </div>
                  <ErrorMessage name="ticketLinkType" component="div" style={{ color: 'red' }} />

                  {/* Conditional Rendering Based on Ticket Link Type */}
                  {values.ticketLinkType === 'external' && (
                    <div className="input-group in-3-col">
                      <label>
                        Ticket URL<span style={{ color: "#EF1D26" }}>*</span>
                      </label>
                      <Field
                        type="url"
                        name="ticketUrl"
                        placeholder="Enter Ticket URL"
                        style={{ marginRight: "8px", width: "100%" }}
                      />
                      <ErrorMessage name="ticketUrl" component="span" style={{ color: 'red' }} />
                    </div>
                  )}

                  {values.ticketLinkType === 'sharePage' && (
                    <div className="input-group in-1-col">
                      <table style={{ width: '100%', border: '1px solid #ddd', marginTop: '10px' }}>
                        <thead>
                          <tr>
                            <th>Ticket Type</th>
                            <th> Ticket Price</th>
                            <th>Ticket Quantity Limit</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {/* Hardcoded ticket rows */}
                          {tickets.map((ticket, index) => (
                            <tr key={index}>
                              <td>{ticket.name}</td>
                              <td>${ticket.price}</td>
                              <td>{ticket.quantity}</td>
                              <td><button onClick={() => removeTicket(index)}>Remove</button></td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <button type='button' onClick={addTicket}>Add Ticket</button>
                    </div>
                  )}

                  <ErrorMessage name="ticketLinkType" component="span" style={{ color: 'red' }} />
                </div>
              </div>
            )}
            {/* Conditional Field Based on Event Type */}
            <div className='submit-an-event'>
              {/* Organizer Name Field */}
              <div className="input-group in-3-col">
                <label>
                  Organizer Name<span style={{ color: "#EF1D26" }}>*</span>
                </label>
                <Field type="text" name="organizerName" placeholder="Enter Organizer Name" />
                <ErrorMessage name="organizerName" component="span" style={{ color: 'red' }} />
              </div>

              {/* Organizer Email Field */}
              <div className="input-group in-3-col">
                <label>
                  Organizer Email<span style={{ color: "#EF1D26" }}>*</span>
                </label>
                <Field type="email" name="organizerEmail" placeholder="Enter Organizer Email" />
                <ErrorMessage name="organizerEmail" component="span" style={{ color: 'red' }} />
              </div>

              {/* Organizer Phone Field */}
              <div className="input-group in-3-col">
                <label>
                  Organizer Phone<span style={{ color: "#EF1D26" }}>*</span>
                </label>
                <Field type="text" name="organizerPhone" placeholder="Enter Organizer Phone" />
                <ErrorMessage name="organizerPhone" component="span" style={{ color: 'red' }} />
              </div>
              {/* Start Date Field */}
              <div className="input-group  in-0-25-col ">
                <label>
                  Start Date<span style={{ color: "#EF1D26" }}>*</span>
                </label>
                <Field type="date" name="startDate" />
                <ErrorMessage name="startDate" component="span" style={{ color: 'red' }} />
              </div>

              {/* End Date Field */}
              <div className="input-group  in-0-25-col ">
                <label>
                  End Date<span style={{ color: "#EF1D26" }}>*</span>
                </label>
                <Field type="date" name="endDate" />
                <ErrorMessage name="endDate" component="span" style={{ color: 'red' }} />
              </div>

              {/* Start Time Field */}
              <div className="input-group in-0-25-col ">
                <label>
                  Start Time<span style={{ color: "#EF1D26" }}>*</span>
                </label>
                <Field type="time" name="startTime" />
                <ErrorMessage name="startTime" component="span" style={{ color: 'red' }} />
              </div>

              {/* End Time Field */}
              <div className="input-group in-0-25-col ">
                <label>
                  End Time<span style={{ color: "#EF1D26" }}>*</span>
                </label>
                <Field type="time" name="endTime" />
                <ErrorMessage name="endTime" component="span" style={{ color: 'red' }} />
              </div>
              {/* Featured Artist For This Event */}
              <div className="input-group in-3-col">
                <label>
                  Featured Artist For This Event
                </label>
                <button type="button" onClick={() => openModal("Featured Artist")} style={{ color: '#fff', background: '#c11', padding: '5px 10px', borderRadius: '5px' }}>
                  Select Friends
                </button>
              </div>

              {/* Co-Host Name */}
              <div className="input-group in-3-col">
                <label>
                  Co-Host Name
                </label>
                <button type="button" onClick={() => openModal("Co-Host Name")} style={{ color: '#fff', background: '#c11', padding: '5px 10px', borderRadius: '5px' }}>
                  Select Friends
                </button>
              </div>
            </div>
            {/* Uploader Component */}
            <div className="input-group in-3-col">
              <label>
              Upload Poster(s)<span style={{ color: "#EF1D26" }}>*</span>
              </label>
              <ImageUpload />
            </div>
            <div className="input-group in-3-col">
            <label>
            Upload Seating Layout<span style={{ color: "#EF1D26" }}>*</span>
              </label>
              <ImageUpload /></div>
            <div className="input-group in-3-col">
            <label>
            Upload Images For Gallery<span style={{ color: "#EF1D26" }}>*</span>
              </label>
              <ImageUpload /></div>
            {/* Sponser Information */}
            <div className="input-group in-1-col" style={{
              margin: "0",
              backgroundColor: "#ffb8bd",
              color: "#000",
              padding: "10px",
              fontWeight: "bold",
              marginBottom1: "20px",
            }}>
              <h5 className='sponser-title m-0 ' >SPONSER INFORMATION </h5>
            </div>
            <div className="input-group in-3-col ">
              <label>Select Sponsor <span style={{ color: "#EF1D26" }}>*</span></label>
              <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                <select >
                  <option value="sponsor1">Sponsor 1</option>
                  <option value="sponsor2">Sponsor 2</option>
                  <option value="sponsor3">Sponsor 3</option>
                  {/* Add more sponsors as needed */}
                </select>

                {/* Button to open modal */}
                <button
                  type="button"
                  onClick={handleOpenModal}
                  style={{
                    marginLeft: '10px',
                    background: '#c11',
                    color: '#fff',
                    padding: '5px 10px',
                    borderRadius: '5px',
                    width: '200px'
                  }}
                >
                  Add Sponsor
                </button>
              </div>
            </div>
            <div className="input-group in-3-col">
              <label>
                Make Featured Event (35 USD)
              </label>
              <div className='radiobttn' style={{ display: "flex", alignItems: "center", gap: "10px" }} role="group" aria-labelledby="radio-group">
                <label>
                  <Field type="radio" name="featuredEvent" value="yes" />
                  Yes
                </label>
                <label>
                  <Field type="radio" name="featuredEvent" value="no" />
                  No
                </label>
              </div>
              <ErrorMessage name="featuredEvent" component="div" style={{ color: 'red' }} />
            </div>
            {/* Submit Button */}
            <div className="main-btn">
              <button
                type="submit"
                // disabled={isSubmitting}
                className="submit-button"

              >
                {/* {isSubmitting ? 'Submitting...' : 'Submit Event'}
                 */}
                submit
              </button>
            </div>
            {/* Preview Button */}
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
      <Modal
        open={isModalOpen && modalContent !== 'Preview'} // Check if it's the "Select Friends" modal
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-title" variant="h6">
            Select {modalContent}
          </Typography>
          <div className="friends-list">
            <p>Friends list goes here...</p>
            <button onClick={handleCloseModal}>Close</button>
          </div>
        </Box>
      </Modal>
      <Modal
        open={sponsorModalOpen}
        onClose={CloseModal}
        aria-labelledby="sponsor-modal-title"
        aria-describedby="sponsor-modal-description"
      >
        <Box sx={style}>
          <Typography id="sponsor-modal-title" variant="h6" component="h2">
            Add Sponsor
          </Typography>
          <Typography id="sponsor-modal-description" sx={{ mt: 2 }}>
            You can add sponsor details here.
          </Typography>
          <Button
            onClick={CloseModal}
            variant="contained"
            sx={{ mt: 2, backgroundColor: '#c11', '&:hover': { backgroundColor: '#a00' } }}
          >
            Close
          </Button>
        </Box>
      </Modal>
    </div >
  );
};

export default Page;
