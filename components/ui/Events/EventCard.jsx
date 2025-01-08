"use client";
import React from "react";
import Link from "next/link";
import event from "../../../public/images/event.svg";
import Image from "next/image";
import { HiOutlineLocationMarker } from "react-icons/hi";
const EventCard = ({ id, title, date, time, host, location, price }) => {
  return (
    <Link href={`/events/${id}`} style={{ textDecoration: "none" }}>
      <div className="event">
        <div className="img-wrapper">
          <Image
            src={event}
            alt="Event"
            layout="responsive"
            width={16} // Aspect ratio width
            height={9} // Aspect ratio height
          />
        </div>
        <div className="title">{title}</div>
        <div className="date">
          {date}
          <span className="px-1">Started at {time}</span>
        </div>
        <div className="hosted">
          Hosted by <span>{host}</span>
        </div>
        <div className="location">
          <HiOutlineLocationMarker />
          <span className="mx-2">{location}</span>
        </div>
        <div className="from">From {price}</div>
      </div>
    </Link>
  );
};

export default EventCard;
