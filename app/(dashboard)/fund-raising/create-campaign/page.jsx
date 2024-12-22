'use client'
import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';

const Page = () => {
  const editor = useRef(null);
  const [content, setContent] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    type: '',
    category: '',
    goal: '',
    country: '',
    state: '',
    city: '',
    postalCode: '',
    launchDate: '',
    phoneNumber: '',
    beneficiaryFirstName: '',
    beneficiaryLastName: '',
    bannerImage: null,
    posterImage: null,
    albumPhotos: [],
    albumVideos: [],
  });

  const config = useMemo(() => ({
    readonly: false,
    placeholder: 'Start typing...',
  }), []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files.length > 0) {
      setFormData({ ...formData, [name]: files[0] });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };
  const style = {
    'jodit-react-container': {
      width: '100%', // Correctly formatted width
      border: '1px solid #ccc', // Example additional style
      minHeight: '300px', // Example additional style
    },
  };
  return (
    <div className="event-body">
      <div className="heading">Create a Fund Raising Campaign</div>
      <form className="submit-an-event" onSubmit={handleSubmit}>
        <div className="input-group in-1-col">
          <label>
            Title<span style={{ color: "#ef1d26" }}>*</span>
          </label>
          <input type="text" name="title" placeholder="Enter Event Title" value={formData.title} onChange={handleChange} required />
        </div>
        <div className="input-group in-3-col">
          <label>
            Type<span style={{ color: "#ef1d26" }}>*</span>
          </label>
          <select name="type" className="form-select" value={formData.type} onChange={handleChange} required>
            <option value="">Select Type</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className="input-group in-3-col">
          <label>
            Category<span style={{ color: "#ef1d26" }}>*</span>
          </label>
          <select name="category" className="form-select" value={formData.category} onChange={handleChange} required>
            <option value="">Select Category</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className="input-group in-3-col">
          <label>
            Fund Raising Goal<span style={{ color: "#ef1d26" }}>*</span>
          </label>
          <input type="text" name="goal" placeholder="Enter Goals" value={formData.goal} onChange={handleChange} required />
        </div>
        <div className="input-group in-3-col">
          <label>
            Country Where Funds Will Go<span style={{ color: "#ef1d26" }}>*</span>
          </label>
          <select name="country" className="form-select" value={formData.country} onChange={handleChange} required>
            <option value="">Select Country</option>
            <option value="1">One</ option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className="input-group in-3-col">
          <label>
            State<span style={{ color: "#ef1d26" }}>*</span>
          </label>
          <select name="state" className="form-select" value={formData.state} onChange={handleChange} required>
            <option value="">Select State</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className="input-group in-3-col">
          <label>
            City<span style={{ color: "#ef1d26" }}>*</span>
          </label>
          <select name="city" className="form-select" value={formData.city} onChange={handleChange} required>
            <option value="">Select City</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className="input-group in-3-col">
          <label>
            Postal Code<span style={{ color: "#ef1d26" }}>*</span>
          </label>
          <input type="text" name="postalCode" placeholder="Enter Address" value={formData.postalCode} onChange={handleChange} required />
        </div>
        <div className="input-group in-3-col">
          <label>
            Launch Date<span style={{ color: "#ef1d26" }}>*</span>
          </label>
          <input type="date" name="launchDate" value={formData.launchDate} onChange={handleChange} required />
        </div>
        <div className="input-group in-3-col">
          <label>
            Your Phone Number<span style={{ color: "#ef1d26" }}>*</span>
          </label>
          <input type="number" name="phoneNumber" placeholder="Enter Phone number" value={formData.phoneNumber} onChange={handleChange} required />
        </div>
        <div className="input-group in-3-col">
          <label>
            Who is this Fund Raising For?<span style={{ color: "#ef1d26" }}>*</span>
          </label>
          <select name="beneficiaryType" className="form-select" value={formData.beneficiaryType} onChange={handleChange} required>
            <option value="">Some One Else</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className="input-group in-3-col">
          <label>
            Type the beneficiary’s Full Name<span style={{ color: "#ef1d26" }}>*</span>
          </label>
          <input type="text" name="beneficiaryFirstName" placeholder="First Name" value={formData.beneficiaryFirstName} onChange={handleChange} required />
        </div>
        <div className="input-group in-3-col">
          <label>
            -<span style={{ color: "#ef1d26" }}>*</span>
          </label>
          <input type="text" name="beneficiaryLastName" placeholder="Last Name" value={formData.beneficiaryLastName} onChange={handleChange} required />
        </div>
        <div className="input-group in-1-col desc ">
          <label>
            Description<span style={{ color: "#ef1d26" }}>*</span>
          </label>
          {/* <div className="icons">
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
          </div> */}
          <JoditEditor
            ref={editor}
            value={content}
            config={config}
            tabIndex={1}
            onBlur={newContent => setContent(newContent)}
            onChange={newContent => setContent(newContent)}
          />

        </div>
        <div className="banner-img">
          <label htmlFor="banner-upload">
            <p>
              <span>Click Here</span> to upload banner image of Fund Raising*(png, jpg, jpeg)
            </p>
            <input type="file" id="banner-upload" name="bannerImage" onChange={handleFileChange} />
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
              <input type="file" id="poster-upload" name="posterImage" onChange={handleFileChange} />
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
                <input type="file" id="photo-upload" name="albumPhotos" onChange={handleFileChange} />
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
            <div className="poster-img video" style={{ height: "auto", margin: 0, minHeight: 160 }}>
              <label htmlFor="video-upload">
                <p>
                  <span>Click Here</span> to upload video
                </p>
                <input type="file" id="video-upload" name="albumVideos" onChange={handleFileChange} />
              </label>
            </div>
          </div>
        </div>
        <div className="main-btn">
          <button type="button" style={{ border: "1px solid #cc1111", color: "#cc1111", background: "none" }}>
            SAVE AS DRAFT
          </button>
          <button type="button" style={{ border: "1px solid #cc1111", color: "#cc1111", background: "none" }}>
            PREVIEW
          </button>
          <button type="submit" className="prim">LAUNCH</button>
        </div>
      </form>
    </div>
  );
};

export default Page;