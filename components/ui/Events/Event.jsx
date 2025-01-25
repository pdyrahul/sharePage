"use client";
import React, { useMemo, createContext, useContext } from "react";
import useFetchData from "../../../app/hooks/useFetchData";
import { getEventList } from "../../../app/services/api";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Skeleton,
  useTheme,
} from "@mui/material";
import { CiLocationOn } from "react-icons/ci";
import Link from "next/link";

// Theme Context
const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const theme = useTheme();
  const toggleTheme = () => {
    theme.palette.mode = theme.palette.mode === "light" ? "dark" : "light";
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

const Event = () => {
  const apiRequests = useMemo(() => [getEventList], []);
  const { data, isLoading, error } = useFetchData(apiRequests);
  const { theme } = useContext(ThemeContext);

  const events =
    data?.[0]?.data?.map((event) => ({
      id: event.id || "N/A",
      slug: event.slug || "default-slug",
      title: event.eventTitle || "Untitled Event",
      date: event.startDate
        ? new Date(event.startDate)
            .toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })
            .replace(/ /g, "-")
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
    })) || [];

  if (isLoading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "space-between", gap: "16px" }}>
        {[...Array(6)].map((_, index) => (
          <Box key={index} sx={{ maxWidth: 345, minHeight: 400 }}>
            <Skeleton variant="rectangular" height={180} />
            <Skeleton variant="text" height={40} />
            <Skeleton variant="text" />
            <Skeleton variant="text" />
          </Box>
        ))}
      </Box>
    );
  }

  if (error) {
    return (
      <Typography variant="h6" color="error">
        Failed to load events.
      </Typography>
    );
  }

  return (
    <Box className="event-wrapper" sx={{ position: "relative", paddingTop: "40px" }}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          1024: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 2,
          },
        }}
        className="mySwiper"
      >
        {events.length > 0
          ? events.map((event, index) => (
              <SwiperSlide key={index}>
                <Link href={`/events/${event.slug}`} style={{ textDecoration: "none" }}>
                  <Card
                    sx={{
                      maxWidth: 345,
                      minHeight: 400,
                      boxShadow: theme.shadows[3],
                      cursor: "pointer",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="180"
                      image={event.image}
                      alt={event.title}
                      sx={{
                        transition: "transform 0.3s ease-in-out",
                        "&:hover": {
                          transform: "scale(1.05)",
                        },
                      }}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        color={theme.palette.primary.main}
                      >
                        {event.title}
                      </Typography>
                      <Typography variant="body2" color={theme.palette.text.secondary}>
                        <strong style={{ color: "#c11", fontSize: "18px" }}>
                          {event.date}
                        </strong>
                        <strong style={{ color: "#7649B3" }}> started at {event.time}</strong>{" "}
                        <br />
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
            ))
          : null}
      </Swiper>
    </Box>
  );
};

export default function ThemedEvent() {
  return (
    <ThemeProvider>
      <Event />
    </ThemeProvider>
  );
}
