import React from 'react'
import Link from 'next/link';
const page = () => {
  return (
    <div className="body-wrapper">
  <div className="event-wrapper">
    <div className="event-body">
      <div className="top-heading">
        <div className="top-name">Events</div>
        <Link href="/my-events">
              <button className="top-btn">Dashboard</button>
            </Link>
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
        <div className="item active">
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
        <div className="input-group" style={{ width: 250 }}>
          <label>Filter by category</label>
          <select className="form-select" aria-label="Default select example">
            <option selected="">Filter by category</option>
            <option value={1}>One</option>
            <option value={2}>Two</option>
            <option value={3}>Three</option>
          </select>
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
              <div className="location">
                <img src="./images/location.svg" alt="" />
                <span>Rawalpindi, Pakistan</span>
              </div>
              <div className="hosted">
                By <span>Aneema Agarwal</span>
              </div>
              <div className="location">Target $500,000,000</div>
              <div className="from">From $109.5</div>
            </div>
            <div className="event">
              <div className="img-wrapper">
                <img src="./images/event.svg" alt="" />
              </div>
              <div className="title">Masterclass-Currency</div>
              <div className="location">
                <img src="./images/location.svg" alt="" />
                <span>Rawalpindi, Pakistan</span>
              </div>
              <div className="hosted">
                By <span>Aneema Agarwal</span>
              </div>
              <div className="location">Target $500,000,000</div>
              <div className="from">From $109.5</div>
            </div>
            <div className="event">
              <div className="img-wrapper">
                <img src="./images/event.svg" alt="" />
              </div>
              <div className="title">Masterclass-Currency</div>
              <div className="location">
                <img src="./images/location.svg" alt="" />
                <span>Rawalpindi, Pakistan</span>
              </div>
              <div className="hosted">
                By <span>Aneema Agarwal</span>
              </div>
              <div className="location">Target $500,000,000</div>
              <div className="from">From $109.5</div>
            </div>
            <div className="event">
              <div className="img-wrapper">
                <img src="./images/event.svg" alt="" />
              </div>
              <div className="title">Masterclass-Currency</div>
              <div className="location">
                <img src="./images/location.svg" alt="" />
                <span>Rawalpindi, Pakistan</span>
              </div>
              <div className="hosted">
                By <span>Aneema Agarwal</span>
              </div>
              <div className="location">Target $500,000,000</div>
              <div className="from">From $109.5</div>
            </div>
            <div className="event">
              <div className="img-wrapper">
                <img src="./images/event.svg" alt="" />
              </div>
              <div className="title">Masterclass-Currency</div>
              <div className="location">
                <img src="./images/location.svg" alt="" />
                <span>Rawalpindi, Pakistan</span>
              </div>
              <div className="hosted">
                By <span>Aneema Agarwal</span>
              </div>
              <div className="location">Target $500,000,000</div>
              <div className="from">From $109.5</div>
            </div>
            <div className="event">
              <div className="img-wrapper">
                <img src="./images/event.svg" alt="" />
              </div>
              <div className="title">Masterclass-Currency</div>
              <div className="location">
                <img src="./images/location.svg" alt="" />
                <span>Rawalpindi, Pakistan</span>
              </div>
              <div className="hosted">
                By <span>Aneema Agarwal</span>
              </div>
              <div className="location">Target $500,000,000</div>
              <div className="from">From $109.5</div>
            </div>
          </div>
        </div>
      </div>
      <div className="event-box-wrapper">
        <div className="main-heading">
          <div className="heading">Near By</div>
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
              <div className="location">
                <img src="./images/location.svg" alt="" />
                <span>Rawalpindi, Pakistan</span>
              </div>
              <div className="hosted">
                By <span>Aneema Agarwal</span>
              </div>
              <div className="location">Target $500,000,000</div>
              <div className="from">From $109.5</div>
            </div>
            <div className="event">
              <div className="img-wrapper">
                <img src="./images/event.svg" alt="" />
              </div>
              <div className="title">Masterclass-Currency</div>
              <div className="location">
                <img src="./images/location.svg" alt="" />
                <span>Rawalpindi, Pakistan</span>
              </div>
              <div className="hosted">
                By <span>Aneema Agarwal</span>
              </div>
              <div className="location">Target $500,000,000</div>
              <div className="from">From $109.5</div>
            </div>
            <div className="event">
              <div className="img-wrapper">
                <img src="./images/event.svg" alt="" />
              </div>
              <div className="title">Masterclass-Currency</div>
              <div className="location">
                <img src="./images/location.svg" alt="" />
                <span>Rawalpindi, Pakistan</span>
              </div>
              <div className="hosted">
                By <span>Aneema Agarwal</span>
              </div>
              <div className="location">Target $500,000,000</div>
              <div className="from">From $109.5</div>
            </div>
            <div className="event">
              <div className="img-wrapper">
                <img src="./images/event.svg" alt="" />
              </div>
              <div className="title">Masterclass-Currency</div>
              <div className="location">
                <img src="./images/location.svg" alt="" />
                <span>Rawalpindi, Pakistan</span>
              </div>
              <div className="hosted">
                By <span>Aneema Agarwal</span>
              </div>
              <div className="location">Target $500,000,000</div>
              <div className="from">From $109.5</div>
            </div>
            <div className="event">
              <div className="img-wrapper">
                <img src="./images/event.svg" alt="" />
              </div>
              <div className="title">Masterclass-Currency</div>
              <div className="location">
                <img src="./images/location.svg" alt="" />
                <span>Rawalpindi, Pakistan</span>
              </div>
              <div className="hosted">
                By <span>Aneema Agarwal</span>
              </div>
              <div className="location">Target $500,000,000</div>
              <div className="from">From $109.5</div>
            </div>
            <div className="event">
              <div className="img-wrapper">
                <img src="./images/event.svg" alt="" />
              </div>
              <div className="title">Masterclass-Currency</div>
              <div className="location">
                <img src="./images/location.svg" alt="" />
                <span>Rawalpindi, Pakistan</span>
              </div>
              <div className="hosted">
                By <span>Aneema Agarwal</span>
              </div>
              <div className="location">Target $500,000,000</div>
              <div className="from">From $109.5</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default page