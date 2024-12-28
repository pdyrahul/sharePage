'use client'
import React, { useState } from 'react';
import Event from '../../../../public/images/event.svg';
import Image from 'next/image';

const Page = () => {
  const [view, setView] = useState('grid'); // Default view is 'grid'

  const handleViewChange = (event) => {
    setView(event.target.value);
  };

  return (
    <div className="event-body">
      <div className="heading">Past Campaigns</div>
      <div className="event-page">
        <div className="page-filter">
          <div className="left">
            <div className="search-box">
              <input type="text" placeholder="Search Events by keyword" />
              <div className="search-icon">
                <img src="./images/search-3.svg" alt="" />
              </div>
            </div>
            <div className="input-group sort">
              <select className="form-select" aria-label="Default select example">
                <option selected="">Sort By</option>
                <option value={1}>One</option>
                <option value={2}>Two</option>
                <option value={3}>Three</option>
              </select>
            </div>
          </div>
          <div className="right">
            <div className="input-group view">
              <div className="icon">
                <img src="./images/list.svg" alt="" />
              </div>
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={handleViewChange}
              >
                <option value="grid">Grid</option>
                <option value="list">List</option>
              </select>
            </div>
          </div>
        </div>
        {view === 'grid' ? (
          <div className="event-list">
            <div className="event">
              <div className="title">Masterclass-Currency</div>
              <div className="location">
                <Image src={Event} style={{width:'100%',}} alt="" />
                <span>Rawalpindi, Pakistan</span>
              </div>
              <div className="hosted">
                By <span>Aneema Agarwal</span>
              </div>
              <div className="location">Target $500,000,000</div>
              <div className="from">Raised $500,000,000</div>
            </div>
          </div>
        ) : (
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th style={{ width: "15%" }}>Title</th>
                  <th className="text-center" style={{ width: "15%" }}>
                    Category
                  </th>
                  <th className="text-center" style={{ width: "15%" }}>
                    Target
                  </th>
                  <th className="text-center" style={{ width: "15%" }}>
                    Raised
                  </th>
                  <th className="text-center" style={{ width: "15%" }}>
                    Launch Date
                  </th>
                  <th className="text-center" style={{ width: "15%" }}>
                    End Date
                  </th>
                  <th style={{ width: "10%" }} />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ paddingLeft: 20, textAlign: "left" }}>Simple music</td>
                  <td>Medical</td>
                  <td>$1200</td>
                  <td>$1299</td>
                  <td>2024-12-23</td>
                  <td>2024-12-23</td>
                  <td className="action">
                    <img src="./images/view.svg" alt="" />
                  </td>
                </tr>
        
              </tbody>
            </table>
          </div>

        )}
        <div className="pagination">
          <div className="items">
            <div className="title">Show</div>
            <select className="form-select" aria-label="Default select example">
              <option selected="" value={1}>
                1
              </option>
              <option value={1}>2</option>
              <option value={2}>3</option>
              <option value={3}>4</option>
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