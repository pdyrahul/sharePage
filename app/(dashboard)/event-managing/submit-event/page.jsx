"use client";
import React, { useState, useMemo, useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Modal, Box, Typography, Button } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import validationSchema from "../../../utils/Schema";
import ImageUpload from "./component/ImageUpload";
import TicketList from "./component/TicketList";
import useFetchData from "../../../hooks/useFetchData";
import { getEventCategories, getSponsors } from "../../../services/api";
import SponsorModal from "./component/SponsorModal";
import "@vaadin/rich-text-editor/theme/material/vaadin-rich-text-editor.js";
const initialValues = {
  category: "",
  ethnicity: "",
  eventTitle: "",
  event: "",
  description: null,
  policy: null,
  country: "",
  state: "",
  city: "",
  address: "",
  place: "",
  eventType: "free",
  registrationRequired: "yes",
  capacity: "",
  organizerName: "",
  organizerEmail: "",
  organizerPhone: "",
  startDate: "",
  endDate: "",
  startTime: "",
  endTime: "",
  ticketLinkType: "",
  ticketUrl: "",
  tickets: [{ name: "", price: "", quantity: "" }],
  featuredEvent: "no",
  posterUpload: null,
  galleryUpload: [],
  layoutUpload: null,
  selectedSponsor: "",
};

const Page = () => {

  if (typeof window === undefined) {
    return false;
}
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [sponsorModalOpen, setSponsorModalOpen] = useState(false);
  const [tickets, setTickets] = useState(
    new Map([
      [
        Date.now().toString(),
        { name: "", price: "", quantity: "", isNew: true },
      ],
    ])
  );
  const apiRequests = useMemo(() => [getEventCategories, getSponsors], []);
  const { data, loading, error } = useFetchData(apiRequests);

  const handleSubmit = (values, { resetForm }) => {
    console.log("Form data:", values);
    toast.success("Event submitted successfully!");
    setTickets([]);
    resetForm();
  };
  const openModal = (content) => {
    setModalContent(content); // Set the modal content dynamically
    setIsModalOpen(true);
  };
  const handleOpenModal = () => {
    setSponsorModalOpen(true);
  };
  const CloseModal = () => {
    setSponsorModalOpen(false);
    setIsModalOpen(false);
  };

  const [eventData, sponsorData] = data;

  const eventCategories =
    eventData?.data?.event_category.map((event) => ({
      id: event.idspevent,
      title: event.speventTitle,
    })) || [];

  const eventEthnicities =
    eventData?.data?.event_ethnicity.map((ethnicity) => ({
      id: ethnicity.id,
      name: ethnicity.ethnicity_name,
    })) || [];

  const sponsorList =
    sponsorData?.data?.map((sponsor) => ({
      id: sponsor.id,
      name: sponsor.sponsorName,
    })) || [];

  return (
    <div className="event-body">
      <div className="heading">Submit an Event</div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, values }) => (
          <Form className="submit-an-event">
            {/* Category Field */}
            <div className="input-group in-0-5-col">
              <label>
                Category<span style={{ color: "#EF1D26" }}>*</span>
              </label>
              <Field as="select" name="category">
                <option value="">Select Category</option>
                {eventCategories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.title}
                  </option>
                ))}
              </Field>
              <ErrorMessage
                name="category"
                component="span"
                style={{ color: "red" }}
              />
            </div>

            {/* Ethnicity Field */}
            <div className="input-group in-0-5-col">
              <label>
                Ethnicity<span style={{ color: "#EF1D26" }}>*</span>
              </label>
              <Field as="select" name="ethnicity">
                <option value="">Select Ethnicity</option>
                {eventEthnicities.map((ethnicity) => (
                  <option key={ethnicity.id} value={ethnicity.id}>
                    {ethnicity.name}
                  </option>
                ))}
              </Field>
              <ErrorMessage
                name="ethnicity"
                component="span"
                style={{ color: "red" }}
              />
            </div>
            {/* Title Field */}
            <div className="input-group in-0-5-col">
              <label>
                Event Title (Max 60 characters)
                <span style={{ color: "#EF1D26" }}>*</span>
              </label>
              <Field
                type="text"
                name="eventTitle"
                placeholder="Enter Event Title"
              />
              <ErrorMessage
                name="eventTitle"
                component="span"
                style={{ color: "red" }}
              />
            </div>
            {/* Sub Category Field */}
            <div className="input-group in-0-5-col">
              <label>
                Write a catchy phrase for your event (Max 100 characters)
                <span style={{ color: "#EF1D26" }}>*</span>
              </label>
              <Field
                type="text"
                name="event"
                placeholder="Enter Sub Category"
              />
              <ErrorMessage
                name="event"
                component="span"
                style={{ color: "red" }}
              />
            </div>

            {/* Description */}
            <div className="input-group input-group in-1-col">
              <label>
                Description<span style={{ color: "#EF1D26" }}>*</span>
              </label>
              <Field name="description">
                {({ field }) => (
                  <vaadin-rich-text-editor
                    {...field}
                    value={values.description || ''}
                    style={{ width: "100%" }}
                    on-value-changed={(e) =>
                      setFieldValue("description", e.target.value)
                    }
                  />
                )}
              </Field>
            </div>

            {/* Return Policy */}
            <div className="input-group input-group in-1-col">
              <label>
                Policy<span style={{ color: "#EF1D26" }}>*</span>
              </label>
              <Field name="policy">
                {({ field }) => (
                  <vaadin-rich-text-editor
                    {...field}
                    value={values.policy || ''}
                    style={{ width: "100%" }}
                    on-value-changed={(e) =>
                      setFieldValue("policy", e.target.value)
                    }
                  />
                )}
              </Field>
            </div>
            {/* Address */}
            <div className="input-group in-0-5-col">
              <label>
                Event Address<span style={{ color: "#EF1D26" }}>*</span>
              </label>
              <Field
                type="text"
                name="address"
                placeholder="Enter Venue Name"
              />
              <ErrorMessage
                name="address"
                component="span"
                style={{ color: "red" }}
              />
            </div>
            {/* Venue Name */}
            <div className="input-group in-0-5-col">
              <label>
                Name Of Place<span style={{ color: "#EF1D26" }}>*</span>
              </label>
              <Field type="text" name="place" placeholder="Enter Venue Name" />
              <ErrorMessage
                name="place"
                component="span"
                style={{ color: "red" }}
              />
            </div>

            {/* Event Type - Radio Buttons */}
            <div className="input-group in-3-col">
              <label>Event Type</label>
              <div
                className="radiobttn"
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
                role="group"
                aria-labelledby="radio-group"
              >
                <label>
                  <Field type="radio" name="eventType" value="free" />
                  Free
                </label>
                <label>
                  <Field type="radio" name="eventType" value="paid" />
                  Paid
                </label>
              </div>
              <ErrorMessage
                name="eventType"
                component="div"
                style={{ color: "red" }}
              />
            </div>

            <div className="input-group in-3-col">
              <label>
                Registration Needed<span style={{ color: "#EF1D26" }}>*</span>
              </label>
              <div
                className="radiobttn"
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
                role="group"
                aria-labelledby="radio-group"
              >
                <label>
                  <Field type="radio" name="registrationRequired" value="yes" />
                  Yes
                </label>
                <label>
                  <Field type="radio" name="registrationRequired" value="no" />
                  No
                </label>
              </div>
              <ErrorMessage
                name="registrationRequired"
                component="div"
                style={{ color: "red" }}
              />
            </div>

            {/* Registration Needed - Radio Buttons */}

            {/* Capacity Field */}
            <div className="input-group in-3-col">
              <label>
                Capacity<span style={{ color: "#EF1D26" }}>*</span>
              </label>
              <Field
                type="number"
                name="capacity"
                placeholder="Enter Capacity"
              />
              <ErrorMessage
                name="capacity"
                component="span"
                style={{ color: "red" }}
              />
            </div>
            {values.eventType === "paid" && (
              <div className="submit-an-event">
                {/* Add Ticket Link Field */}
                <div className="input-group in-1-col">
                  <label>
                    Add Ticket Link<span style={{ color: "#EF1D26" }}>*</span>
                  </label>
                  <div
                    className="in-0-5-col radiobttn"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                    role="group"
                    aria-labelledby="radio-group"
                  >
                    <label>
                      <Field
                        type="radio"
                        name="ticketLinkType"
                        value="external"
                      />
                      External
                    </label>
                    <label>
                      <Field
                        type="radio"
                        name="ticketLinkType"
                        value="sharePage"
                      />
                      Sell Ticket on TheSharePage
                    </label>
                  </div>
                  <ErrorMessage
                    name="ticketLinkType"
                    component="div"
                    style={{ color: "red" }}
                  />

                  {/* Conditional Rendering Based on Ticket Link Type */}
                  {values.ticketLinkType === "external" && (
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
                      <ErrorMessage
                        name="ticketUrl"
                        component="span"
                        style={{ color: "red" }}
                      />
                    </div>
                  )}
                  {values.ticketLinkType === "sharePage" && (
                    <TicketList
                      name="tickets"
                      setStudentValue={setFieldValue}
                    />
                  )}
                  <ErrorMessage
                    name="ticketLinkType"
                    component="span"
                    style={{ color: "red" }}
                  />
                </div>
              </div>
            )}
            {/* Conditional Field Based on Event Type */}
            <div className="submit-an-event my-3">
              {/* Organizer Name Field */}
              <div className="input-group in-3-col">
                <label>
                  Organizer Name<span style={{ color: "#EF1D26" }}>*</span>
                </label>
                <Field
                  type="text"
                  name="organizerName"
                  placeholder="Enter Organizer Name"
                />
                <ErrorMessage
                  name="organizerName"
                  component="span"
                  style={{ color: "red" }}
                />
              </div>

              {/* Organizer Email Field */}
              <div className="input-group in-3-col">
                <label>
                  Organizer Email<span style={{ color: "#EF1D26" }}>*</span>
                </label>
                <Field
                  type="email"
                  name="organizerEmail"
                  placeholder="Enter Organizer Email"
                />
                <ErrorMessage
                  name="organizerEmail"
                  component="span"
                  style={{ color: "red" }}
                />
              </div>

              {/* Organizer Phone Field */}
              <div className="input-group in-3-col">
                <label>
                  Organizer Phone<span style={{ color: "#EF1D26" }}>*</span>
                </label>
                <Field
                  type="text"
                  name="organizerPhone"
                  placeholder="Enter Organizer Phone"
                />
                <ErrorMessage
                  name="organizerPhone"
                  component="span"
                  style={{ color: "red" }}
                />
              </div>
              {/* Start Date Field */}
              <div className="input-group  in-0-25-col ">
                <label>
                  Start Date<span style={{ color: "#EF1D26" }}>*</span>
                </label>
                <Field type="date" name="startDate" />
                <ErrorMessage
                  name="startDate"
                  component="span"
                  style={{ color: "red" }}
                />
              </div>

              {/* End Date Field */}
              <div className="input-group  in-0-25-col ">
                <label>
                  End Date<span style={{ color: "#EF1D26" }}>*</span>
                </label>
                <Field type="date" name="endDate" />
                <ErrorMessage
                  name="endDate"
                  component="span"
                  style={{ color: "red" }}
                />
              </div>

              {/* Start Time Field */}
              <div className="input-group in-0-25-col ">
                <label>
                  Start Time<span style={{ color: "#EF1D26" }}>*</span>
                </label>
                <Field type="time" name="startTime" />
                <ErrorMessage
                  name="startTime"
                  component="span"
                  style={{ color: "red" }}
                />
              </div>

              {/* End Time Field */}
              <div className="input-group in-0-25-col ">
                <label>
                  End Time<span style={{ color: "#EF1D26" }}>*</span>
                </label>
                <Field type="time" name="endTime" />
                <ErrorMessage
                  name="endTime"
                  component="span"
                  style={{ color: "red" }}
                />
              </div>
              {/* Featured Artist For This Event */}
              <div className="input-group in-3-col">
                <label className="py-2">Featured Artist For This Event</label>
                <button
                  type="button"
                  onClick={() => openModal("Featured Artist")}
                  style={{
                    color: "#fff",
                    background: "#c11",
                    padding: "5px 10px",
                    borderRadius: "5px",
                  }}
                >
                  Select Friends
                </button>
              </div>

              {/* Co-Host Name */}
              <div className="input-group in-3-col">
                <label className="py-2">Co-Host Name</label>
                <button
                  type="button"
                  onClick={() => openModal("Co-Host Name")}
                  style={{
                    color: "#fff",
                    background: "#c11",
                    padding: "5px 10px",
                    borderRadius: "5px",
                  }}
                >
                  Select Friends
                </button>
              </div>
            </div>
            {/* Uploader Component */}
            <div className="input-group in-1-col">
              <label>
                Upload Poster(s)<span style={{ color: "#EF1D26" }}>*</span>
              </label>
              <ImageUpload
                name="posterUpload"
                setFieldValue={setFieldValue}
                multiple={false}
              />
              <ErrorMessage
                name="posterUpload"
                component="span"
                style={{ color: "red" }}
              />
            </div>
            <div className="input-group in-1-col">
              <label>
                Upload Seating Layout<span style={{ color: "#EF1D26" }}>*</span>
              </label>
              <ImageUpload
                name="layoutUpload"
                setFieldValue={setFieldValue}
                multiple={false}
              />
            </div>
            <div className="input-group in-1-col">
              <label>
                Upload Images For Gallery
                <span style={{ color: "#EF1D26" }}>*</span>
              </label>
              <ImageUpload name="galleryUpload" setFieldValue={setFieldValue} />
            </div>

            {/* Sponser Information */}
            <div
              className="input-group in-1-col"
              style={{
                backgroundColor: "#ffb8bd",
                color: "#000",
                padding: "10px",
                fontWeight: "bold",
                marginBottom1: "20px",
              }}
            >
              <h5 className="sponser-title m-0 ">SPONSER INFORMATION </h5>
            </div>
            <div className="input-group in-3-col ">
              <label>
                Select Sponsor <span style={{ color: "#EF1D26" }}>*</span>
              </label>
              <div
                name="selectedSponser"
                style={{ display: "flex", alignItems: "center", width: "100%" }}
              >
                <Field as="select" name="selectedSponsor">
                  <option value="">Select Sponsor</option>
                  {sponsorList.map((sponsor) => (
                    <option key={sponsor.id} value={sponsor.name}>
                      {sponsor.name}
                    </option>
                  ))}
                </Field>

                {/* Button to open modal */}
                <button
                  type="button"
                  onClick={handleOpenModal}
                  style={{
                    margin: "10px",
                    background: "#c11",
                    color: "#fff",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    width: "200px",
                  }}
                >
                  Add Sponsor
                </button>
              </div>
            </div>
            <div className="input-group in-3-col">
              <label>Make Featured Event (35 USD)</label>
              <div
                className="radiobttn"
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
                role="group"
                aria-labelledby="radio-group"
              >
                <label>
                  <Field type="radio" name="featuredEvent" value="yes" />
                  Yes
                </label>
                <label>
                  <Field type="radio" name="featuredEvent" value="no" />
                  No
                </label>
              </div>
              <ErrorMessage
                name="featuredEvent"
                component="div"
                style={{ color: "red" }}
              />
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
        open={isModalOpen} // Check if it's the "Select Friends" modal
        onClose={CloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-title" variant="h6">
            Select {modalContent}
          </Typography>
          <div className="friends-list">
            <p>Friends list goes here...</p>
            <button onClick={CloseModal}>Close</button>
          </div>
        </Box>
      </Modal>
      <SponsorModal
        sponsorModalOpen={sponsorModalOpen}
        CloseModal={CloseModal}
      />
    </div>
  );
};
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default Page;
