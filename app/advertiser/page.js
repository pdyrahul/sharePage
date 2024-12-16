import React from 'react'

const page = () => {
  return (
    <>
  <div className="body-wrapper">
    <div className="nav-bar">
      <div className="logo-menu">
        <div className="logo-wrapper">
          <img src="./images/logo.svg" alt="" />
        </div>
        <div className="menu" onclick="openAndCloseSideBar()">
          <img src="./images/menu-icon-2.svg" alt="" />
        </div>
      </div>
      <div className="search-box">
        <div className="select-options">
          All Profiles
          <img src="./images/down-arrow.svg" alt="" />
        </div>
        <div className="search-box-wrapper">
          <input type="text" placeholder="Search" />
          <div className="search-icon">
            <svg
              width={13}
              height={12}
              viewBox="0 0 13 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.97342 7.70191C4.34676 7.70191 3.73418 7.51609 3.21313 7.16793C2.69208 6.81978 2.28597 6.32494 2.04616 5.74598C1.80635 5.16702 1.7436 4.52995 1.86585 3.91533C1.98811 3.30071 2.28988 2.73615 2.73299 2.29304C3.17611 1.84992 3.74067 1.54816 4.35528 1.4259C4.9699 1.30364 5.60698 1.36639 6.18594 1.6062C6.7649 1.84602 7.25974 2.25212 7.60789 2.77317C7.95604 3.29422 8.14186 3.90681 8.14186 4.53347C8.14413 4.95019 8.06374 5.36322 7.90531 5.74866C7.74689 6.1341 7.51358 6.48429 7.21891 6.77896C6.92424 7.07363 6.57406 7.30693 6.18862 7.46535C5.80318 7.62378 5.39014 7.70418 4.97342 7.70191ZM9.19259 7.70191H8.62998L8.41932 7.49125C8.85347 6.98286 9.17254 6.38658 9.35464 5.74331C9.53675 5.10005 9.57757 4.425 9.47432 3.76448C9.3045 2.80285 8.82985 1.92136 8.1205 1.25025C7.41115 0.579146 6.50473 0.154022 5.53518 0.0376972C4.34755 -0.115397 3.14708 0.201518 2.18977 0.920867C1.23246 1.64022 0.594051 2.70508 0.410642 3.88841C0.227234 5.07174 0.513345 6.27991 1.20798 7.2553C1.90262 8.23069 2.95082 8.89613 4.12907 9.10973C4.7896 9.21298 5.46465 9.17215 6.10792 8.99005C6.75119 8.80795 7.34745 8.48888 7.85584 8.05472L8.0665 8.26538V8.828L11.02 11.7815C11.0893 11.8508 11.1715 11.9057 11.262 11.9432C11.3525 11.9807 11.4495 12 11.5475 12C11.6455 12 11.7425 11.9807 11.833 11.9432C11.9235 11.9057 12.0057 11.8508 12.075 11.7815C12.1443 11.7122 12.1992 11.63 12.2367 11.5395C12.2742 11.449 12.2935 11.352 12.2935 11.254C12.2935 11.156 12.2742 11.059 12.2367 10.9685C12.1992 10.878 12.1443 10.7958 12.075 10.7265L9.19259 7.70191Z"
                fill="#1F1216"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="import-links">
        <div className="search-mobile link">
          <img src="./images/search-2.svg" alt="" />
        </div>
        <a href="" className="hide-mobile">
          <div className="hand-shake link">
            <img src="./images/hand-shake.svg" alt="" />
          </div>
        </a>
        <a href="" className="hide-mobile">
          <div className="persons link">
            <img src="./images/person-2.svg" alt="" />
            <div className="count">1</div>
          </div>
        </a>
        <a href="" className="hide-mobile">
          <div className="help link">
            <img src="./images/help.svg" alt="" />
          </div>
        </a>
        <a href="" className="hide-mobile">
          <div className="notification link">
            <img src="./images/notification.svg" alt="" />
            <div className="count">2</div>
          </div>
        </a>
        <a href="" className="hide-mobile">
          <div className="cart link">
            <img src="./images/cart.svg" alt="" />
          </div>
        </a>
        <a href="" className="hide-mobile">
          <div className="setting link">
            <img src="./images/setting.svg" alt="" />
          </div>
        </a>
        <div className="three-dot link">
          <img src="./images/three-dot.svg" alt="" />
        </div>
        <div className="line" />
        <div className="perfile-detail">
          <div className="img-wrapper">
            <div className="circle">
              <img src="./images/profile-img.svg" alt="" />
            </div>
          </div>
          <div className="profile-detail-wrapper">
            <div className="name">Amelia Joseph</div>
            <div className="title">Personal Profile</div>
          </div>
          <div className="down-icon">
            <img src="./images/down-arrow-2.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div className="event-wrapper">
      <div className="event-body">
        <div className="banner-img">
          <img src="./images/banner.svg" alt="" />
        </div>
        <div className="event-detail">
          <div className="detail-wrapper">
            <div className="back">
              <img src="./images/back.svg" alt="" />
              <span>Return To Home</span>
            </div>
            <div className="date">Thursday, July 18 · 3 - 5pm PKT</div>
            <div className="event-title">
              BOOTLEGGERS X PIXEL SUMMER FESTIVAL
            </div>
            <div className="text">
              Join us for an unforgettable summer experience at the Bootleggers
              X Pixel Summer Festival! This vibrant event is packed with
              thrilling activities and entertainment that will captivate all
              your senses....
            </div>
            <div className="heading">Event Detail</div>
            <div className="title">Description</div>
            <div className="text">
              Join Us For An Unforgettable Summer Experience At The Bootleggers
              X Pixel Summer Festival! Nestled In The Heart Of Downtown
              Vancouver, This Vibrant Festival Promises An Eclectic Mix Of
              Music, Art, And Community Spirit.
            </div>
            <div className="title">Main Music Stage</div>
            <ul>
              <li>Capacity: 5000</li>
              <li>
                Highlights: Groove To The Beats Of Local And Headliner DJs In An
                Electrifying Outdoor Music Experience. Dance The Day Away With
                The Stunning Backdrop Of False Creek.
              </li>
              <li>
                Special Finale: As The Sun Sets, Prepare To Be Mesmerized By A
                Spectacular Live Drone Show Over The Water. Enjoy Synchronized
                DJ Music And An Unparalleled 3D View Of The Drone Show,
                Exclusively Available To Ticket Holders Within The Main Music
                Stage Area
              </li>
              <li>LINE-UP TO BE ANNOUNCED</li>
            </ul>
            <div className="title">Amenities</div>
            <ul>
              <li>Capacity: 5000</li>
              <li>
                Highlights: Groove To The Beats Of Local And Headliner DJs In An
                Electrifying Outdoor Music Experience. Dance The Day Away With
                The Stunning Backdrop Of False Creek.
              </li>
              <li>
                Special Finale: As The Sun Sets, Prepare To Be Mesmerized By A
                Spectacular Live Drone Show Over The Water. Enjoy Synchronized
                DJ Music And An Unparalleled 3D View Of The Drone Show,
                Exclusively Available To Ticket Holders Within The Main Music
                Stage Area
              </li>
              <li>LINE-UP TO BE ANNOUNCED</li>
            </ul>
            <div className="title">
              Additional Festival Features (Open To All)
            </div>
            <ul>
              <li>Capacity: 5000</li>
              <li>
                Highlights: Groove To The Beats Of Local And Headliner DJs In An
                Electrifying Outdoor Music Experience. Dance The Day Away With
                The Stunning Backdrop Of False Creek.
              </li>
              <li>
                Special Finale: As The Sun Sets, Prepare To Be Mesmerized By A
                Spectacular Live Drone Show Over The Water. Enjoy Synchronized
                DJ Music And An Unparalleled 3D View Of The Drone Show,
                Exclusively Available To Ticket Holders Within The Main Music
                Stage Area
              </li>
              <li>LINE-UP TO BE ANNOUNCED</li>
            </ul>
            <div className="text">
              Join Us For An Unforgettable Summer Experience At The Bootleggers
              X Pixel Summer Festival! Nestled In The Heart Of Downtown
              Vancouver, This Vibrant Festival Promises An Eclectic Mix Of
              Music, Art, And Community Spirit.
            </div>
            <div className="title">Location</div>
            <div className="text">
              <img src="./images/location.svg" alt="" />
              <span>Rawalpindi, Pakistan</span>
            </div>
            <div className="title">Venue</div>
            <div className="text">CICA Vancouver</div>
            <div className="title">Refund Policy</div>
            <div className="text">Refunds up to 7 days before event</div>
          </div>
          <div className="ticket-detail">
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
            <div className="ticket-wrapper">
              <div className="heading">Ticket Price</div>
              <div className="count">
                <div className="title">Adult($10)</div>
                <div className="detail">
                  <div className="box">-</div> 0<div className="box">+</div>
                </div>
              </div>
              <div className="count">
                <div className="title">Child($20)</div>
                <div className="detail">
                  <div className="box">-</div> 0<div className="box">+</div>
                </div>
              </div>
              <div className="count">
                <div className="title">Seniors($5)</div>
                <div className="detail">
                  <div className="box">-</div> 0<div className="box">+</div>
                </div>
              </div>
              <div className="total">
                <div className="title">Total Amount</div>
                <div className="price">CA $340</div>
              </div>
              <button data-bs-toggle="modal" data-bs-target="#buy-ticket">
                Get Ticket
              </button>
            </div>
            <div className="become-sponsor">
              <button
                data-bs-toggle="modal"
                data-bs-target="#become-sponsor-vender"
              >
                Become a Sponsors
              </button>
            </div>
            <div className="verical-banner">
              <img src="./images/vericle-banner.svg" alt="" />
            </div>
            <div className="map-wrapper">
              <img src="./images/map.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="group-navigation">
          <div className="link">Photos</div>
          <div className="link">Videos</div>
          <div className="link">Sponsors</div>
          <div className="link active-link">Advertisers</div>
          <div className="link">Artists</div>
          <div className="link">Seating Layout</div>
          <div className="link">Specification</div>
          <div className="link">Contact Organizer</div>
        </div>
        <div className="advertiser-wrapper">
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
            <div className="heading">Similar Events</div>
            <div className="icons">
              <div className="arrow" id="prev-btn">
                <img src="./images/arrow-left.svg" alt="" />
              </div>
              <div className="arrow" id="next-btn">
                <img src="./images/arrow-right.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="slider" id="carousel">
            <div
              className="event-list"
              style={{ gridTemplateColumns: "repeat(6 ,auto)" }}
            >
              <div className="event">
                <div className="img-wrapper">
                  <img src="./images/event.svg" alt="" />
                </div>
                <div className="title">Masterclass-Currency</div>
                <div className="date">
                  Mar-16-2024
                  <span>Started at 07 : 00 AM</span>
                </div>
                <div className="hosted">
                  Hosted by <span>Aneema Agarwal</span>
                </div>
                <div className="location">
                  <img src="./images/location.svg" alt="" />
                  <span>Rawalpindi, Pakistan</span>
                </div>
                <div className="from">From $109.5</div>
              </div>
              <div className="event">
                <div className="img-wrapper">
                  <img src="./images/event.svg" alt="" />
                </div>
                <div className="title">Masterclass-Currency</div>
                <div className="date">
                  Mar-16-2024
                  <span>Started at 07 : 00 AM</span>
                </div>
                <div className="hosted">
                  Hosted by <span>Aneema Agarwal</span>
                </div>
                <div className="location">
                  <img src="./images/location.svg" alt="" />
                  <span>Rawalpindi, Pakistan</span>
                </div>
                <div className="from">From $109.5</div>
              </div>
              <div className="event">
                <div className="img-wrapper">
                  <img src="./images/event.svg" alt="" />
                </div>
                <div className="title">Masterclass-Currency</div>
                <div className="date">
                  Mar-16-2024
                  <span>Started at 07 : 00 AM</span>
                </div>
                <div className="hosted">
                  Hosted by <span>Aneema Agarwal</span>
                </div>
                <div className="location">
                  <img src="./images/location.svg" alt="" />
                  <span>Rawalpindi, Pakistan</span>
                </div>
                <div className="from">From $109.5</div>
              </div>
              <div className="event">
                <div className="img-wrapper">
                  <img src="./images/event.svg" alt="" />
                </div>
                <div className="title">Masterclass-Currency</div>
                <div className="date">
                  Mar-16-2024
                  <span>Started at 07 : 00 AM</span>
                </div>
                <div className="hosted">
                  Hosted by <span>Aneema Agarwal</span>
                </div>
                <div className="location">
                  <img src="./images/location.svg" alt="" />
                  <span>Rawalpindi, Pakistan</span>
                </div>
                <div className="from">From $109.5</div>
              </div>
              <div className="event">
                <div className="img-wrapper">
                  <img src="./images/event.svg" alt="" />
                </div>
                <div className="title">Masterclass-Currency</div>
                <div className="date">
                  Mar-16-2024
                  <span>Started at 07 : 00 AM</span>
                </div>
                <div className="hosted">
                  Hosted by <span>Aneema Agarwal</span>
                </div>
                <div className="location">
                  <img src="./images/location.svg" alt="" />
                  <span>Rawalpindi, Pakistan</span>
                </div>
                <div className="from">From $109.5</div>
              </div>
              <div className="event">
                <div className="img-wrapper">
                  <img src="./images/event.svg" alt="" />
                </div>
                <div className="title">Masterclass-Currency</div>
                <div className="date">
                  Mar-16-2024
                  <span>Started at 07 : 00 AM</span>
                </div>
                <div className="hosted">
                  Hosted by <span>Aneema Agarwal</span>
                </div>
                <div className="location">
                  <img src="./images/location.svg" alt="" />
                  <span>Rawalpindi, Pakistan</span>
                </div>
                <div className="from">From $109.5</div>
              </div>
            </div>
          </div>
        </div>
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

export default page