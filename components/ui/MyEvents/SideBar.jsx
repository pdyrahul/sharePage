'use client';
import * as React from 'react';
import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MenuIcon from '@mui/icons-material/Menu'; // Import Menu icon
import CloseIcon from '@mui/icons-material/Close'; // Import Close icon
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
    margin:'10px 0',
  },
  subMenu: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: 15,
  },
  expandIcon: {
    backgroundColor: '#c11',
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
    '& .MuiTypography-root': {
      color: 'white',
    },
  },
  sidebar: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '280px',
    padding:'10px',
    height: '100%',
    backgroundColor: '#fff',
    boxShadow: '2px 0 5px rgba(0,0,0,0.5)',
    transition: 'transform 0.3s ease',
    zIndex: 1000,
    

  },
  sidebarClosed: {
    transform: 'translateX(-100%)',
  },
  toggleButton: {
    position: 'fixed',
    top: '68px',
    left: '0',
    backgroundColor: '#c11',
    border: 'none',
    // borderRadius: '50%',
    cursor: 'pointer',
    padding: '10px',
    zIndex: 1001,
    color: 'white',
  },
};

export function SideBar() {
  const [activePath, setActivePath] = React.useState('');
  const [isOpen, setIsOpen] = React.useState(false); // State to manage sidebar open/close

  const handleItemClick = (path) => {
    setActivePath(path);
  };

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev); // Toggle the sidebar state
  };

  return (
    <div>
      <button style={styles.toggleButton} onClick={toggleSidebar}>
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </button>
      <div style={{ ...styles.sidebar, ...(isOpen ? {} : styles.sidebarClosed) }} id="side-bar">
        <div className="profile-detail text-center my-4">
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
            <AccordionDetails sx={{ marginTop: -2, padding: 0 }}>
              <List sx={styles.subMenu}>
                {[
                  { name: 'Dashboard', path: '/fund-raising/dashboard' },
                  { name: 'Create a campaign', path: '/fund-raising/create-campaign' },
                  { name: 'Active campaigns', path: '/fund-raising/active-campaigns', name: 'Past campaigns', path: '/fund-raising/past-campaigns' },
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
          <Accordion>
            <AccordionSummary expandIcon={<div style={styles.expandIcon}><ExpandMoreIcon /></div>}>
              <Typography sx={styles.menuItem}>My Events</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ marginTop: -2, padding: 0 }}>
              <List sx={styles.subMenu}>
                {[
                  { name: 'Tickets purchased', path: '/my-events/ticket-purchased' },
                  { name: 'Past Events Attended', path: '/my-events/past-event' },
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
            <AccordionDetails sx={{ marginTop: -2, padding: 0 }}>
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

          <div className="return my-2">
            <Link href="/" passHref style={{ color: '#c11', cursor: 'pointer' }}>
              <ArrowBackIcon style={{ color: '#c11' }} />
              <span style={{ marginLeft: '8px', color: '#c11' }}>Return To Home</span>
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
}