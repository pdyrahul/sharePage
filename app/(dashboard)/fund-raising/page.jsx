import React from 'react'
import './fundRaising.css';
const page = () => {
  return (
    <div className="event-body">
  <div className="heading">Preview</div>
  <div className="preview">
    <div className="fund-raising-banner">
      <div className="banner-img-wrapper">
        <img src="./images/fund-raising-detail-banner.svg" alt="" />
      </div>
      <div className="banner-detail">
        <div className="detail">
          <div className="title">Target</div>
          <div className="text">$500,000,000</div>
        </div>
        <div className="detail">
          <div className="title">Raised</div>
          <div className="text">$500,000,000</div>
        </div>
        <div className="detail">
          <div className="title">Launch Date</div>
          <div className="text">2024-10-23</div>
        </div>
        <div className="detail">
          <div className="title">Fund Raising For?</div>
          <div className="text">Ahsan Khan</div>
        </div>
        <div className="detail">
          <div className="title">Beneficiary Name</div>
          <div className="text">Shaoib</div>
        </div>
        <div className="detail">
          <div className="title">Category</div>
          <div className="text">Medical</div>
        </div>
        <div className="detail">
          <div className="title">Location</div>
          <div className="text">
            <img src="./images/location.svg" alt="" />
            Rawalpindi, Pakistan
          </div>
        </div>
        <button>Donate Now</button>
      </div>
    </div>
    <div className="fund-rasing-detail">
      <div className="event-title">Save my friend life</div>
      <div className="text">
        Join us for an unforgettable summer experience at the Bootleggers X
        Pixel Summer Festival! This vibrant event is packed with thrilling
        activities and entertainment that will captivate all your senses....
      </div>
      <div className="in-heading">Fund Raising Detail</div>
      <div className="title">Fund Raising Story</div>
      <div className="text">
        Join Us For An Unforgettable Summer Experience At The Bootleggers X
        Pixel Summer Festival! Nestled In The Heart Of Downtown Vancouver, This
        Vibrant Festival Promises An Eclectic Mix Of Music, Art, And Community
        Spirit. Join Us For An Unforgettable Summer Experience At The
        Bootleggers X Pixel Summer Festival! Nestled In The Heart Of Downtown
        Vancouver, This Vibrant Festival Promises An Eclectic Mix Of Music, Art,
        And Community Spirit.
      </div>
      <ul>
        <li>Capacity: 5000</li>
        <li>
          Highlights: Groove To The Beats Of Local And Headliner DJs In An
          Electrifying Outdoor Music Experience. Dance The Day Away With The
          Stunning Backdrop Of False Creek.
        </li>
        <li>
          Special Finale: As The Sun Sets, Prepare To Be Mesmerized By A
          Spectacular Live Drone Show Over The Water. Enjoy Synchronized DJ
          Music And An Unparalleled 3D View Of The Drone Show, Exclusively
          Available To Ticket Holders Within The Main Music Stage Area
        </li>
        <li>LINE-UP TO BE ANNOUNCED</li>
      </ul>
    </div>
    <div className="main-btn">
      <button className="prim">Return</button>
    </div>
  </div>
</div>

  )
}

export default page