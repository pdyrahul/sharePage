import React from 'react'
import company from '../../public/images/company-img.svg';
import Image from 'next/image'
const Sponsor = ({data}) => {
  return (
    <>
  <div className="event-box-wrapper">
    <div className="main-heading">
      <div className="heading">Platinum Sponsors</div>
    </div>
    <div className="slider" id="carousel">
      <div
        className="event-list"
        style={{ gridTemplateColumns: "repeat(6 ,auto)" }}
      >
        <div className="sponsor">
          <div className="img-wrapper">
            <img src={data.poster} alt="" style={{width:"100%"}}/>
          </div>
          <div className="sponsor-detail">
            <div className="title">{data.sponsorName}</div>
            <div className="sub-title">123 Follower</div>
            <div className="icons">
              <img src="./images/add-riend.svg" alt="" />
              <img src="./images/message-2.svg" alt="" />
              <img src="./images/like-2.svg" alt="" />
            </div>
          </div>
        </div>
      
      </div>
    </div>
  </div>
</>

  )
}

export default Sponsor