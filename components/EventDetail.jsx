"use client"
import React, { useMemo, useState, useEffect } from 'react';
import { BounceLoader } from 'react-spinners'; // Import the loader
import Event from './ui/Events/Event';
import CustomTabPanel from './ui/muicomponents/CustomTabPanel';
import Link from 'next/link';
import TicketBooking from './Ticket/TicketBooking';
import useFetchData from '../app/hooks/useFetchData';
import { getEventBySlug } from '../app/services/api';
import { MdKeyboardBackspace } from "react-icons/md";
const EventDetail = ({ slug }) => {
    const apiRequests = useMemo(() => [() => getEventBySlug(slug)], [slug]);
    const { data, isLoading, error } = useFetchData(apiRequests);
    const [event, setEvent] = useState(null);

    useEffect(() => {
        if (data && data[0] && data[0].status === "Success") {
            setEvent(data[0].data);
        }
    }, [data]);

    // Helper function to format date and time
    const formatDateTime = (startDateStr, startTimeStr, endDateStr, endTimeStr, address) => {
        if (!startDateStr || !startTimeStr) return 'Date/Time not available';

        const startDate = new Date(`${startDateStr}T${startTimeStr}`);
        const endDate = endDateStr && endTimeStr ? new Date(`${endDateStr}T${endTimeStr}`) : null;

        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = startDate.toLocaleDateString('en-US', options);

        const formatTime = (date) =>
            date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

        const formattedStartTime = formatTime(startDate);
        const formattedEndTime = endDate ? formatTime(endDate) : null;

        const timeString = formattedEndTime
            ? `${formattedStartTime} - ${formattedEndTime}`
            : formattedStartTime;

        return `${formattedDate} · ${timeString} · ${address || 'Address not available'}`;
    };

    if (isLoading) {
        return (
            <div className="body-wrapper">
                <div className="event-wrapper">
                    <div className="event-body">
                        <div className="loading-wrapper" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                            <BounceLoader size={60} color="#36D7B7" loading={isLoading} /> {/* Loader */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (error) return <div>Error: {error.message || "An error occurred while fetching the event."}</div>;
    if (!event) return <div>Event Detail Loading for this event...</div>;

    return (
        <div className="body-wrapper">
            <div className="event-wrapper">
                <div className="event-body">
                    <div className="banner-img">
                        <img
                            src={event.poster}
                            style={{ height: "500px" }}
                            alt=""
                            className='potraitImg' />
                        <img src={event.poster} alt="" className='verticleImg d-none' />
                    </div>
                    <div className="event-detail">
                        <div className="detail-wrapper">
                            <div className="back">
                                <Link href={'/'}><MdKeyboardBackspace /></Link>
                                <span>Return To Home</span>
                            </div>
                            <div className="date">{formatDateTime(event.startDate, event.startTime, event.endDate, event.endTime, event.place)}</div>
                            <div className="event-title">{event.eventTitle}</div>
                            <div className="text" dangerouslySetInnerHTML={{ __html: event.description }}></div>
                            <div className="heading" style={{ padding: "none", textAlign: "left" }}>Event Detail</div>
                            <div className="title">Description</div>
                            <div className="text" dangerouslySetInnerHTML={{ __html: event.description }}></div>
                            {/* <div className="title">Main Music Stage</div>
                            <ul>
                                <li>Capacity: {event.capacity}</li>
                                <li className=''>Highlights: <span dangerouslySetInnerHTML={{ __html: event.description }}></span></li>
                                <li>Special Finale: Not Provided</li>
                                <li>LINE-UP TO BE ANNOUNCED</li>
                            </ul> */}
                            <div className="title">Amenities</div>
                            <ul>
                                <li dangerouslySetInnerHTML={{ __html: event.amenities }}></li>
                            </ul>
                            {/* <div className="title">Additional Festival Features (Open To All)</div>
                            <ul>
                                <li>TBD</li>
                            </ul> */}
                            <div className="title">Location</div>
                            <div className="text">
                                <img src="./images/location.svg" alt="" />
                                <span>{event.address}</span>
                            </div>
                            <div className="title">Venue</div>
                            <div className="text">{event.address.split(',')[0]}</div>
                            <div className="title">Refund Policy</div>
                            <div className="text" dangerouslySetInnerHTML={{ __html: event.refundPolicy }}></div>
                        </div>
                        <div className="ticket-detail">
                            <div className="more-links">
                                <a href="">
                                    <img src="./images/like.svg" alt="" />
                                </a>
                                <a href="">
                                    <img src="./images/favorit.svg" alt="" />
                                </a>
                                <a href="">
                                    <img src="./images/share.svg" alt="" />
                                </a>
                            </div>
                            <div className="ticket-wrapper">
                                <TicketBooking event={event} />
                            </div>
                            <div className="become-sponsor">
                                <button data-bs-toggle="modal" data-bs-target="#become-sponsor-vender">
                                    Become a Sponsors
                                </button>
                            </div>
                            <div className="vertical-banner">
                                <img
                                    src={event.poster}
                                    aspect-ratio="16/9"
                                    alt="" />
                            </div>
                            <div className="map-wrapper">
                                <iframe
                                    src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAPpH4FGQaj_JIJOViHAeHGAjl7RDeW8OQ&q=${encodeURIComponent(event.address)}`}
                                    height={350}
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </div>
                    </div>
                    <div className='my-2'>
                        <CustomTabPanel data={event} />
                    </div>
                    <div className="event-box-wrapper">
                        <div className="main-heading">
                            <div className="heading" style={{ textAlign: "left", padding: "0" }}>Similar Events</div>
                        </div>
                        <Event />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetail;
