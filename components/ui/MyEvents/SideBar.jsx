'use client'
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
  List,
  ListItem,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const styles = {
  menuItem: {
    fontSize: 16,
    border: 'none',
    boxShadow: 'none',
  },
 
  subMenu: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: 15,
  },
  expandIcon: {
    backgroundColor: '#c11',
    padding: '5px',
    borderRadius: '5px',
    color: 'white',
  },
  subMenuItem: {
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#c11',
      '& .MuiTypography-root': {
        color: 'white',
      },
    },
  },
  activeItem: {
    backgroundColor: '#c11',
    '& .MuiTypography-root': { // Target the Typography inside
      color: 'white',
    },
  },
};
export function SideBar() {
  const [activePath, setActivePath] = React.useState('');

  const handleItemClick = (path) => {
    setActivePath(path);
  };

  return (
    <div className="side-bar" id="side-bar">
      <div className="profile-detail">
        <div className="img-wrapper">
          <Image src={user} alt="Profile" />
        </div>
        <div className="name">Amelia Joseph</div>
        <div className="title">Personal Profile</div>
      </div>
      <ul className="menu">
        <li className="menu-item px-3">
          <Typography sx={styles.menuItem}>Notes</Typography>
        </li>
        <li className="menu-item px-3">
          <Typography sx={styles.menuItem}>Reminder</Typography>
        </li>
        <Divider />
    {/* My Fund Raising Accordion */}
    <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<div style={styles.expandIcon}><ExpandMoreIcon /></div>}>
            <Typography sx={styles.menuItem}>My Fund Raising</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{marginTop:-2, padding:0}}>
            <List sx={styles.subMenu}>
              {[
                { name: 'Dashboard', path: '/fund-raising/dashboard' },
                { name: 'Create a campaign', path: '/fund-raising/create-campaign' },
                { name: 'Active campaigns', path: '/fund-raising/active-campaigns' },
                { name: 'Post campaigns', path: '/fund-raising/post-campaigns' },
                { name: 'Draft campaigns', path: '/fund-raising/draft-campaigns' },
                { name: 'Updates', path: '/fund-raising/event-updates' },
              ].map((link, index) => (
                <ListItem
                  key={index}
                  sx={{ ...styles.subMenuItem, ...(activePath === link.path && styles.activeItem) }}
                  onClick={() => handleItemClick(link.path)}
                >
                  <Link href={link.path} passHref>
                    <Typography>{link.name}</Typography>
                  </Link>
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
        {/* My Events Accordion */}
        <Accordion >
          <AccordionSummary expandIcon={<div style={styles.expandIcon}><ExpandMoreIcon /></div>}>
            <Typography sx={styles.menuItem}>My Events</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{marginTop:-2, padding:0}}>
            <List sx={styles.subMenu}>
              {[
                { name: 'Tickets purchased', path: '/my-events/ticket-purchased' },
                { name: 'Post Events Attended', path: '/my-events/post-event' },
                { name: 'Favorite Events', path: '/my-events/favorite-events' },
                { name: 'Upcoming Events', path: '/my-events/upcoming-event' },
                { name: 'Online Events', path: '/my-events/online-event' },
                { name: 'From Connections', path: '/my-events/from-connections' },
                { name: 'My Interest', path: '/my-events/my-interest' },
              ].map((link, index) => (
                <ListItem
                  key={index}
                  sx={{ ...styles.subMenuItem, ...(activePath === link.path && styles.activeItem) }}
                  onClick={() => handleItemClick(link.path)}
                >
                  <Link href={link.path} passHref>
                    <Typography>{link.name}</Typography>
                  </Link>
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>

        <Divider />

        {/* Event Managing Accordion */}
        <Accordion>
          <AccordionSummary expandIcon={<div style={styles.expandIcon}><ExpandMoreIcon /></div>}>
            <Typography sx={styles.menuItem}>Event Managing</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{marginTop:-2, padding:0}}>
            <List sx={styles.subMenu}>
              {[
                { name: 'Dashboard', path: '/event-managing/event-dashboard' },
                { name: 'Submit an Event', path: '/event-managing/submit-event' },
                { name: 'Active Events', path: '/event-managing/active-event' },
                { name: 'Past Events', path: '/event-managing/past-events' },
                { name: 'Draft Events', path: '/event-managing/draft-events' },
                { name: 'Sponsors List', path: '/event-managing/sponsor-list' },
                { name: 'Paid Sponsors', path: '/event-managing/paid-sponsors' },
                { name: 'Paid Vendors', path: '/event-managing/paid-vendors' },
              ].map((link, index) => (
                <ListItem
                  key={index}
                  sx={{ ...styles.subMenuItem, ...(activePath === link.path && styles.activeItem) }}
                  onClick={() => handleItemClick(link.path)}
                >
                  <Link href={link.path} passHref>
                    <Typography>{link.name}</Typography>
                  </Link>
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>

        <Divider />

        <div className="return">
          <Link href="/" passHref>
            <ArrowBackIcon />
            <span>Return To Home</span>
          </Link>
        </div>
      </ul>
    </div>
  );
}
