import React from 'react'


const page = () => {
  return (
    <div className="event-body">
    <div className="heading">Create a Fund Raising Compagin</div>
    <form className="submit-an-event">
      <div className="input-group in-1-col">
        <label>
          Title<span style={{ color: "#ef1d26" }}>*</span>
        </label>
        <input type="text" placeholder="Enter Event Title" />
      </div>
      <div className="input-group in-3-col">
        <label>
          Type<span style={{ color: "#ef1d26" }}>*</span>
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
          Category<span style={{ color: "#ef1d26" }}>*</span>
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
          Fund Raising Goal<span style={{ color: "#ef1d26" }}>*</span>
        </label>
        <input type="text" placeholder="Enter Goals" />
      </div>
      <div className="input-group in-3-col">
        <label>
          Country Where Funds Will go<span style={{ color: "#ef1d26" }}>*</span>
        </label>
        <select className="form-select" aria-label="Default select example">
          <option selected="">Select Country</option>
          <option value={1}>One</option>
          <option value={2}>Two</option>
          <option value={3}>Three</option>
        </select>
      </div>
      <div className="input-group in-3-col">
        <label>
          State<span style={{ color: "#ef1d26" }}>*</span>
        </label>
        <select className="form-select" aria-label="Default select example">
          <option selected="">Select State</option>
          <option value={1}>One</option>
          <option value={2}>Two</option>
          <option value={3}>Three</option>
        </select>
      </div>
      <div className="input-group in-3-col">
        <label>
          City<span style={{ color: "#ef1d26" }}>*</span>
        </label>
        <select className="form-select" aria-label="Default select example">
          <option selected="">Select City</option>
          <option value={1}>One</option>
          <option value={2}>Two</option>
          <option value={3}>Three</option>
        </select>
      </div>
      <div className="input-group in-3-col">
        <label>
          Postal Code<span style={{ color: "#ef1d26" }}>*</span>
        </label>
        <input type="text" placeholder="Enter Address" />
      </div>
      <div className="input-group in-3-col">
        <label>
          Launch Date<span style={{ color: "#ef1d26" }}>*</span>
        </label>
        <input type="date" placeholder="Enter Launch Date" />
      </div>
      <div className="input-group in-3-col">
        <label>
          Your Phone Number<span style={{ color: "#ef1d26" }}>*</span>
        </label>
        <input type="number" placeholder="Enter Phone number" />
      </div>
      <div className="input-group in-3-col">
        <label>
          Who is this fund Raising For?<span style={{ color: "#ef1d26" }}>*</span>
        </label>
        <select className="form-select" aria-label="Default select example">
          <option selected="">Some One Else</option>
          <option value={1}>One</option>
          <option value={2}>Two</option>
          <option value={3}>Three</option>
        </select>
      </div>
      <div className="input-group in-3-col">
        <label>
          Type the beneficiary’s Full Name
          <span style={{ color: "#ef1d26" }}>*</span>
        </label>
        <input type="text" placeholder="First Name" />
      </div>
      <div className="input-group in-3-col">
        <label>
          -<span style={{ color: "#ef1d26" }}>*</span>
        </label>
        <input type="text" placeholder="Last Name" />
      </div>
      <div className="input-group in-1-col desc">
        <label>
          Description<span style={{ color: "#ef1d26" }}>*</span>
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
      <div className="banner-img">
        <label htmlFor="banner-upload">
          <p>
            <span>Click Here</span> to upload banner image of Fund Raising*(png,
            jbg,jpeg)
          </p>
          <input type="file" id="banner-upload" />
        </label>
      </div>
      <div className="in-1-col img-label">
        <label>
          Fund Raising Poster<span style={{ color: "#ef1d26" }}>*</span>
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
          Album Photos<span style={{ color: "#ef1d26" }}>*</span>
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
          Album Videos<span style={{ color: "#ef1d26" }}>*</span>
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
            border: "1px solid #cc1111",
            color: "#cc1111",
            background: "none"
          }}
        >
          SAVE AS DRAFT
        </button>
        <button
          style={{
            border: "1px solid #cc1111",
            color: "#cc1111",
            background: "none"
          }}
        >
          PREVIEW
        </button>
        <button className="prim">LAUNCH</button>
      </div>
    </form>
  </div>
  
  )
}

export default page