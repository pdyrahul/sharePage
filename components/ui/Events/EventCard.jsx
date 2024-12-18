'use client'
import React from 'react';
import Link from 'next/link';

const EventCard = ({ id, title, date, time, host, location, price }) => {
  return (
    <Link href={`/events/${id}`} style={{ textDecoration: 'none' }}>
      <div className="event">
        <div className="img-wrapper">
          <img src="./images/event.svg" alt="Event" />
        </div>
        <div className="title">{title}</div>
        <div className="date">
          {date}
          <span className='px-1'>Started at {time}</span> 
        </div>
        <div className="hosted">
          Hosted by <span>{host}</span>
        </div>
        <div className="location">
          <img src="./images/location.svg" alt="Location" />
          <span className='mx-2'>{location}</span>
        </div>
        <div className="from">From {price}</div>
      </div>
    </Link>
  );
};

export default EventCard;