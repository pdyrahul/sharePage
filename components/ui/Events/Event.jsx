"use client";
import React, { useState, useMemo, useEffect } from "react";
import useFetchData from "../../../app/hooks/useFetchData";
import { publicEvent } from "../../../app/services/api";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Tabs, Tab } from "@mui/material";
import { Navigation } from "swiper/modules";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Skeleton,
} from "@mui/material";
import { CiLocationOn } from "react-icons/ci";
import Link from "next/link";

const getApiParameter = (filter) => {
  const mapping = {
    "Latest Events": "",
    Today: "today",
    "This Weekend": "thisWeek",
    "This Month": "thisMonth",
    Free: "free",
    Paid: "paid",
    Favourites: "favourite",
  };
  return mapping[filter] || "";
};

const Event = () => {
  const [selectedFilter, setSelectedFilter] = useState("Latest Events");
  const [events, setEvents] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [eventWithError, setEventWithError] = useState(null);
  const apiParameter = useMemo(() => getApiParameter(selectedFilter), [selectedFilter]);

  const apiRequests = useMemo(() => {
    return [() => publicEvent(apiParameter)];
  }, [apiParameter]);

  const { data, isLoading, error } = useFetchData(apiRequests);

  useEffect(() => {
    console.log("Loading state:", isLoading); // Debugging to check loading state

    if (isLoading) {
      setErrorMessage(""); // Clear any previous error while loading
      return;
    }

    if (error) {
      const errorData = error?.message || "Unknown error";
      
      // Check if the error contains "Data not found"
      if (errorData.includes("Data not found") || error?.errors?.message?.includes("Data not found")) {
        setErrorMessage(`No data available for "${selectedFilter}".`);
      } else {
        setErrorMessage("Server Error: No data available for.");
      }
      setEventWithError(selectedFilter); // Capture the selected filter name as the event name with error
      setEvents([]); // Reset events on error
    } else if (data?.[0]?.data?.length) {
      const processedEvents = data[0].data.map((event) => ({
        id: event.id || "N/A",
        slug: event.slug || "default-slug",
        title: event.eventTitle || "Untitled Event",
        date: event.startDate
          ? new Date(event.startDate).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })
          : "Date not available",
        time: event.startTime
          ? new Date(`1970-01-01T${event.startTime}`).toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
          })
          : "Time not available",
        hostedBy: event.sponsor?.sponsorName || "Unknown Host",
        location: event.address || "Location not available",
        price: `$${event.sponsor?.sponsorPrice || 0}`,
        ticketsSold: event.capacity || "Not Available",
        image: event.poster || "/images/event-placeholder.svg",
      }));

      setEvents(processedEvents);
      setErrorMessage(""); // Clear any error
      setEventWithError(null); // Clear error event name
    } else {
      setErrorMessage("No events found");
      setEventWithError(selectedFilter); // Capture the selected filter name as the event name with error
      setEvents([]);
    }
  }, [data, error, isLoading, selectedFilter]);

  return (
    <>
      <Tabs
        value={selectedFilter}
        onChange={(_, newValue) => setSelectedFilter(newValue)}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="Event Filters"
        sx={{
          marginTop: '2.5rem',
          border: 1,
          borderColor: "#c11 !important",
          "& .MuiTab-root": {
            fontWeight: "bold",
            backgroundColor: "white", // Non-active tab background color
            color: "#c11", // Text color for non-active tabs
            "&:hover": {
              backgroundColor: "#f1f1f1", // Hover effect for non-active tab
            },
          },
          "& .Mui-selected": {
            backgroundColor: "#c11", // Active tab background color
            color: "#fff !important", // Active tab text color
            border:"none"
          },
          "& .MuiTabs-indicator":{backgroundColor: "#c11",}
        }}
      >
        {["Latest Events", "Today", "This Weekend", "This Month", "Free", "Paid", "Favourites"].map((filter) => (
          <Tab
            key={filter}
            label={filter}
            value={filter}
            height="20px"
            sx={{
              fontWeight:"300",
              textTransform: "none",
              fontSize: "16px",
              color: selectedFilter === filter ? "#fff" : "#000", // Active tab text color adjustment
            }}
          />
        ))}
      </Tabs>

      <Box className="event-wrapper" sx={{ position: "relative", paddingTop: "40px" }}>
        <h3 style={{ display: "inline-block", borderBottom: "3px solid #c11", padding: "0 4px" }}>
          {selectedFilter}
        </h3>

        {/* Show Skeleton if still loading */}
        {isLoading ? (
          <Box sx={{ display: "flex", justifyContent: "space-between", gap: "16px" }}>
            {[...Array(6)].map((_, index) => (
              <Box key={index} sx={{ maxWidth: 345, minHeight: 400 }}>
                <Skeleton variant="rectangular" width={200} height={400} />
              </Box>
            ))}
          </Box>
        ) : errorMessage ? (
          <Typography variant="h6" color="error" align="center">
            {eventWithError ? `${eventWithError} - ${errorMessage}` : errorMessage}
          </Typography>
        ) : (
          <Swiper
            modules={[Navigation]}
            spaceBetween={16}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            breakpoints={{
              1024: { slidesPerView: 4 },
              768: { slidesPerView: 2 },
            }}
            className="mySwiper"
          >
            {events.map((event, index) => (
              <SwiperSlide key={index}>
                <Link href={`/events/${event.slug}`} style={{ textDecoration: "none" }}>
                  <Card sx={{ maxWidth: 345, minHeight: 400, boxShadow: 3, cursor: "pointer" }}>
                    <CardMedia
                      component="img"
                      height="180"
                      image={event.image}
                      alt={event.title}
                      sx={{
                        transition: "transform 0.3s ease-in-out",
                        "&:hover": { transform: "scale(1.05)" },
                      }}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5">
                        {event.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <strong style={{ color: "#c11", fontSize: "18px" }}>{event.date}</strong>
                        <strong style={{ color: "#7649B3" }}> started at {event.time}</strong> <br />
                        <strong>Hosted by:</strong> {event.hostedBy} <br />
                        <strong>
                          <CiLocationOn style={{ color: "#c11", fontSize: "21px" }} />
                        </strong>{" "}
                        {event.location} <br />
                        <strong>Price:</strong> {event.price} <br />
                        <strong>Tickets Sold:</strong> {event.ticketsSold}
                      </Typography>
                    </CardContent>
                  </Card>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {/* Swiper Navigation Buttons */}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </Box>
    </>
  );
};

export default Event;
