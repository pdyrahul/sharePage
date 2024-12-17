'use client'
import React from 'react'
import './my-events.css'
const page = () => {
  return (
    <div className="event-wrapper">
    <div className="side-bar" id="side-bar">
      <div className="profile-detail">
        <div className="img-wrapper">
          <img src="./images/profile-user.svg" alt="" />
        </div>
        <div className="name">Amelia Joseph</div>
        <div className="title">Personal Profile</div>
      </div>
      <ul className="menu">
        <li className="menu-item">
          <div className="title">Notes</div>
        </li>
        <li className="menu-item">
          <div className="title">Reminder</div>
        </li>
        <div className="divider" />
        <li className="menu-item">
          <div className="title">My Events</div>
          <div className="icon" id="my-event-icon">
            <img src="images/expland.svg" alt="" />
          </div>
          <ul className="sub-menu" id="my-event-sub-menu">
            <ul className="active">
              <li className="sub-menu-item">Tickets purchased</li>
            </ul>
            <ul>
              <li className="sub-menu-item">Past Events Attended</li>
            </ul>
            <ul>
              <li className="sub-menu-item">Favorite Events</li>
            </ul>
            <ul>
              <li className="sub-menu-item">Upcoming Events</li>
            </ul>
            <ul>
              <li className="sub-menu-item">Online Events</li>
            </ul>
            <ul>
              <li className="sub-menu-item">From Connections</li>
            </ul>
            <ul>
              <li className="sub-menu-item">My Interest</li>
            </ul>
          </ul>
        </li>
        <div className="divider" />
        <li className="menu-item">
          <div className="title">Event Managing</div>
          <div className="icon" id="my-event-managing">
            <img src="images/expland.svg" alt="" />
          </div>
          <ul className="sub-menu" id="my-event-managing-sub-menu">
            <ul>
              <li className="sub-menu-item">Dashboard</li>
            </ul>
            <ul>
              <li className="sub-menu-item">Submit an Event</li>
            </ul>
            <ul>
              <li className="sub-menu-item">Active Events</li>
            </ul>
            <ul>
              <li className="sub-menu-item">Past Events</li>
            </ul>
            <ul>
              <li className="sub-menu-item">Draft Events</li>
            </ul>
            <ul>
              <li className="sub-menu-item">Sponsors List</li>
            </ul>
            <ul>
              <li className="sub-menu-item">Paid Sponsors</li>
            </ul>
            <ul>
              <li className="sub-menu-item">Paid Venders</li>
            </ul>
          </ul>
        </li>
        <div className="divider" />
        <li className="menu-item">
          <div className="title">My Fund Raising</div>
          <div className="icon" id="my-fund-raising-icon">
            <img src="images/expland.svg" alt="" />
          </div>
          <ul className="sub-menu" id="my-fund-raising-sub-menu">
            <ul>
              <li className="sub-menu-item">Dashboard</li>
            </ul>
            <ul>
              <li className="sub-menu-item">Create a campaign</li>
            </ul>
            <ul>
              <li className="sub-menu-item">Active campaigns</li>
            </ul>
            <ul>
              <li className="sub-menu-item">Past campaigns</li>
            </ul>
            <ul>
              <li className="sub-menu-item">Draft campaigns</li>
            </ul>
            <ul>
              <li className="sub-menu-item">Updates</li>
            </ul>
          </ul>
        </li>
      </ul>
      <div className="return">
        <img src="./images/return.svg" alt="" />
        <span>Return To Home</span>
      </div>
    </div>
    <div className="event-body">
      <div className="heading">Ticket Purchased</div>
      <div className="event-page">
        <div className="page-filter">
          <div className="left">
            <div className="input-group event-select">
              <select className="form-select" aria-label="Default select example">
                <option select="">Select Event</option>
                <option value={1}>One</option>
                <option value={2}>Two</option>
                <option value={3}>Three</option>
              </select>
            </div>
          </div>
        </div>
        <div className="ticket-detail-wrapper">
          <div className="detail-top-filter">
            <div className="head-for-detail">Ticket Detail</div>
            <div className="action">
              <img
                src="./images/three-dot-red.svg"
                alt=""
                className="dot"
                onClick="threeDot()"
              />
              <div
                className="more-links"
                id="three-dot"
                style={{ display: "none" }}
              >
                <div className="link">
                  <span className="img" style={{ paddingLeft: 4 }}>
                    <img src="./images/printer.svg" alt="" />
                  </span>
                  <span>Print</span>
                </div>
                <div className="link">
                  <span className="img" style={{ paddingLeft: 4 }}>
                    <img src="./images/download-2.svg" alt="" />
                  </span>
                  <span>Download</span>
                </div>
              </div>
            </div>
          </div>
          <div className="ticket-detail-body">
            <div className="in-2-col">
              <div className="detail">
                <div className="title">Name</div>
                <div className="text">Music Playing</div>
              </div>
              <div className="detail">
                <div className="title">Date</div>
                <div className="text">2024-03-13</div>
              </div>
            </div>
            <div className="in-2-col">
              <div className="detail">
                <div className="title">Venue</div>
                <div className="text">Banquite</div>
              </div>
              <div className="detail">
                <div className="title">Address</div>
                <div className="text">
                  <span>
                    <img src="./images/location.svg" alt="" />
                  </span>
                  Rawalpindi, Pakistan
                </div>
              </div>
            </div>
            <div className="in-5-col">
              <div className="detail">
                <div className="title">Ticket Type</div>
                <div className="text">Adult</div>
                <div className="text">Kids</div>
                <div className="text">Seniors</div>
              </div>
              <div className="detail">
                <div className="title">Quantity</div>
                <div className="text">2</div>
                <div className="text">2</div>
                <div className="text">2</div>
              </div>
              <div className="detail">
                <div className="title">Price</div>
                <div className="text">$23</div>
                <div className="text">$23</div>
                <div className="text">$23</div>
              </div>
              <div className="detail">
                <div className="title">Tax</div>
                <div className="text">5%</div>
                <div className="text">5%</div>
                <div className="text">5%</div>
              </div>
              <div className="detail">
                <div className="title">Total</div>
                <div className="text">$30</div>
                <div className="text">$30</div>
                <div className="text">$23</div>
                <div className="bold-text">$200</div>
              </div>
            </div>
            <div className="in-2-col">
              <div className="detail">
                <div className="title">Payment By</div>
                <div className="text">Visa (.... .... ..... 1234)</div>
              </div>
              <div className="detail">
                <div className="title">Date Purchased</div>
                <div className="text">2024-03-13- 12:00 AM</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default page