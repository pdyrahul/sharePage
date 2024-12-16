'use client'
import React, { useState } from 'react';

const EventCarousel = () => {
  const [activeTab, setActiveTab] = useState('all');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="group-navigation">
        <div
          className={`link ${activeTab === 'all' ? 'active-link' : ''}`}
          onClick={() => handleTabClick('all')}
        >
          All
        </div>
        <div
          className={`link ${activeTab === 'for-you' ? 'active-link' : ''}`}
          onClick={() => handleTabClick('for-you')}
        >
          For you
        </div>
        <div
          className={`link ${activeTab === 'today' ? 'active-link' : ''}`}
          onClick={() => handleTabClick('today')}
        >
          Today
        </div>
        <div
          className={`link ${activeTab === 'this-weekend' ? 'active-link' : ''}`}
          onClick={() => handleTabClick('this-weekend')}
        >
          This Weekend
        </div>
        <div
          className={`link ${activeTab === 'this-month' ? 'active-link' : ''}`}
          onClick={() => handleTabClick('this-month')}
        >
          This Month
        </div>
        <div
          className={`link ${activeTab === 'free' ? 'active-link' : ''}`}
          onClick={() => handleTabClick('free')}
        >
          Free
        </div>
        <div
          className={`link ${activeTab === 'online' ? 'active-link' : ''}`}
          onClick={() => handleTabClick('online')}
        >
          Online
        </div>
        <div
          className={`link ${activeTab === 'favourites' ? 'active-link' : ''}`}
          onClick={() => handleTabClick('favourites')}
        >
          Favourites
        </div>
      </div>
      <div className="event-box-wrapper">
        {activeTab === 'all' && (
          <div>
            <div className="main-heading">
              <div className="heading">Educational</div>
              <div className="icons">
                <div className="arrow" id="prev-btn">
                  <img src="./images/arrow-left.svg" alt="" />
                </div>
                <div className="arrow" id="next-btn">
                  <img src="./images/arrow-right.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="slider" id="carousel">
              <div
                className="event-list"
                style={{ gridTemplateColumns: "repeat(6 ,auto)" }}
              >
                <div className="event">
                  <div className="img-wrapper">
                    <img src="./images/event.svg" alt="" />
                  </div>
                  <div className="title">Masterclass-Currency</div>
                  <div className="date">
                    Mar-16-2024
                    <span>Started at 07 : 00 AM</span>
                  </div>
                  <div className="hosted">
                    Hosted by <span>Aneema Agarwal</span>
                  </div>
                  <div className="location">
                    <img src="./images/location.svg" alt="" />
                    <span>Rawalpindi, Pakistan</span>
                  </div>
                  <div className="from">From $109.5</div>
                </div>
                <div className="event">
                  <div className="img-wrapper">
                    <img src="./images/event.svg" alt="" />
                  </div>
                  <div className="title">Masterclass-Currency</div>
                  <div className="date">
                    Mar-16-2024
                    <span>Started at 07 : 00 AM</span>
                  </div>
                  <div className="hosted">
                    Hosted by <span>Aneema Agarwal</span>
                  </div>
                  <div className="location">
                    <img src="./images/location.svg" alt="" />
                    <span>Rawalpindi, Pakistan</span>
                  </div>
                  <div className="from">From $109.5</div>
                </div>
                {/* Aur event items */}
              </div>
            </div>
          </div>
        )}
        {activeTab === 'for-you' && (
          <div>
            {/* For you tab ke carousel items */}
          </div>
        )}
        {activeTab === 'today' && (
          <div>
            {/* Today tab ke carousel items */}
          </div>
        )}
        {/* Aur tabs ke carousel items */}
      </div>
    </div>
  );
};

export default EventCarousel;