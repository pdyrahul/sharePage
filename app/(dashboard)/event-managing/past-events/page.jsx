'use client'
import React, { useState } from 'react';
import { AiOutlineBars } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
const Page = () => {
  const [view, setView] = useState('list'); // Default view is 'list'

  // Handle View Change (List/Grid)
  const handleViewChange = (event) => {
    setView(event.target.value);
  };

  return (
    <div className="event-body">
      <div className="heading">Past Events</div>
      <div className="event-page">
        <div className="page-filter">
          <div className="left">
            <div className="search-box">
              <input type="text" placeholder="Search Events by keyword" />
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
              <select className="form-select" aria-label="View" value={view} onChange={handleViewChange}>
                <option value="list">List</option>
                <option value="grid">Grid</option>
              </select>
            </div>
          </div>
        </div>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th style={{ width: "15%" }}>Title</th>
                <th className="text-center" style={{ width: "15%" }}>Price</th>
                <th className="text-center" style={{ width: "15%" }}>Category</th>
                <th className="text-center" style={{ width: "15%" }}>Date/Time</th>
                <th className="text-center" style={{ width: "15%" }}>Tickets Sold</th>
                <th className="text-center" style={{ width: "15%" }}>Status</th>
                <th style={{ width: "10%" }} />
              </tr>
            </thead>
            <tbody>
              {/* Repeated event rows */}
              <tr>
                <td style={{ paddingLeft: 20, textAlign: "left" }}>Simple music</td>
                <td>$23</td>
                <td>Music</td>
                <td>
                  <div>2024-12-24</div>
                  <div>12:00AM-01:00AM</div>
                </td>
                <td>3</td>
                <td>
                  <span className="status" style={{ backgroundColor: "#CC1111" }}>
                    Expired
                  </span>
                </td>
                <td className="action">
                <BsThreeDots />
                  <div className="more-links" style={{ display: "none" }}>
                    <div className="link">
                      <span className="img">
                        <img src="./images/view.svg" alt="View" />
                      </span>
                      <span>View</span>
                    </div>
                    <div className="link">
                      <span className="img" style={{ paddingLeft: 4 }}>
                        <img src="./images/delete-2.svg" alt="Delete" />
                      </span>
                      <span>Delete</span>
                    </div>
                  </div>
                </td>
              </tr>
              {/* Repeat rows for other events */}
            </tbody>
          </table>
        </div>
        <div className="pagination">
          <div className="items">
            <div className="title">Show</div>
            <select className="form-select" aria-label="Show Items">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <div className="title">Items</div>
          </div>
          <div className="list">
            <div className="box">Previous</div>
            <div className="box exect active">1</div>
            <div className="box exect">2</div>
            <div className="exect">...</div>
            <div className="box exect">4</div>
            <div className="box exect">5</div>
            <div className="box">Next</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
