"use client";
import React, { useMemo, useState, useEffect, useRef } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Box, Modal, Typography, Button, CircularProgress } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import validationSchema from "../app/utils/Schema";
import ImageUpload from "../app/(dashboard)/event-managing/submit-event/component/ImageUpload";
import TicketList from "../app/(dashboard)/event-managing/submit-event/component/TicketList";
import useFetchData from "../app/hooks/useFetchData";
import { useRouter } from 'next/navigation';
import Image from "next/image";
import { getEventCategories, getSponsors, getEventBySlug, updateEvent } from "../app/services/api"; // Assuming updateEvent is your PUT endpoint
import SponsorModal from "../app/(dashboard)/event-managing/submit-event/component/SponsorModal";
import ShareEditor from "./ui/TextEditor/ShareEditor";
import Swal from "sweetalert2";
import { LoadScript, Autocomplete } from "@react-google-maps/api";
import "react-datepicker/dist/react-datepicker.css";
import Axios from "../app/services/axios";

const EventView = ({ slug }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [sponsorModalOpen, setSponsorModalOpen] = useState(false);
    const [address, setAddress] = useState("");
    const [oldEvent, setOldEvent] = useState({});
    const addressAutocompleteRef = useRef(null);
    const addressInputRef = useRef(null);
    useEffect(() => {
        if (typeof window !== 'undefined') {
        }
    }, []);

    const handleAddressChange = (value) => {
        setAddress(value);
        setOldEvent({ ...oldEvent, address: value });
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setTimeout(() => {
                addressAutocompleteRef.current = new window.google.maps.places.Autocomplete(
                    addressInputRef.current,
                    {
                        componentRestrictions: {country: "ca"},
                        fields: ["address_components", "geometry", "icon", "name"],
                        types: ["address"]
                    }
                );

                addressAutocompleteRef.current.addListener("place_changed", async function () {
                    const place = await addressAutocompleteRef.current.getPlace();
                    let address = '';
                    if (place?.address_components) {
                        address = [
                            (place.address_components[0] && place.address_components[0].short_name || ''),
                            (place.address_components[1] && place.address_components[1].short_name || ''),
                            (place.address_components[2] && place.address_components[2].short_name || '')
                        ].join(' ');
                    }
                    handleAddressChange(address);
                });
            },100)
        }
    }, []);
    // Fetching data including the specific event by slug
    const apiRequests = useMemo(() => [getEventCategories, getSponsors, () => getEventBySlug(slug)], [slug]);
    const { data, refetch } = useFetchData(apiRequests);

    // Destructuring data
    const [eventData = {}, sponsorData = {}, eventDraft = {}] = Array.isArray(data) ? data : [];

    // Preparing initial values from eventDraft
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
        featuredEvent: "1",
    };

    const eventCategories = eventData?.data?.event_category.map((event) => ({
        id: event.idspevent,
        title: event.speventTitle,
    })) || [];

    const eventEthnicities = eventData?.data?.event_ethnicity.map((ethnicity) => ({
        id: ethnicity.id,
        name: ethnicity.ethnicity_name,
    })) || [];

    const sponsorList = sponsorData?.data?.map((sponsor) => ({
        id: sponsor.id,
        name: sponsor.sponsorName,
    })) || [];

    const handlePlaceSelect = (setFieldValue) => {
        const place = autocompleteRef.current.getPlace();
        if (place && place.formatted_address) {
            setAddress(place.formatted_address); // Update local state
            setFieldValue("address", place.formatted_address); // Update Formik state
        }
    };

    const handleOpenModal = () => {
        setSponsorModalOpen(true);
    };

    const CloseModal = () => {
        setSponsorModalOpen(false);
        setIsModalOpen(false);
    };

    const handleSubmit = async (values, { resetForm }) => {
        values.address = address ? address : oldEvent.address;
        try {
            const response = await Axios.put(`/event/${slug}`, values);
            console.log('Update response:', response);
            if (response.status === 'Success') {
                Swal.fire("Success", "Event updated successfully!", "success");
                resetForm();
            } else {
                throw new Error('Update failed');
            }
        } catch (error) {
            Swal.fire("Error", "Failed to update the event.", "error");
            console.error('Error updating event:', error);
        }
    };
    const handleSaveAsDraft = (values, formikBag) => {
        handleSubmit(true, values, {
            ...formikBag,
            resetForm: () => {
                formikBag.resetForm();
                router.push('/event-managing/draft-events'); // Redirect after resetForm
            }
        });
    };
    return (
        <div className="event-body">
            <div className="heading">Edit Event Draft</div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                validateOnBlur={true}
                validateOnChange={true}
                onSubmit={handleSubmit}
            >
                {({ errors, touched, isSubmitting, values, setFieldValue }) => {
                    useEffect(() => {
                        Axios.get(`/event/${slug}`).then(response => {
                            const event = response.data.data;
                            setOldEvent(event);
                            console.log('Event data:', event);
                            // Set direct fields
                            const fields = ['eventTitle', 'address', 'capacity', 'youTubeUrl', 'startDate', 'endDate', 'startTime', 'place'];
                            fields.forEach(field => {
                                setFieldValue(field, event[field], false);
                            });
                            // Handle null or undefined cases
                            setFieldValue('refundPolicy', event.refundPolicy || '', false);
                            setFieldValue('endTime', event.endTime || '', false);
                            setFieldValue('ticketUrl', event.ticketUrl || '', false);
                            setFieldValue('featuredEvent', event.isFeatured ? "1" : "0", false); // Assuming you use 'Yes'/'No' for form
                            setFieldValue('eventType', event.event_type === 'paid' ? 'paid' : 'free', false);
                            // Handle nested fields
                            setFieldValue('ethnicity', event.ethnicity.id, false);
                            setFieldValue('category', event.category.idspevent, false);
                            setFieldValue('sponsor', event.sponsor.id, false);
                            // Set description and amenities which are HTML strings
                            setFieldValue('description', event.description, false);
                            setFieldValue('amenities', event.amenities, false);
                            // Handle images (assuming your ImageUpload component can handle URL strings)
                            // setFieldValue('poster', event.poster ? [event.poster] : [], false);
                            // setFieldValue('seatingLayout', event.seatingLayout ? [event.seatingLayout] : [], false);
                            // setFieldValue('galleryImages', event.gallery ? event.gallery.map(img => img.url) : [], false);
                            // Note: 'tickets' is not present in the data structure provided, so commenting out
                            // setFieldValue('tickets', event.tickets || [], false);
                        }).catch(error => {
                            console.error('Error fetching event data:', error);
                        });
                    }, []);

                    return (
                        <Form className="submit-an-event">
                            {/* Title Field */}
                            <div className="input-group in-1-col">
                                <label>
                                    Event Title
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
                                <input
                                    type="text"
                                    name="address"
                                    placeholder="Enter Venue Name"
                                    ref={addressInputRef}
                                    id="googleSearch"
                                    defaultValue={oldEvent.address}
                                />
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
                                                setFieldValue={setFieldValue}
                                            />
                                        )}
                                    </div>
                                </div>
                            )}
                            {/* Description */}
                            {<div className="input-group in-1-col">
                                <label>
                                    Description<span style={{ color: "#EF1D26" }}>*</span>
                                </label>
                                <ShareEditor
                                    name="description"
                                    data={values.description || ""}
                                    setData={(data) => setFieldValue("description", data)}
                                />
                                <ErrorMessage
                                    name="description"
                                    component="div"
                                    style={errorStyles}
                                />
                            </div>}

                            {/* Policy */}
                            {<div className="input-group in-1-col">
                                <label>
                                    Refund Policy<span style={{ color: "#EF1D26" }}>*</span>
                                </label>
                                <ShareEditor
                                    name="refundPolicy"
                                    data={values.refundPolicy || ""}
                                    setData={(data) => setFieldValue("refundPolicy", data)}
                                />
                                <ErrorMessage
                                    name="refundPolicy"
                                    component="div"
                                    style={errorStyles}
                                />
                            </div>}
                            {/* Amenities */}
                            {<div className="input-group in-1-col">
                                <label>
                                    Amenities<span style={{ color: "#EF1D26" }}>*</span>
                                </label>
                                <ShareEditor
                                    name="amenities"
                                    data={values.amenities || ""}
                                    setData={(data) => setFieldValue("amenities", data)}
                                />
                                <ErrorMessage
                                    name="amenities"
                                    component="div"
                                    style={errorStyles}
                                />
                            </div>}
                            {/* Uploader Component for Posters */}
                            <div className="input-group in-0-5-col">
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
                            <div className="input-group in-0-5-col">
                                <label>
                                    Saved Poster<span style={{ color: "#EF1D26" }}>*</span>
                                </label>
                                {oldEvent.poster && (
                                    <div style={{ marginBottom: "10px" }}>
                                        <Image
                                            src={oldEvent.poster}
                                            alt="Current Poster"
                                            width={200}
                                            height={200}
                                        />
                                    </div>
                                )}
                            </div>
                            {/* Uploader Component for Seating Layout */}
                            <div className="input-group in-0-5-col">
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
                            <div className="input-group in-0-5-col">
                                <label>
                                    Saved Seating Layout<span style={{ color: "#EF1D26" }}>*</span>
                                </label>
                                {oldEvent.seatingLayout && (
                                    <div style={{ marginBottom: "10px" }}>
                                        <Image
                                            src={oldEvent.seatingLayout}
                                            alt="Current Poster"
                                            width={200}
                                            height={200}
                                        />
                                    </div>
                                )}
                            </div>
                            {/* Uploader Component for Gallery Images */}
                            <div className="input-group in-0-5-col">
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
                                {oldEvent.gallery && oldEvent.gallery.length > 0 && (
                                    <div style={{ marginBottom: "10px", display: "flex", flexWrap: "wrap" }}>
                                        {oldEvent.gallery.map((image, index) => (
                                            <div key={index} style={{ margin: "5px", display:"flex" }}>
                                                <Image
                                                    src={image.image_url}
                                                    alt={`Gallery Image ${index + 1}`}
                                                    width={150}
                                                    height={150}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <div className="input-group in-0-5-col">
                                <label>
                                    Saved Gallery Images<span style={{ color: "#EF1D26" }}>*</span>
                                </label>
                                {event.galleryImages && (
                                    <div style={{ marginBottom: "10px" }}>
                                        <img
                                            src={event.poster}
                                            alt="Current Poster"
                                            style={{ maxWidth: "100%", height: "auto" }}
                                        />
                                    </div>
                                )}
                            </div>
                            {/* Sponsor Information Section */}
                            <div className="input-group in-1-col"
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
                                            <option key={sponsor.id} value={sponsor.id}>
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
                                <button type="button"
                                    className="submit-button"

                                >
                                    Preview
                                </button>
                                <button type="button"
                                    className="submit-button"
                                    onClick={() => handleSaveAsDraft(values, { resetForm: () => { } })}
                                    disabled={isLoading}
                                >

                                    {isLoading ? (
                                        <CircularProgress size={20} color="inherit" />
                                    ) : (
                                        "Save as Draft"
                                    )}

                                </button>
                                <button
                                    type="submit"
                                    className="submit-button"
                                    disabled={isLoading}
                                    onClick={() => handleSubmit(values, { resetForm: () => { } })}
                                >
                                    {isLoading ? (
                                        <CircularProgress size={20} color="inherit" />
                                    ) : (
                                        "Submit"
                                    )}
                                </button>
                            </div>

                            <ToastContainer />
                        </Form>);
                }}
            </Formik>

            {/* Modal for Preview */}
            <Modal
                open={isModalOpen}
                onClose={CloseModal}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-title" variant="h6">
                        Event Preview
                    </Typography>
                    <div className="preview-content">
                        <p>Event details would be shown here for preview...</p>
                        <Button onClick={CloseModal}>Close</Button>
                    </div>
                </Box>
            </Modal>
            <SponsorModal
                sponsorModalOpen={sponsorModalOpen}
                CloseModal={CloseModal}
            />
            <ToastContainer />
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

export default EventView;