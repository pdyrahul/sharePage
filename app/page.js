import React from 'react'
import Head from 'next/head'
import Script from 'next/script'
import EventCarousel from '@/component/EventCarousel'

const page = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="./public-event-pages-module.css" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossOrigin="anonymous"
        />
        <title>Master Dashboard</title>

      </Head>
      <div className="body-wrapper">
        <div className="nav-bar">
          <div className="logo-menu">
            <div className="logo-wrapper">
              <img src="./images/logo.svg" alt="" />
            </div>
            <div className="menu" onClick="openAndCloseSideBar()">
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
            <div className="top-heading">
              <div className="top-name">Events</div>
              <button className="top-btn">Dashboard</button>
            </div>
            <div className="menu-filter">
              <div className="item">
                <div className="img-wrapper">
                  <img src="./images/microphone.svg" className="img-1" alt="" />
                  <img src="./images/microphone-2.svg" className="img-2" alt="" />
                </div>
                <span>Music</span>
              </div>
              <div className="item">
                <div className="img-wrapper">
                  <img src="./images/night.svg" className="img-1" alt="" />
                  <img src="./images/night-2.svg" className="img-2" alt="" />
                </div>
                <span>Nightlife</span>
              </div>
              <div className="item">
                <div className="img-wrapper">
                  <img src="./images/arts.svg" className="img-1" alt="" />
                  <img src="./images/arts-2.svg" className="img-2" alt="" />
                </div>
                <span>Arts &amp; Craft</span>
              </div>
              <div className="item">
                <div className="img-wrapper">
                  <img src="./images/brush.svg" className="img-1" alt="" />
                  <img src="./images/brush-2.svg" className="img-2" alt="" />
                </div>
                <span>Performing &amp; Visual Arts</span>
              </div>
              <div className="item">
                <div className="img-wrapper">
                  <img src="./images/kids.svg" className="img-1" alt="" />
                  <img src="./images/kids-2.svg" className="img-2" alt="" />
                </div>
                <span>Kids</span>
              </div>
              <div className="item">
                <div className="img-wrapper">
                  <img src="./images/classes.svg" className="img-1" alt="" />
                  <img src="./images/classes-2.svg" className="img-2" alt="" />
                </div>
                <span>Classes</span>
              </div>
              <div className="item">
                <div className="img-wrapper">
                  <img src="./images/culture.svg" className="img-1" alt="" />
                  <img src="./images/culture-2.svg" className="img-2" alt="" />
                </div>
                <span>Cultural</span>
              </div>
              <div className="item">
                <div className="img-wrapper">
                  <img src="./images/seniors.svg" className="img-1" alt="" />
                  <img src="./images/seniors-2.svg" className="img-2" alt="" />
                </div>
                <span>Seniors</span>
              </div>
              <div className="item">
                <div className="img-wrapper">
                  <img src="./images/hikes.svg" className="img-1" alt="" />
                  <img src="./images/hikes-2.svg" className="img-2" alt="" />
                </div>
                <span>Hikes</span>
              </div>
              <div className="item">
                <div className="img-wrapper">
                  <img src="./images/picnics.svg" className="img-1" alt="" />
                  <img src="./images/picnics-2.svg" className="img-2" alt="" />
                </div>
                <span>Picnics</span>
              </div>
              <div className="item">
                <div className="img-wrapper">
                  <img src="./images/online.svg" className="img-1" alt="" />
                  <img src="./images/online-2.svg" className="img-2" alt="" />
                </div>
                <span>Online </span>
              </div>
              <div className="item">
                <div className="img-wrapper">
                  <img src="./images/educational.svg" className="img-1" alt="" />
                  <img src="./images/educational-2.svg" className="img-2" alt="" />
                </div>
                <span>Educational</span>
              </div>
              <div className="item">
                <div className="img-wrapper">
                  <img src="./images/business.svg" className="img-1" alt="" />
                  <img src="./images/business-2.svg" className="img-2" alt="" />
                </div>
                <span>Business</span>
              </div>
              <div className="item">
                <div className="img-wrapper">
                  <img src="./images/mice.svg" className="img-1" alt="" />
                  <img src="./images/mice-2.svg" className="img-2" alt="" />
                </div>
                <span>Karaoke</span>
              </div>
              <div className="item">
                <div className="img-wrapper">
                  <img src="./images/comedies.svg" className="img-1" alt="" />
                  <img src="./images/comedies-2.svg" className="img-2" alt="" />
                </div>
                <span>Comedies</span>
              </div>
              <div className="item">
                <div className="img-wrapper">
                  <img src="./images/fund-raising.svg" className="img-1" alt="" />
                  <img src="./images/fund-raising-2.svg" className="img-2" alt="" />
                </div>
                <span>Fund Raising</span>
              </div>
              <div className="item">
                <div className="img-wrapper">
                  <img src="./images/single.svg" className="img-1" alt="" />
                  <img src="./images/single-2.svg" className="img-2" alt="" />
                </div>
                <span>Singles Mingles</span>
              </div>
              <div className="item">
                <div className="img-wrapper">
                  <img src="./images/trade.svg" className="img-1" alt="" />
                  <img src="./images/trade-2.svg" className="img-2" alt="" />
                </div>
                <span>Trade shows</span>
              </div>
              <div className="item">
                <div className="img-wrapper">
                  <img src="./images/job.svg" className="img-1" alt="" />
                  <img src="./images/job-2.svg" className="img-2" alt="" />
                </div>
                <span>Job Fair</span>
              </div>
              <div className="item">
                <div className="img-wrapper">
                  <img src="./images/dance.svg" className="img-1" alt="" />
                  <img src="./images/dance-2.svg" className="img-2" alt="" />
                </div>
                <span>Dance</span>
              </div>
            </div>
            <div className="filters">
              <div className="search-box">
                <input type="text" placeholder="Search Events by keyword" />
                <div className="search-icon">
                  <img src="./images/search-3.svg" alt="" />
                </div>
              </div>
              <div className="change-location">
                <div
                  className="change-location-btn"
                  data-bs-toggle="modal"
                  data-bs-target="#change-location"
                >
                  Change Location
                </div>
                <div className="location">Rawalpindi, Punjab, Pakistan</div>
              </div>
            </div>
            <div className="group-navigation">
              <div className="link active-link">All</div>
              <div className="link">For you</div>
              <div className="link">Today</div>
              <div className="link">This Weekend</div>
              <div className="link">This Month</div>
              <div className="link">Free</div>
              <div className="link">Online</div>
              <div className="link">Favouites</div>
            </div>
            <div className="event-box-wrapper">
              <div className="main-heading">
                <div className="heading">Educational</div>
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
            <div className="event-box-wrapper">
              <div className="main-heading">
                <div className="heading">Music</div>
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
        id="change-location"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <div className="loc-info">
                <div className="title">Current Location</div>
                <div className="location">Rawalpindi, Punjab, Pakistan</div>
              </div>
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Change Location
              </h1>
            </div>
            <div className="modal-body">
              <form action="">
                <div className="input-group in-1-col">
                  <label>Country</label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option select="">Select Country</option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                  </select>
                </div>
                <div className="input-group in-1-col">
                  <label>State</label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option select="">Select State</option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                  </select>
                </div>
                <div className="input-group in-1-col">
                  <label>City</label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option select="">Select City</option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                  </select>
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
                CHANGE
              </button>
            </div>
          </div>
        </div>
      </div>

      <Script src="Script.js">
      </Script>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" ></Script>
    </>
  )
}

export default page