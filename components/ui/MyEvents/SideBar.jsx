import * as React from 'react';
import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Divider,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export function SideBar() {
  return (
    <div className="side-bar" id="side-bar">
      <div className="profile-detail">
        <div className="img-wrapper">
          <img src="./images/profile-user.svg" alt="Profile" />
        </div>
        <div className="name">Amelia Joseph</div>
        <div className="title">Personal Profile</div>
      </div>
      <ul className="menu">
        <li className="menu-item">
          <Typography variant="h6">Notes</Typography>
        </li>
        <li className="menu-item">
          <Typography variant="h6">Reminder</Typography>
        </li>
        <Divider />
        
        {/* My Events Accordion */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">My Events</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ul className="sub-menu" id="my-event-sub-menu">
              <li>
                <Link href="/my-events/ticket-purchased">Tickets purchased</Link>
              </li>
              <li>
                <Link href="/my-events/post-event">Past Events Attended</Link>
              </li>
              <li>
                <Link href="/my-events/favorite-events">Favorite Events</Link>
              </li>
              <li>
                <Link href="/my-events/upcoming-event">Upcoming Events</Link>
              </li>
              <li>
                <Link href="/my-events/online-event">Online Events</Link>
              </li>
              <li>
                <Link href="/my-events/from-connections">From Connections</Link>
              </li>
              <li>
                <Link href="/my-events/my-interest">My Interest</Link>
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>

        <Divider />

        {/* Event Managing Accordion */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">Event Managing</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ul className="sub-menu" id="my-event-managing-sub-menu">
              <li>
                <Link href="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link href="/submit-event">Submit an Event</Link>
              </li>
              <li>
                <Link href="/active-events">Active Events</Link>
              </li>
              <li>
                <Link href="/past-events">Past Events</Link>
              </li>
              <li>
                <Link href="/draft-events">Draft Events</Link>
              </li>
              <li>
                <Link href="/sponsors-list">Sponsors List</Link>
              </li>
              <li>
                <Link href="/paid-sponsors">Paid Sponsors</Link>
              </li>
              <li>
                <Link href="/paid-vendors">Paid Vendors</Link>
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>

        <Divider />

        {/* My Fund Raising Accordion */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">My Fund Raising</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ul className="sub-menu" id="my-fund-raising-sub-menu">
              <li><Link href="/fundraising-dashboard">Dashboard</Link>
              </li>
              <li>
                <Link href="/create-campaign">Create a campaign</Link>
              </li>
              <li>
                <Link href="/active-campaigns">Active campaigns</Link>
              </li>
              <li>
                <Link href="/past-campaigns">Past campaigns</Link>
              </li>
              <li>
                <Link href="/draft-campaigns">Draft campaigns</Link>
              </li>
              <li>
                <Link href="/updates">Updates</Link>
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>
      </ul>
      <div className="return">
        <Link href="/">
        <ArrowBackIcon/>
        <span>Return To Home</span>
        </Link>
      </div>
    </div>
  );
};