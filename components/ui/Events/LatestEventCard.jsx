"use client";
import React from "react";
import Link from "next/link";
import event from "../../../public/images/event.svg";
import Image from "next/image";
import { HiOutlineLocationMarker } from "react-icons/hi";

const LatestEventCard = ({ event }) => {
  return (
    <Link href={`/events/${event.id}`} style={{ textDecoration: "none" }}>
      {/* <div className="card" style={{ width: '18rem', padding: '10px' }}>
        <Image
          src={event.poster}
          className="card-img-top"
          alt="Event"
          width={100} // Aspect ratio width
          height={200} // Aspect ratio height
        />
        <div className="card-body">
          <h5 className="card-title">Masterclass-Currency</h5>
          <p className="card-text">
            <strong>Mar-16-2024</strong>
            <br />
            Started at <strong>07:00 AM</strong>
            <br />
            Hosted by <a href="#">Aneema Agarwal</a>
            <br />
            <i className="bi bi-geo-alt"></i> Rawalpindi, Pakistan
          </p>
          <p className="card-text">
            <strong>From $109.5</strong>
          </p>
        </div>
      </div> */}
      <div className="event">
        <div className="img-wrapper">
          <Image
            src={event.poster}
            alt="Event"
            layout="responsive"
            width={2} // Aspect ratio width
            height={9} // Aspect ratio height
          />
        </div>
        <div className="title">{event.eventTitle}</div>
        <div className="date">
          {event.startDate}
          <span className="px-1">Started at {event.startTime}</span>
        </div>
        <div className="hosted">
          Hosted by <span>mayaram</span>
        </div>
        <div className="location">
          <HiOutlineLocationMarker />
          <span className="mx-2">{event.address}</span>
        </div>
        <div className="from">From </div>
      </div>
    </Link>
  );
};

export default LatestEventCard;
