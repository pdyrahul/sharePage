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
    Favourites: "favourites",
  };
  return mapping[filter] || "";
};

const Event = () => {
  const [selectedFilter, setSelectedFilter] = useState("Latest Events");
  const [events, setEvents] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const apiParameter = useMemo(() => getApiParameter(selectedFilter), [selectedFilter]);

  const apiRequests = useMemo(() => {
    return [() => publicEvent(apiParameter)];
  }, [apiParameter]);

  const { data, isLoading, error } = useFetchData(apiRequests);

  useEffect(() => {
    if (error) {
      setErrorMessage("Server Error: Failed to load events.");
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
    } else {
      setErrorMessage("No events data available.");
      setEvents([]);
    }
  }, [data, error]);

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
          borderColor: "divider", // Adding border to the tabs
          "& .MuiTab-root": {
            fontWeight: "bold",
            backgroundColor: "white", // Non-active tab background color
            color: "#000", // Text color for non-active tabs
            "&:hover": {
              backgroundColor: "#f1f1f1", // Hover effect for non-active tab
            },
          },
          "& .Mui-selected": {
            backgroundColor: "#c11", // Active tab background color
            color: "#fff !important", // Active tab text color
          },
        }}
      >
        {["Latest Events", "Today", "This Weekend", "This Month", "Free", "Paid", "Favourites"].map((filter) => (
          <Tab
            key={filter}
            label={filter}
            value={filter}
            sx={{
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
        {isLoading || errorMessage ? (
          <Box sx={{ display: "flex", justifyContent: "space-between", gap: "16px" }}>
            {[...Array(6)].map((_, index) => (
              <Box key={index} sx={{ maxWidth: 345, minHeight: 400 }}>
                <Skeleton variant="rectangular" width={300} height={400} />
              </Box>
            ))}
          </Box>
        ) : errorMessage ? (
          <Typography variant="h6" color="error">
            {errorMessage} {/* Show detailed error message */}
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
