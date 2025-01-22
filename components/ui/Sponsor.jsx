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
         <ul className='m-0 p-0'>
          <li><strong>Name:</strong> {data.sponsor.sponsorName}</li>
          <li><strong>Website:</strong> {data.sponsor.sponsorWebsite}</li>
          <li><strong>Description:</strong> {data.sponsor.sponsorDescription}</li>
          {/* <li>{data.sponsorName}</li> */}
         </ul>
          </div>
        </div>
      
      </div>
    </div>
  </div>
</>

  )
}

export default Sponsor