"use client"
import React, { useState, useMemo } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Paper,
  Skeleton, // Import Skeleton for loading state
} from '@mui/material';
import { AiOutlineBars } from 'react-icons/ai';
import useFetchData from '../../../hooks/useFetchData'; // Custom hook to handle fetch requests
import { getEventList } from '../../../services/api';

const Page = () => {
  const [view, setView] = useState('list'); // Default view is 'list'
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Fetching events from API
  const apiRequests = useMemo(() => [getEventList], []);
  const { data, error, isLoading } = useFetchData(apiRequests);

  // Accessing the events array from the fetched data
  const events = data?.[0]?.data?.map((event) => ({
    id: event.id || 'N/A',
    title: event.eventTitle || 'Untitled Event',
    date: event.startDate || 'Date not available',
    time: event.startTime || 'Time not available',
    hostedBy: event.sponsor?.sponsorName || 'Unknown Host',
    location: event.address || 'Location not available',
    price: `$${event.sponsor?.sponsorPrice || 0}`,
    ticketsSold: event.capacity || 'Not Available',
    image: event.poster || '/images/event-placeholder.svg', // Fallback image
  })) || [];

  // Filter events based on search query
  const filteredEvents = events.filter((event) =>
    event.title?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleViewChange = (event) => {
    setView(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setPage(0); // Reset page when search query changes
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className="event-body">
      <div className="heading">Active Events</div>
      <div className="event-page">
        <div className="page-filter">
          <div className="left">
            <div className="search-box">
              <input
                type="text"
                placeholder="Search Events by keyword"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <div className="search-icon">
                <img src="/images/search-3.svg" alt="Search" />
              </div>
            </div>
            <div className="input-group sort">
              <select className="form-select" aria-label="Sort By">
                <option value="">Sort By</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <div className="right">
            <div className="input-group view">
              <div className="icon">
                <AiOutlineBars />
              </div>
              <select
                className="form-select"
                aria-label="View"
                onChange={handleViewChange}
                value={view}
              >
                <option value="list">List</option>
                <option value="grid">Grid</option>
              </select>
            </div>
          </div>
        </div>

        {isLoading ? (
          <div>
            {/* Skeleton loader for the grid view */}
            {view === 'grid' ? (
              <div className="event-list grid">
                {Array(5)
                  .fill(0)
                  .map((_, index) => (
                    <div className="event" key={index}>
                      <Skeleton variant="rectangular" width="100%" height={150} />
                      <Skeleton width="60%" />
                      <Skeleton width="40%" />
                      <Skeleton width="80%" />
                    </div>
                  ))}
              </div>
            ) : (
              <Paper>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Image</TableCell>
                        <TableCell>Title</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Hosted By</TableCell>
                        <TableCell>Location</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Tickets Sold</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {Array(5)
                        .fill(0)
                        .map((_, index) => (
                          <TableRow key={index}>
                            <TableCell>
                              <Skeleton variant="circle" width={50} height={50} />
                            </TableCell>
                            <TableCell>
                              <Skeleton width="60%" />
                            </TableCell>
                            <TableCell>
                              <Skeleton width="40%" />
                            </TableCell>
                            <TableCell>
                              <Skeleton width="60%" />
                            </TableCell>
                            <TableCell>
                              <Skeleton width="60%" />
                            </TableCell>
                            <TableCell>
                              <Skeleton width="40%" />
                            </TableCell>
                            <TableCell>
                              <Skeleton width="60%" />
                            </TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            )}
          </div>
        ) : error ? (
          <div>Error loading events.</div>
        ) : filteredEvents.length === 0 ? (
          <div>No events found.</div>
        ) : (
          <>
            <div className="total-events">Total Events: {filteredEvents.length}</div>
            {view === 'grid' ? (
              <div className="event-list grid">
                {filteredEvents.map((event, index) => (
                  <div className="event" key={index}>
                    <div className="img-wrapper">
                      <img src={event.image} alt={event.title} />
                    </div>
                    <div className="title">{event.title}</div>
                    <div className="date">
                      {event.date}
                      <span>Started at {event.time}</span>
                    </div>
                    <div className="hosted">
                      Hosted by <span>{event.hostedBy}</span>
                    </div>
                    <div className="location">
                      <img src="/images/location.svg" alt="Location" />
                      <span>{event.location}</span>
                    </div>
                    <div className="from">From {event.price}</div>
                    <div className="ticket-sold">Ticket Sold: {event.ticketsSold}</div>
                  </div>
                ))}
              </div>
            ) : (
              <Paper>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Image</TableCell>
                        <TableCell>Title</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Hosted By</TableCell>
                        <TableCell>Location</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Tickets Sold</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {filteredEvents
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((event, index) => (
                          <TableRow key={index}>
                            <TableCell>
                              <img
                                src={event.image}
                                alt={event.title}
                                style={{ width: '50px', height: '50px' }}
                              />
                            </TableCell>
                            <TableCell>{event.title}</TableCell>
                            <TableCell>
                              {event.date} <p>Started at {event.time}</p>
                            </TableCell>
                            <TableCell>{event.hostedBy}</TableCell>
                            <TableCell>{event.location}</TableCell>
                            <TableCell>{event.price}</TableCell>
                            <TableCell>{event.ticketsSold}</TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  component="div"
                  count={filteredEvents.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </Paper>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Page;
