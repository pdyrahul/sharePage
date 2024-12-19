import React from 'react'

const page = () => {
  return (
    <div className="event-body">
    <div className="heading">Update</div>
    <div className="event-page">
      <div className="page-filter">
        <div className="left">
          <div className="input-group event-select">
            <select className="form-select" aria-label="Default select example">
              <option selected="">Select Event</option>
              <option value={1}>One</option>
              <option value={2}>Two</option>
              <option value={3}>Three</option>
            </select>
          </div>
        </div>
        <div className="right">
          <button data-bs-toggle="modal" data-bs-target="#update">
            Updates
          </button>
        </div>
      </div>
      <div className="select-event-detail">
        <div className="heading-title">Campaign Detail</div>
        <div className="in-1-col detail">
          <div className="title">Name</div>
          <div className="text">Music Playing</div>
        </div>
        <div className="in-3-col detail">
          <div className="title">Venue</div>
          <div className="text">Banquite</div>
        </div>
        <div className="in-3-col detail">
          <div className="title">Location</div>
          <div className="text">
            <span>
              <img src="./images/location.svg" alt="" />
            </span>
            Rawalpindi, Pakistan
          </div>
        </div>
        <div className="in-3-col detail">
          <div className="title">Date</div>
          <div className="text">2024-03-13</div>
        </div>
      </div>
      <div className="box">
        <div className="update-title">24-12-23</div>
        <div className="update-text">
          Join Us For An Unforgettable Summer Experience At The Bootleggers X
          Pixel Summer Festival! Nestled In The Heart Of Downtown Vancouver, This
          Vibrant Festival Promises An Eclectic Mix Of Music, Art, And Community
          Spirit.Join Us For An Unforgettable Summer Experience At The Bootleggers
          X Pixel Summer Festival! Nestled In The Heart Of Downtown Vancouver,
          This Vibrant Festival Promises An Eclectic Mix Of Music,
        </div>
        <div className="update-title">Updated By Shoaib</div>
      </div>
      <div className="box">
        <div className="update-title">24-12-23</div>
        <div className="update-text">
          Join Us For An Unforgettable Summer Experience At The Bootleggers X
          Pixel Summer Festival! Nestled In The Heart Of Downtown Vancouver, This
          Vibrant Festival Promises An Eclectic Mix Of Music, Art, And Community
          Spirit.Join Us For An Unforgettable Summer Experience At The Bootleggers
          X Pixel Summer Festival! Nestled In The Heart Of Downtown Vancouver,
          This Vibrant Festival Promises An Eclectic Mix Of Music,
        </div>
        <div className="update-title">Updated By Shoaib</div>
      </div>
      <div className="box">
        <div className="update-title">24-12-23</div>
        <div className="update-text">
          Join Us For An Unforgettable Summer Experience At The Bootleggers X
          Pixel Summer Festival! Nestled In The Heart Of Downtown Vancouver, This
          Vibrant Festival Promises An Eclectic Mix Of Music, Art, And Community
          Spirit.Join Us For An Unforgettable Summer Experience At The Bootleggers
          X Pixel Summer Festival! Nestled In The Heart Of Downtown Vancouver,
          This Vibrant Festival Promises An Eclectic Mix Of Music,
        </div>
        <div className="update-title">Updated By Shoaib</div>
      </div>
      <div className="box">
        <div className="update-title">24-12-23</div>
        <div className="update-text">
          Join Us For An Unforgettable Summer Experience At The Bootleggers X
          Pixel Summer Festival! Nestled In The Heart Of Downtown Vancouver, This
          Vibrant Festival Promises An Eclectic Mix Of Music, Art, And Community
          Spirit.Join Us For An Unforgettable Summer Experience At The Bootleggers
          X Pixel Summer Festival! Nestled In The Heart Of Downtown Vancouver,
          This Vibrant Festival Promises An Eclectic Mix Of Music,
        </div>
        <div className="update-title">Updated By Shoaib</div>
      </div>
    </div>
  </div>
  
  )
}

export default page