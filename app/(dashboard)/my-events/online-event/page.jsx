import React from 'react'

const page = () => {
  return (
    <div className="event-body">
  <div className="heading">Online Events</div>
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
    </div>
    <div className="event-list">
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

  )
}

export default page