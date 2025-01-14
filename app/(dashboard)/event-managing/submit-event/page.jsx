"use client";
import React, { useMemo, useState, useEffect, useRef } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Box, Modal, Typography, CircularProgress } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import validationSchema from "../../../utils/Schema";
import ImageUpload from "./component/ImageUpload";
import TicketList from "./component/TicketList";
import useFetchData from "../../../hooks/useFetchData";
import {
  getEventCategories,
  getSponsors,
  saveEvent,
} from "../../../services/api";
import SponsorModal from "./component/SponsorModal";
import Editor from "../../../../components/ui/TextEditor/Editor";
import Swal from "sweetalert2";
import { LoadScript, Autocomplete } from "@react-google-maps/api";
import "react-datepicker/dist/react-datepicker.css";
const initialValues = {
  category: "",
  ethnicity: "",
  eventTitle: "",
  description: "", // Changed from null to empty string
  refundPolicy: "", // Changed from null to empty string
  amenities: "", // Changed from null to empty string
  address: "",
  place: "",
  eventType: "free",
  capacity: "",
  youTubeUrl: "",
  startDate: "",
  endDate: "",
  startTime: "",
  endTime: "",
  ticketLinkType: "",
  ticketUrl: "",
  tickets: [{ Ticket_type: "", Ticket_price: "", Quantity: "" }],
  poster: "",
  galleryImages: [],
  seatingLayout: "",
  sponsor: "",
  featuredEvent: null,
};


const Page = () => {
  if (typeof window === undefined) {
    return false;
  }
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tickets, setTickets] = useState([]);
  const [sponsorModalOpen, setSponsorModalOpen] = useState(false);
  const [address, setAddress] = useState("");
  const [status, setStatus] = useState(null);

  const handleSaveAsDraft = () => {
    setStatus(1); // Set status to 1 for Draft
    // handleSubmit(onSubmit)(); // Trigger the form submission
  };

  // const handleSubmitForm = () => {
  //    // Set status to 2 for Final Submit
  //   // handleSubmit(onSubmit)(); // Trigger the form submission
  // };
  const autocompleteRef = useRef(null);
  const libraries = ["places"];

  const apiRequests = useMemo(() => [getEventCategories, getSponsors], []);
  const { data, refetch } = useFetchData(apiRequests);

  useEffect(() => {
    getSponsors();
  }, [sponsorModalOpen, getSponsors]); // Add getSponsors if it's not stable

  const handleSubmit = (values, { resetForm }) => {
    console.log("form value", values);
    setStatus(2);
    setIsLoading(true); // Start loading
    const submitData = {
      eventTitle: values.eventTitle,
      category: values.category,
      ethnicity: values.ethnicity,
      address: values.address,
      place: values.place,
      capacity: values.capacity,
      youtubeUrl: values.youtubeUrl,
      startDate: values.startDate,
      startTime: values.startTime,
      endDate: values.endDate,
      endTime: values.endTime,
      eventType: values.eventType,
      description: values.description,
      refundPolicy: values.refundPolicy,
      amenities: values.amenities,
      poster: values.poster, // Assuming it's a file or array of files
      seatingLayout: values.seatingLayout,
      galleryImages: values.galleryImages,
      isFeatured: values.featuredEvent,
      sponsor:values.sponsor,
      status: status, // Add status here (1 for Draft, 2 for Final)
    };
    console.log("form value", submitData);

    // If the event is paid, add ticket-related fields
    if (values.eventType === "paid") {
      submitData.ticketLinkType = values.ticketLinkType;
      if (values.ticketLinkType === "external") {
        submitData.ticketUrl = values.ticketUrl;
      } else if (values.ticketLinkType === "sharePage") {
        submitData.tickets = values.tickets; // Assuming tickets is an array
      }
    }

    saveEvent(submitData)
      .then((response) => {
        resetForm(); // Reset the form after successful submission
        CloseModal(); // Close the modal
        Swal.fire("Success", "Event saved successfully!", "success"); // Success alert
        refetch(); // Optional: to refetch event data after submission
      })
      .catch((error) => {
        Swal.fire("Error", "Something went wrong. Please try again.", "error"); // Error alert
      })
      .finally(() => {
        setIsLoading(false); // Stop loading
      });
  };

  const handleOpenModal = () => {
    setSponsorModalOpen(true);
  };
  const CloseModal = () => {
    setSponsorModalOpen(false);
    setIsModalOpen(false);
  };

  const [eventData = {}, sponsorData = {}] = Array.isArray(data) ? data : [];

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

  // let sponsorList = []; // Declare sponsorList in the appropriate scope
  // if (
  //   sponsorData?.data &&
  //   Array.isArray(sponsorData.data) &&
  //   sponsorData.data.length > 0
  // ) {
  //   sponsorList = sponsorData.data.map((sponsor) => ({
  //     id: sponsor?.id || null,
  //     name: sponsor?.sponsorName || "Unknown",
  //   }));
  // }

  const handlePlaceSelect = (setFieldValue) => {
    const place = autocompleteRef.current.getPlace();
    if (place && place.formatted_address) {
      setAddress(place.formatted_address); // Update local state
      setFieldValue("address", place.formatted_address); // Update Formik state
    }
  };

  return (
    <div className="event-body">
      <div className="heading">Submit an Event</div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        validateOnBlur={true} // Enable validation on blur (when user clicks out of a field)
        validateOnChange={true} // Enable validation on field change
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, values }) => (
          <Form className="submit-an-event">
            {/* Title Field */}
            <div className="input-group in-1-col">
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
                style={errorStyles}
              />
            </div>

            {/* Sub Category Field */}
            {/* <div className="input-group in-0-5-col">
              <label>
                Sub Category
                <span style={{ color: "#EF1D26" }}>*</span>
              </label>
              <Field
                type="text"
                name="event"
                placeholder="Enter Sub Category"
              />
              <ErrorMessage name="event" component="span" style={errorStyles} />
            </div> */}

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
                style={errorStyles}
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
                style={errorStyles}
              />
            </div>
            {/* Address */}
            <div className="input-group in-1-col">
              <LoadScript
                googleMapsApiKey="AIzaSyAPpH4FGQaj_JIJOViHAeHGAjl7RDeW8OQ"
                libraries={libraries} // Use the static libraries array
              >
                <div style={{ display: "inline-block", width: "100%" }}>
                  <label>
                    Event Address<span style={{ color: "#EF1D26" }}>*</span>
                  </label>
                  <Autocomplete
                    onLoad={(autocomplete) =>
                      (autocompleteRef.current = autocomplete)
                    }
                    onPlaceChanged={() => handlePlaceSelect(setFieldValue)}
                  >
                    <Field
                      type="text"
                      name="address"
                      placeholder="Enter Venue Name"
                      value={address}
                      onChange={(e) => {
                        setAddress(e.target.value);
                        setFieldValue("address", e.target.value);
                      }}
                    />
                  </Autocomplete>
                  <ErrorMessage
                    name="address"
                    component="span"
                    style={errorStyles}
                  />
                </div>
              </LoadScript>
            </div>
            {/* Venue Name */}
            <div className="input-group in-0-75-col">
              <label>
                Venue<span style={{ color: "#EF1D26" }}>*</span>
              </label>
              <Field type="text" name="place" placeholder="Enter Venue Name" />
              <ErrorMessage name="place" component="span" style={errorStyles} />
            </div>
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
                style={errorStyles}
              />
            </div>
            {/* YouTube URL Field */}
            <div className="input-group in-1-col">
              <label>
                YouTube URL<span style={{ color: "#EF1D26" }}>*</span>
              </label>
              <Field
                type="url"
                name="youTubeUrl"
                placeholder="Enter YouTube URL"
              />
              <ErrorMessage
                name="youTubeUrl"
                component="span"
                style={errorStyles}
              />
            </div>

            {/* Dates and Times */}
            <div className="input-group  in-0-25-col ">
              <label>
                Start Date<span style={{ color: "#EF1D26" }}>*</span>
              </label>
              <Field type="date" name="startDate" />
              <ErrorMessage
                name="startDate"
                component="span"
                style={errorStyles}
              />
            </div>
            <div className="input-group in-0-25-col ">
              <label>
                Start Time<span style={{ color: "#EF1D26" }}>*</span>
              </label>
              <Field type="time" name="startTime" />
              <ErrorMessage
                name="startTime"
                component="span"
                style={errorStyles}
              />
            </div>

            <div className="input-group  in-0-25-col ">
              <label>
                End Date<span style={{ color: "#EF1D26" }}>*</span>
              </label>
              <Field type="date" name="endDate" />
              <ErrorMessage
                name="endDate"
                component="span"
                style={errorStyles}
              />
            </div>
            <div className="input-group in-0-25-col ">
              <label>
                End Time<span style={{ color: "#EF1D26" }}>*</span>
              </label>
              <Field type="time" name="endTime" />
              <ErrorMessage
                name="endTime"
                component="span"
                style={errorStyles}
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
                style={errorStyles}
              />
            </div>

            {/* Conditional rendering for ticket link if event is paid */}
            {values.eventType === "paid" && (
              <div
                className="sellTicket"
                style={{
                  border: "2px solid #d9dce0",
                  padding: "15px",
                  width: "100%",
                }}
              >
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
                    style={errorStyles}
                  />

                  {/* Conditional Rendering Based on Ticket Link Type */}
                  {values.ticketLinkType === "external" && (
                    <div className="input-group in-0-75-col">
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
                        style={errorStyles}
                      />
                    </div>
                  )}
                  {values.ticketLinkType === "sharePage" && (
                    <TicketList
                      name="tickets"
                      setStudentValue={setFieldValue}
                    />
                  )}
                </div>
              </div>
            )}

            {/* Organizer Fields */}
            {/* <div className="submit-an-event my-3">
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
                  style={errorStyles}
                />
              </div>

         
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
                  style={errorStyles}
                />
              </div>

           
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
                  style={errorStyles}
                />
              </div>
            </div> */}
            {/* Description */}
            <div className="input-group in-1-col">
              <label>
                Description<span style={{ color: "#EF1D26" }}>*</span>
              </label>
              <Field name="description">
                {() => (
                  <Editor
                    data={values.description || ""}
                    setData={(data) => setFieldValue("description", data)}
                  />
                )}
              </Field>
              <ErrorMessage
                name="description"
                component="div"
                style={errorStyles}
              />
            </div>

            {/* Policy */}
            <div className="input-group in-1-col">
              <label>
                Refund Policy<span style={{ color: "#EF1D26" }}>*</span>
              </label>
              <Field name="refundPolicy">
                {() => (
                  <Editor
                    data={values.refundPolicy || ""}
                    setData={(data) => setFieldValue("refundPolicy", data)}
                  />
                )}
              </Field>
              <ErrorMessage
                name="refundPolicy"
                component="div"
                style={errorStyles}
              />
            </div>
            {/* Amenities */}
            <div className="input-group in-1-col">
              <label>
                Amenities<span style={{ color: "#EF1D26" }}>*</span>
              </label>
              <Field name="amenities">
                {() => (
                  <Editor
                    data={values.amenities || ""}
                    setData={(data) => setFieldValue("amenities", data)}
                  />
                )}
              </Field>
              <ErrorMessage
                name="amenities"
                component="div"
                style={errorStyles}
              />
            </div>
            {/* 
            Featured Artist For This Event
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
            </div> */}

            {/* Co-Host Name */}
            {/* <div className="input-group in-3-col">
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
            </div> */}
            {/* Uploader Component for Posters */}
            <div className="input-group in-1-col">
              <label>
                Upload Poster(s)<span style={{ color: "#EF1D26" }}>*</span>
              </label>
              <ImageUpload
                name="poster"
                setFieldValue={setFieldValue}
                multiple={false}
              />
              <ErrorMessage
                name="poster"
                component="span"
                style={errorStyles}
              />
            </div>

            {/* Uploader Component for Seating Layout */}
            <div className="input-group in-1-col">
              <label>
                Upload Seating Layout<span style={{ color: "#EF1D26" }}>*</span>
              </label>
              <ImageUpload
                name="seatingLayout"
                setFieldValue={setFieldValue}
                multiple={false}
              />
              <ErrorMessage
                name="seatingLayout"
                component="span"
                style={errorStyles}
              />
            </div>

            {/* Uploader Component for Gallery Images */}
            <div className="input-group in-1-col">
              <label>
                Upload Images For Gallery
                <span style={{ color: "#EF1D26" }}>*</span>
              </label>
              <ImageUpload name="galleryImages" setFieldValue={setFieldValue} />
              <ErrorMessage
                name="galleryImages"
                component="span"
                style={errorStyles}
              />
            </div>

            {/* Sponsor Information Section */}
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

            {/* Sponsor Selection */}
            <div className="input-group in-3-col">
              <label>
                Select Sponsor <span style={{ color: "#EF1D26" }}>*</span>
              </label>
              <div
                name="sponsor"
                style={{ display: "flex", alignItems: "center", width: "100%" }}
              >
                <Field as="select" name="sponsor">
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
              <ErrorMessage
                name="sponsor"
                component="span"
                style={errorStyles}
              />
            </div>

            {/* Featured Event Option */}
            <div className="input-group in-3-col">
              <label>Make Featured Event (35 USD)</label>
              <div
                className="radiobttn"
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
                role="group"
                aria-labelledby="radio-group"
              >
                <label>
                  <Field type="radio" name="featuredEvent" value="1" />
                  Yes
                </label>
                <label>
                  <Field type="radio" name="featuredEvent" value="0" />
                  No
                </label>
              </div>
              <ErrorMessage
                name="featuredEvent"
                component="div"
                style={errorStyles}
              />
            </div>

            {/* Submit Button */}
            <div className="main-btn">
              <button type="button" className="submit-button">
                Preview
              </button>
              <button type="button" className="submit-button" onClick={handleSaveAsDraft}>
                Save as Draft
              </button>
              <button
                type="submit"
                className="submit-button"
                disabled={isLoading}
              >
                {" "}
                {isLoading ? (
                  <CircularProgress size={20} color="inherit" />
                ) : (
                  "Submit"
                )}{" "}
              </button>
            </div>

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
            Select { }
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
        refetch={refetch}
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
const errorStyles = {
  color: "#c11",
  fontSize: "12px",
  position: "absolute",
  fontWeight: "bold",
  top: "0",
  right: "0",
};

export default Page;
