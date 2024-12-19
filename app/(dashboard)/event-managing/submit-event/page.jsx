import React from 'react'

const page = () => {
  return (
    <div className="event-body">
  <div className="heading">Submit an Event</div>
  <form className="submit-an-event">
    <div className="input-group in-1-col">
      <label>
        Title<span style={{ color: "#EF1D26" }}>*</span>
      </label>
      <input type="text" placeholder="Enter Event Title" />
    </div>
    <div className="input-group in-3-col">
      <label>
        Type<span style={{ color: "#EF1D26" }}>*</span>
      </label>
      <select className="form-select" aria-label="Default select example">
        <option selected="">Select Type</option>
        <option value={1}>One</option>
        <option value={2}>Two</option>
        <option value={3}>Three</option>
      </select>
    </div>
    <div className="input-group in-3-col">
      <label>
        Category<span style={{ color: "#EF1D26" }}>*</span>
      </label>
      <select className="form-select" aria-label="Default select example">
        <option selected="">Select Category</option>
        <option value={1}>One</option>
        <option value={2}>Two</option>
        <option value={3}>Three</option>
      </select>
    </div>
    <div className="input-group in-3-col">
      <label>
        Sub Category<span style={{ color: "#EF1D26" }}>*</span>
      </label>
      <select className="form-select" aria-label="Default select example">
        <option selected="">Select Sub Category</option>
        <option value={1}>One</option>
        <option value={2}>Two</option>
        <option value={3}>Three</option>
      </select>
    </div>
    <div className="input-group in-1-col">
      <label>
        Address<span style={{ color: "#EF1D26" }}>*</span>
      </label>
      <input type="text" placeholder="Enter Address" />
    </div>
    <div className="input-group in-0-75-col">
      <label>
        Venue Name<span style={{ color: "#EF1D26" }}>*</span>
      </label>
      <input type="text" placeholder="Enter Venue Name" />
    </div>
    <div className="input-group in-3-col">
      <label>
        Capacity<span style={{ color: "#EF1D26" }}>*</span>
      </label>
      <input type="number" placeholder="Enter Capacity" />
    </div>
    <div className="input-group in-3-col">
      <label>
        Event Date<span style={{ color: "#EF1D26" }}>*</span>
      </label>
      <input type="date" />
    </div>
    <div
      className="input-group in-3-col"
      style={{ display: "flex", columnGap: 15 }}
    >
      <div className="input-group in-2-col" style={{ marginBottom: 0 }}>
        <label>
          Start Time<span style={{ color: "#EF1D26" }}>*</span>
        </label>
        <input type="time" />
      </div>
      <div className="input-group in-2-col" style={{ marginBottom: 0 }}>
        <label>
          End Time<span style={{ color: "#EF1D26" }}>*</span>
        </label>
        <input type="time" />
      </div>
    </div>
    <div className="input-group in-1-col desc">
      <label>
        Description<span style={{ color: "#EF1D26" }}>*</span>
      </label>
      <textarea
        placeholder="Type Description"
        rows={6}
        cols={50}
        defaultValue={""}
      />
      <div className="icons">
        <div className="icon">
          <img src="./images/italic.svg" alt="" />
        </div>
        <div className="icon">
          <img src="./images/bold.svg" alt="" />
        </div>
        <div className="icon">
          <img src="./images/underline.svg" alt="" />
        </div>
        <div className="icon">
          <img src="./images/line-through.svg" alt="" />
        </div>
        <div className="icon">Generate By AI</div>
      </div>
    </div>
    <div className="input-group in-1-col">
      <label>
        Amenities<span style={{ color: "#EF1D26" }}>*</span>
      </label>
      <textarea
        placeholder="Type Amenities"
        rows={6}
        cols={50}
        defaultValue={""}
      />
    </div>
    <div className="in-1-col" style={{ marginTop: 10, marginBottom: 20 }}>
      <button
        type="button"
        className="my-btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#ticket-add"
      >
        Add Ticket
      </button>
    </div>
    <div className="input-group in-1-col">
      <label>
        Refund Policy<span style={{ color: "#EF1D26" }}>*</span>
      </label>
      <textarea placeholder="Type Here" rows={6} cols={50} defaultValue={""} />
    </div>
    <div className="cancel-policy">
      <p>
        <a href="">Click Here</a> to see cancellation policy
      </p>
    </div>
    <div className="banner-img">
      <label htmlFor="banner-upload">
        <p>
          <span>Click Here</span> to upload banner image of Event*(png, jpg,
          jpeg)
        </p>
        <input type="file" id="banner-upload" />
      </label>
    </div>
    <div className="in-1-col img-label">
      <label>
        Event Poster<span style={{ color: "#EF1D26" }}>*</span>
      </label>
      <div className="poster-img">
        <label htmlFor="poster-upload">
          <p>
            <span>Click Here</span> to upload Image
          </p>
          <input type="file" id="poster-upload" />
        </label>
      </div>
    </div>
    <div className="in-1-col img-label">
      <label>
        Sitting Layout Image<span style={{ color: "#EF1D26" }}>*</span>
      </label>
      <div className="poster-img">
        <label htmlFor="layout-upload">
          <p>
            <span>Click Here</span> to upload Image
          </p>
          <input type="file" id="layout-upload" />
        </label>
      </div>
    </div>
    <div className="in-1-col img-label">
      <label>
        Album Photos<span style={{ color: "#EF1D26" }}>*</span>
      </label>
      <div className="photo-wrapper">
        <div className="photo">
          <div className="img-wrapper">
            <img src="./images/photo.svg" alt="" />
          </div>
          <div className="icon">
            <img src="./images/cross.svg" alt="" />
          </div>
        </div>
        <div className="poster-img photo">
          <label htmlFor="photo-upload">
            <p>
              <span>Click Here</span> to upload Image
            </p>
            <input type="file" id="photo-upload" />
          </label>
        </div>
      </div>
    </div>
    <div className="in-1-col img-label">
      <label>
        Album Videos<span style={{ color: "#EF1D26" }}>*</span>
      </label>
      <div className="video-wrapper">
        <div className="video">
          <div className="img-wrapper">
            <img src="./images/video-1.svg" alt="" />
          </div>
          <div className="icon">
            <img src="./images/cross.svg" alt="" />
          </div>
          <div className="play">
            <img src="./images/play.svg" alt="" />
          </div>
        </div>
        <div
          className="poster-img video"
          style={{ height: "auto", margin: 0, minHeight: 160 }}
        >
          <label htmlFor="video-upload">
            <p>
              <span>Click Here</span> to upload video
            </p>
            <input type="file" id="video-upload" />
          </label>
        </div>
      </div>
    </div>
    <div className="main-btn">
      <button
        style={{
          border: "1px solid #CC1111",
          color: "#CC1111",
          background: "none"
        }}
      >
        SAVE AS DRAFT
      </button>
      <button
        style={{
          border: "1px solid #CC1111",
          color: "#CC1111",
          background: "none"
        }}
      >
        PREVIEW
      </button>
      <button className="prim">SUBMIT</button>
    </div>
  </form>
</div>

  )
}

export default page