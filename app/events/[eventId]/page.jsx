import React from 'react'
import Image from 'next/image';
import BannerImage from '../../../public/images/fund-raising-detail-banner.svg'
import Events from '@/components/Events/page';
const eventDetail = ({ params }) => {
  console.log(params, "paramData");
  return (
    <>
      <div className="event-wrapper">
        <div className="fund-rasing-body">
          <div className="banner">
            <div className="banner-img-wrapper">
              
              <Image src={BannerImage} alt="test"/>
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
                <div className="title">Beneficiary Name </div>
                <div className="text">Shaoib</div>
              </div>
              <div className="detail">
                <div className="title">Category </div>
                <div className="text">Medical</div>
              </div>
              <div className="detail">
                <div className="title">Location </div>
                <div className="text">
                  <img src="./images/location.svg" alt="" />
                  Rawalpindi, Pakistan
                </div>
              </div>
              <button className="main-btn">Donate Now</button>
            </div>
          </div>
          <div className="fund-rasing-detail">
            <div className="more-links">
              <a href="">
                <img src="./images/like.svg" alt="" />
              </a>
              <a href="">
                <img src="./images/favorit.svg" alt="" />
              </a>
              <a href="">
                <img src="./images/share.svg" alt="" />
              </a>
            </div>
            <div className="back">
              <img src="./images/back.svg" alt="" />
              <span>Return To Home</span>
            </div>
            <div className="event-title">Save my friend life</div>
            <div className="text">
              Join us for an unforgettable summer experience at the Bootleggers X
              Pixel Summer Festival! This vibrant event is packed with thrilling
              activities and entertainment that will captivate all your senses....
            </div>
            <div className="heading">Fund Raising Detail</div>
            <div className="title">Fund Raising Story</div>
            <div className="text">
              Join Us For An Unforgettable Summer Experience At The Bootleggers X
              Pixel Summer Festival! Nestled In The Heart Of Downtown Vancouver,
              This Vibrant Festival Promises An Eclectic Mix Of Music, Art, And
              Community Spirit. Join Us For An Unforgettable Summer Experience At
              The Bootleggers X Pixel Summer Festival! Nestled In The Heart Of
              Downtown Vancouver, This Vibrant Festival Promises An Eclectic Mix Of
              Music, Art, And Community Spirit.
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
            <div className="title">Updates</div>
            <div style={{ marginTop: 10 }}>
              <div className="title-2">24-12-23 </div>
              <div className="text">
                Join Us For An Unforgettable Summer Experience At The Bootleggers X
                Pixel Summer Festival! Nestled In The Heart Of Downtown Vancouver,
                This Vibrant Festival Promises An Eclectic Mix Of Music, Art, And
                Community Spirit.Join Us For An Unforgettable Summer Experience At
                The Bootleggers X Pixel Summer Festival! Nestled In The Heart Of
                Downtown Vancouver, This Vibrant Festival Promises An Eclectic Mix
                Of Music,
              </div>
              <div className="title-2">Updated By Shoaib</div>
            </div>
            <div style={{ marginTop: 10 }}>
              <div className="title-2">24-12-23 </div>
              <div className="text">
                Join Us For An Unforgettable Summer Experience At The Bootleggers X
                Pixel Summer Festival! Nestled In The Heart Of Downtown Vancouver,
                This Vibrant Festival Promises An Eclectic Mix Of Music, Art, And
                Community Spirit.Join Us For An Unforgettable Summer Experience At
                The Bootleggers X Pixel Summer Festival! Nestled In The Heart Of
                Downtown Vancouver, This Vibrant Festival Promises An Eclectic Mix
                Of Music,
              </div>
              <div className="title-2">Updated By Shoaib</div>
            </div>
            <div style={{ marginTop: 10 }}>
              <div className="title-2">24-12-23 </div>
              <div className="text">
                Join Us For An Unforgettable Summer Experience At The Bootleggers X
                Pixel Summer Festival! Nestled In The Heart Of Downtown Vancouver,
                This Vibrant Festival Promises An Eclectic Mix Of Music, Art, And
                Community Spirit.Join Us For An Unforgettable Summer Experience At
                The Bootleggers X Pixel Summer Festival! Nestled In The Heart Of
                Downtown Vancouver, This Vibrant Festival Promises An Eclectic Mix
                Of Music,
              </div>
              <div className="title-2">Updated By Shoaib</div>
            </div>
            <div style={{ marginTop: 10 }}>
              <div className="title-2">24-12-23 </div>
              <div className="text">
                Join Us For An Unforgettable Summer Experience At The Bootleggers X
                Pixel Summer Festival! Nestled In The Heart Of Downtown Vancouver,
                This Vibrant Festival Promises An Eclectic Mix Of Music, Art, And
                Community Spirit.Join Us For An Unforgettable Summer Experience At
                The Bootleggers X Pixel Summer Festival! Nestled In The Heart Of
                Downtown Vancouver, This Vibrant Festival Promises An Eclectic Mix
                Of Music,
              </div>
              <div className="title-2">Updated By Shoaib</div>
            </div>
            <div style={{ marginTop: 10 }}>
              <div className="title-2">24-12-23 </div>
              <div className="text">
                Join Us For An Unforgettable Summer Experience At The Bootleggers X
                Pixel Summer Festival! Nestled In The Heart Of Downtown Vancouver,
                This Vibrant Festival Promises An Eclectic Mix Of Music, Art, And
                Community Spirit.Join Us For An Unforgettable Summer Experience At
                The Bootleggers X Pixel Summer Festival! Nestled In The Heart Of
                Downtown Vancouver, This Vibrant Festival Promises An Eclectic Mix
                Of Music,
              </div>
              <div className="title-2">Updated By Shoaib</div>
            </div>
            <div style={{ marginTop: 10 }}>
              <div className="title-2">24-12-23 </div>
              <div className="text">
                Join Us For An Unforgettable Summer Experience At The Bootleggers X
                Pixel Summer Festival! Nestled In The Heart Of Downtown Vancouver,
                This Vibrant Festival Promises An Eclectic Mix Of Music, Art, And
                Community Spirit.Join Us For An Unforgettable Summer Experience At
                The Bootleggers X Pixel Summer Festival! Nestled In The Heart Of
                Downtown Vancouver, This Vibrant Festival Promises An Eclectic Mix
                Of Music,
              </div>
              <div className="title-2">Updated By Shoaib</div>
            </div>
          </div>
          <div className="group-navigation">
            <div className="link active-link">Photos</div>
            <div className="link">Videos</div>
          </div>
          <div className="photos-wrapper">
            <div
              className="photo"
              data-bs-toggle="modal"
              data-bs-target="#view-image"
            >
              <img src="./images/photo.svg" alt="" />
            </div>
            <div className="photo">
              <img src="./images/photo.svg" alt="" />
            </div>
            <div className="photo">
              <img src="./images/photo.svg" alt="" />
            </div>
            <div className="photo">
              <img src="./images/photo.svg" alt="" />
            </div>
            <div className="photo">
              <img src="./images/photo.svg" alt="" />
            </div>
            <div className="photo">
              <img src="./images/photo.svg" alt="" />
            </div>
            <div className="photo">
              <img src="./images/photo.svg" alt="" />
            </div>
            <div className="photo">
              <img src="./images/photo.svg" alt="" />
            </div>
            <div className="photo">
              <img src="./images/photo.svg" alt="" />
            </div>
            <div className="photo">
              <img src="./images/photo.svg" alt="" />
            </div>
            <div className="photo">
              <img src="./images/photo.svg" alt="" />
            </div>
            <div className="photo">
              <img src="./images/photo.svg" alt="" />
            </div>
          </div>
          <div className="event-box-wrapper">
            <div className="main-heading">
              <div className="heading">Latest</div>
              <div className="icons">
                <div className="arrow" id="prev-btn">
                  <img src="./images/arrow-left.svg" alt="" />
                </div>
                <div className="arrow" id="next-btn">
                  <img src="./images/arrow-right.svg" alt="" />
                </div>
              </div>
            </div>
           <Events/>
          </div>
        </div>
      </div>
      <div
        className="modal change-location-modal"
        id="buy-ticket"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Music Fun
              </h1>
            </div>
            <div className="modal-body">
              <form action="">
                <div
                  className="in-1-col total"
                  style={{ fontSize: 24, fontWeight: 500 }}
                >
                  Total amount : $124
                </div>
                <div className="ticket" style={{ color: "#4D4D4D", fontSize: 20 }}>
                  Ticket : 12
                </div>
                <div className="in-1-col">
                  <img src="./images/card.svg" alt="" />
                  <span>Card</span>
                </div>
                <div className="input-group in-2-col">
                  <label>
                    First Name<span style={{ color: "#EF1D26" }}>*</span>
                  </label>
                  <input type="text" placeholder="Enter first name" />
                </div>
                <div className="input-group in-2-col">
                  <label>
                    Last Name<span style={{ color: "#EF1D26" }}>*</span>
                  </label>
                  <input type="text" placeholder="Enter last name" />
                </div>
                <div className="input-group in-1-col">
                  <label>
                    Email<span style={{ color: "#EF1D26" }}>*</span>
                  </label>
                  <input type="text" placeholder="Enter Email Address" />
                </div>
                <div className="check-box in-1-col">
                  <label className="main-container">
                    {" "}
                    Use as billing name
                    <input type="checkbox" defaultChecked="checked" />
                    <span className="checkmark" />
                  </label>
                </div>
                <div className="input-group in-2-col">
                  <label>
                    Card Number<span style={{ color: "#EF1D26" }}>*</span>
                  </label>
                  <input type="text" placeholder="0000 0000 0000 0000" />
                </div>
                <div className="input-group in-2-col" style={{ gap: 16 }}>
                  <div className="input-group in-2-col">
                    <label>
                      MM/YY<span style={{ color: "#EF1D26" }}>*</span>
                    </label>
                    <input type="text" placeholder="MM/YY" />
                  </div>
                  <div className="input-group in-2-col">
                    <label>
                      CVV<span style={{ color: "#EF1D26" }}>*</span>
                    </label>
                    <input type="text" placeholder="CVV" />
                  </div>
                </div>
                <div className="input-group in-1-col">
                  <label>
                    Card Holders Name<span style={{ color: "#EF1D26" }}>*</span>
                  </label>
                  <input type="text" placeholder="Card Holders Name" />
                </div>
                <div className="input-group in-1-5-col">
                  <label>
                    Billing address<span style={{ color: "#EF1D26" }}>*</span>
                  </label>
                  <input type="text" placeholder="Billing address" />
                </div>
                <div className="input-group in-0-5-col">
                  <label>
                    Postal Code<span style={{ color: "#EF1D26" }}>*</span>
                  </label>
                  <input type="text" placeholder="Postal Code" />
                </div>
                {/* <textarea placeholder="Card Holders Name" rows="6" cols="50"></textarea> */}
                <div className="input-group in-3-col">
                  <label>
                    Country<span style={{ color: "#EF1D26" }}>*</span>
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected="">Select Country</option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                  </select>
                </div>
                <div className="input-group in-3-col">
                  <label>
                    Province<span style={{ color: "#EF1D26" }}>*</span>
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected="">Select Province</option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                  </select>
                </div>
                <div className="input-group in-3-col">
                  <label>
                    City<span style={{ color: "#EF1D26" }}>*</span>
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected="">Select City</option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                  </select>
                </div>
                <div className="check-box in-1-col">
                  <label className="main-container">
                    {" "}
                    Save card details for future
                    <input type="checkbox" defaultChecked="checked" />
                    <span className="checkmark" />
                  </label>
                </div>
              </form>
            </div>
            <div className="modal-footer" style={{ textAlign: "center" }}>
              <div className="payment" style={{ width: "100%" }}>
                <button
                  type="button"
                  style={{
                    color: "white",
                    height: 45,
                    width: "100%",
                    backgroundColor: "#CC1111"
                  }}
                  className="btn btn-primary"
                >
                  Pay
                </button>
              </div>
              <a
                type="button"
                style={{
                  fontSize: 14,
                  color: "#4D4D4D",
                  textDecoration: "underline"
                }}
                data-bs-dismiss="modal"
              >
                CANCEL
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal change-location-modal"
        id="become-sponsor-vender"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Become a vender or sponsors
              </h1>
            </div>
            <div className="modal-body">
              <form action="">
                <div className="input-group in-1-col">
                  <label>
                    Company Name<span style={{ color: "#EF1D26" }}>*</span>
                  </label>
                  <input type="text" placeholder="Enter Company Name" />
                </div>
                <div className="input-group in-2-col">
                  <label>
                    Business Category<span style={{ color: "#EF1D26" }}>*</span>
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected="">Business Category</option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                  </select>
                </div>
                <div className="input-group in-2-col">
                  <label>
                    Business Type<span style={{ color: "#EF1D26" }}>*</span>
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected="">Business Type</option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                  </select>
                </div>
                <div className="input-group in-2-col">
                  <label>
                    Contact Name<span style={{ color: "#EF1D26" }}>*</span>
                  </label>
                  <input type="text" placeholder="Enter Contact Name" />
                </div>
                <div className="input-group in-2-col">
                  <label>
                    Phone Number<span style={{ color: "#EF1D26" }}>*</span>
                  </label>
                  <input type="text" placeholder="Phone Number" />
                </div>
                <div className="input-group in-1-col">
                  <label>
                    Email<span style={{ color: "#EF1D26" }}>*</span>
                  </label>
                  <input type="text" placeholder="Enter Email Address" />
                </div>
                <div className="input-group in-3-col">
                  <label>
                    Country<span style={{ color: "#EF1D26" }}>*</span>
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected="">Select Country</option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                  </select>
                </div>
                <div className="input-group in-3-col">
                  <label>
                    Province<span style={{ color: "#EF1D26" }}>*</span>
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected="">Select Province</option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                  </select>
                </div>
                <div className="input-group in-3-col">
                  <label>
                    City<span style={{ color: "#EF1D26" }}>*</span>
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected="">Select City</option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                  </select>
                </div>
                <div className="input-group in-1-5-col">
                  <label>
                    Address<span style={{ color: "#EF1D26" }}>*</span>
                  </label>
                  <input type="text" placeholder="Address" />
                </div>
                <div className="input-group in-0-5-col">
                  <label>
                    Postal Code<span style={{ color: "#EF1D26" }}>*</span>
                  </label>
                  <input type="text" placeholder="Postal Code" />
                </div>
                <div className="input-group in-1-col">
                  <label>
                    Business description<span style={{ color: "#EF1D26" }}>*</span>
                  </label>
                  <textarea
                    placeholder="Type Detail"
                    rows={6}
                    cols={50}
                    defaultValue={""}
                  />
                </div>
                <div className="input-group in-1-col">
                  <label>
                    Select Sponsorship package
                    <span style={{ color: "#EF1D26" }}>*</span>
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected="">Select Sponsorship package*</option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                  </select>
                </div>
                <div className="input-group in-1-col">
                  <label>
                    Sponsors detail<span style={{ color: "#EF1D26" }}>*</span>
                  </label>
                  <textarea
                    placeholder="Type Detail"
                    rows={6}
                    cols={50}
                    defaultValue={""}
                  />
                </div>
                <div className="input-group in-1-col">
                  <label>
                    Cancelation Policy<span style={{ color: "#EF1D26" }}>*</span>
                  </label>
                  <a href="#" style={{ color: "#CC1111", fontWeight: 600 }}>
                    View Policy
                  </a>
                </div>
                <div className="check-box in-1-col">
                  <label className="main-container">
                    {" "}
                    I acknowledge that I have read and agree to the cancellation
                    policy
                    <input type="checkbox" defaultChecked="checked" />
                    <span className="checkmark" />
                  </label>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                CANCEL
              </button>
              <button
                type="button"
                style={{ color: "white", backgroundColor: "#CC1111" }}
                className="btn btn-primary"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal view-image"
        id="view-image"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog  modal-xl">
          <div className="modal-content">
            <div className="modal-body">
              <img src="./images/img.svg" alt="" className="img-wrapper" />
              <img
                src="images/cross.svg"
                alt=""
                className="cross-icon"
                data-bs-dismiss="modal"
              />
              <img src="images/left-arrow.svg" alt="" className="left-arrow" />
              <img src="images/right-arrow.svg" alt="" className="right-arrow" />
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default eventDetail;