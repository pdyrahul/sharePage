"use client";
import React, { useMemo } from "react";

import useFetchData from "../../../app/hooks/useFetchData"; // Assuming this hook is already implemented
import { getEventList } from "../../../app/services/api"; // Replace with the actual API call function

const Event = () => {
    // Fetch events from API using the custom hook
    const apiRequests = useMemo(() => [getEventList], []); // Memoize API calls
    const { data, isLoading, error } = useFetchData(apiRequests);

    // Process fetched data
    const events = data?.[0]?.data?.map((event) => ({
        id: event.id || 'N/A',
        title: event.eventTitle || 'Untitled Event',
        date: event.startDate || 'Date not available',
        time: event.startTime || 'Time not available',
        hostedBy: event.sponsor?.sponsorName || 'Unknown Host',
        location: event.address || 'Location not available',
        price: `$${event.sponsor?.sponsorPrice || 0}`,
        ticketsSold: event.capacity || 'Not Available',
        image: event.poster || '/images/event-placeholder.svg', // Fallback image
      })) || [];


    if (isLoading) {
        return (
            <div className="loading">
                {[...Array(6)].map((_, index) => (
                    <div className="skeleton-card" key={index}></div>
                ))}
            </div>
        );
    }

    if (error) {
        return <div className="error">Failed to load events.</div>;
    }

    return (
        <div className="event-wrapper">
            <div className="slider" id="carousel">
                <div
                    className="event-list"
                    style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "16px" }}
                >
                    {events.length > 0 ? events.map((event, index) => (
                        <div className="event" key={index}>
                            <div className="img-wrapper">
                                <img src={event.image} alt={event.title} />
                            </div>
                            <div className="title">{event.title}</div>
                            <div className="date">
                                {event.date}
                                <span>Started at {event.time}</span>
                            </div>
                            <div className="hosted">
                                Hosted by <span>{event.hostedBy}</span>
                            </div>
                            <div className="location">
                                <img src="/images/location.svg" alt="Location" />
                                <span>{event.location}</span>
                            </div>
                            <div className="from">From {event.price}</div>
                            <div className="ticket-sold">Ticket Sold: {event.ticketsSold}</div>
                        </div>
                    )) : (
                        <div>No events found.</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Event;
