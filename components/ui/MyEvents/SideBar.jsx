import * as React from 'react';
import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import user from '../../../public/images/user-01.svg';
import Image from 'next/image';
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
          <Image src={user} alt="Profile" />
        </div>
        <div className="name">Amelia Joseph</div>
        <div className="title">Personal Profile</div>
      </div>
      <ul className="menu px-2">
        <li className="menu-item ">
          <Typography variant="h6">Notes</Typography>
        </li>
        <li className="menu-item">
          <Typography variant="h6">Reminder</Typography>
        </li>
        <Divider />
        
        {/* My Events Accordion */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ fontSize: 16 }}>My Events</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ul className="sub-menu" 
            id="my-event-sub-menu"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 5,
              fontSize: 15,
              padding: '0 0 10px ',
            }}
            >
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
            <Typography sx={{ fontSize: 16 }}>Event Managing</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ul className="sub-menu" id="my-event-managing-sub-menu">
              <li>
                <Link href="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link href="/event-managing/submit-event">Submit an Event</Link>
              </li>
              <li>
                <Link href="">Active Events</Link>
              </li>
              <li>
                <Link href="/event-managing/post-events">Post Events</Link>
              </li>
              <li>
                <Link href="/event-managing/draft-events">Draft Events</Link>
              </li>
              <li>
                <Link href="/event-managing/sponsor-list">Sponsors List</Link>
              </li>
              <li>
                <Link href="/event-managing/paid-sponsors">Paid Sponsors</Link>
              </li>
              <li>
                <Link href="/event-managing/paid-vendors">Paid Vendors</Link>
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>

        <Divider />

        {/* My Fund Raising Accordion */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ fontSize: 16 }}>My Fund Raising</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ul className="sub-menu" id="my-fund-raising-sub-menu">
              <li><Link href="/fund-raising/dashboard">Dashboard</Link>
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