'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Events from '@/components/Events/page';
import Link from 'next/link';
const EventsPage = () => {
  const router = useRouter();

  const handleFundRaisingClick = () => {
    router.push('/fund-raising'); // Navigate to the Fund Raising page
  };

  const itemContent = [
    { img1: './images/microphone.svg', img2: './images/microphone-2.svg', label: 'Music' },
    { img1: './images/night.svg', img2: './images/night-2.svg', label: 'Nightlife' },
    { img1: './images/arts.svg', img2: './images/arts-2.svg', label: 'Arts & Craft' },
    { img1: './images/brush.svg', img2: './images/brush-2.svg', label: 'Performing & Visual Arts' },
    { img1: './images/kids.svg', img2: './images/kids-2.svg', label: 'Kids' },
    { img1: './images/classes.svg', img2: './images/classes-2.svg', label: 'Classes' },
    { img1: './images/culture.svg', img2: './images/culture-2.svg', label: 'Cultural' },
    { img1: './images/seniors.svg', img2: './images/seniors-2.svg', label: 'Seniors' },
    { img1: './images/hikes.svg', img2: './images/hikes-2.svg', label: 'Hikes' },
    { img1: './images/picnics.svg', img2: './images/picnics-2.svg', label: 'Picnics' },
    { img1: './images/online.svg', img2: './images/online-2.svg', label: 'Online' },
    { img1: './images/educational.svg', img2: './images/educational-2.svg', label: 'Educational' },
    { img1: './images/business.svg', img2: './images/business-2.svg', label: 'Business' },
    { img1: './images/mice.svg', img2: './images/mice-2.svg', label: 'Karaoke' },
    { img1: './images/comedies.svg', img2: './images/comedies-2.svg', label: 'Comedies' },
    { img1: './images/fund-raising.svg', img2: './images/fund-raising-2.svg', label: 'Fund Raising', onClick: handleFundRaisingClick },
    { img1: './images/single.svg', img2: './images/single-2.svg', label: 'Singles Mingles' },
    { img1: './images/trade.svg', img2: './images/trade-2.svg', label: 'Trade shows' },
    { img1: './images/job.svg', img2: './images/job-2.svg', label: 'Job Fair' },
    { img1: './images/dance.svg', img2: './images/dance-2.svg', label: 'Dance' },
  ];

  return (
      <div className="event-wrapper">
        <div className="event-body">
          <div className="top-heading">
            <div className="top-name">Events</div>
            <Link href="/event_Ticket">
              <button className="top-btn">Dashboard</button>
            </Link>
          </div>
          <div className="menu-filter">
            {itemContent.map((item, index) => (
                <div className="item" key={index} onClick={item.onClick}>
                  <div className="img-wrapper">
                    <img src={item.img1} className="img-1" alt={item.label}/>
                    <img src={item.img2} className="img-2" alt={item.label}/>
                  </div>
                  <span>{item.label}</span>
                </div>
            ))}
          </div>
          <div className="filters">
            <div className="search-box">
              <input type="text" placeholder="Search Events by keyword"/>
              <div className="search-icon">
                <img src="./images/search-3.svg" alt="Search"/>
              </div>
            </div>
            <div className="change-location">
              <div
                  className="change-location-btn"
                  data-bs-toggle="modal"
                  data-bs-target="#change-location"
              >
                Change Location
              </div>
              <div className="location">Rawalpindi, Punjab, Pakistan</div>
            </div>
          </div>
          <div className="group-navigation">
            {['All', 'For you', 'Today', 'This Weekend', 'This Month', 'Free', 'Online', 'Favorites'].map((link, index) => (
                <div className={`link ${index === 0 ? 'active-link' : ''}`} key={index}>{link}</div>
            ))}
          </div>
          <div className="event-box-wrapper">
            <div className="main-heading">
              <div className="heading">Educational</div>
              <div className="icons">
                <div className="arrow" id="prev-btn">
                  <img src="./images/arrow-left.svg" alt="Previous"/>
                </div>
                <div className="arrow" id="next-btn">
                  <img src="./images/arrow-right.svg" alt="Next"/>
                </div>
              </div>
            </div>
            <Events/>
          </div>
        </div>
      </div>
  );
};

export default EventsPage;