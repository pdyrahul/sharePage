'use client'
import React from 'react'

const page = () => {
  return (
    <>

    <div className="event-body">
      <div className="heading">Sponsors List</div>
      <div className="event-page">
        <div className="page-filter">
          <div className="left">
            <div className="search-box">
              <input type="text" placeholder="Search Events by keyword" />
              <div className="search-icon">
                <img src="./images/search-3.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="right">
            <button
              data-bs-toggle="modal"
              data-bs-target="#sponsorship-package-add"
            >
              Add Package
            </button>
            <button data-bs-toggle="modal" data-bs-target="#sponsors-add">
              Add Sponsors
            </button>
          </div>
        </div>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th style={{ width: "20%" }}>Company Name</th>
                <th className="text-center" style={{ width: "18%" }}>
                  Contact Name
                </th>
                <th className="text-center" style={{ width: "18%" }}>
                  Phone Number
                </th>
                <th className="text-center" style={{ width: "18%" }}>
                  Email
                </th>
                <th className="text-center" style={{ width: "15%" }}>
                  City
                </th>
                <th style={{ width: "14%" }} />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ paddingLeft: 20, textAlign: "left" }}>Codegenio</td>
                <td>Ahmed</td>
                <td>+927398319983</td>
                <td>shoiab123@gmail.com</td>
                <td>Rawalpindi</td>
                <td className="action">
                  <img
                    src="./images/three-dot-red.svg"
                    alt=""
                    className="dot"
                    onclick="threeDot()"
                  />
                  <div
                    className="more-links"
                    id="three-dot"
                    style={{ display: "none" }}
                  >
                    <div className="link">
                      <span className="img">
                        <img src="./images/view.svg" alt="" />
                      </span>
                      <span>View</span>
                    </div>
                    <div className="link">
                      <span className="img">
                        <img src="./images/edit.svg" alt="" />
                      </span>
                      <span>Edit</span>
                    </div>
                    <div className="link">
                      <span className="img" style={{ paddingLeft: 4 }}>
                        <img src="./images/delete-2.svg" alt="" />
                      </span>
                      <span>Delete</span>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td style={{ paddingLeft: 20, textAlign: "left" }}>Codegenio</td>
                <td>Ahmed</td>
                <td>+927398319983</td>
                <td>shoiab123@gmail.com</td>
                <td>Rawalpindi</td>
                <td className="action">
                  <img src="./images/three-dot-red.svg" alt="" className="dot" />
                  <div className="more-links" style={{ display: "none" }}>
                    <div className="link">
                      <span className="img">
                        <img src="./images/view.svg" alt="" />
                      </span>
                      <span>View</span>
                    </div>
                    <div className="link">
                      <span className="img">
                        <img src="./images/edit.svg" alt="" />
                      </span>
                      <span>Edit</span>
                    </div>
                    <div className="link">
                      <span className="img" style={{ paddingLeft: 4 }}>
                        <img src="./images/delete-2.svg" alt="" />
                      </span>
                      <span>Delete</span>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td style={{ paddingLeft: 20, textAlign: "left" }}>Codegenio</td>
                <td>Ahmed</td>
                <td>+927398319983</td>
                <td>shoiab123@gmail.com</td>
                <td>Rawalpindi</td>
                <td className="action">
                  <img src="./images/three-dot-red.svg" alt="" className="dot" />
                  <div className="more-links" style={{ display: "none" }}>
                    <div className="link">
                      <span className="img">
                        <img src="./images/view.svg" alt="" />
                      </span>
                      <span>View</span>
                    </div>
                    <div className="link">
                      <span className="img">
                        <img src="./images/edit.svg" alt="" />
                      </span>
                      <span>Edit</span>
                    </div>
                    <div className="link">
                      <span className="img" style={{ paddingLeft: 4 }}>
                        <img src="./images/delete-2.svg" alt="" />
                      </span>
                      <span>Delete</span>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td style={{ paddingLeft: 20, textAlign: "left" }}>Codegenio</td>
                <td>Ahmed</td>
                <td>+927398319983</td>
                <td>shoiab123@gmail.com</td>
                <td>Rawalpindi</td>
                <td className="action">
                  <img src="./images/three-dot-red.svg" alt="" className="dot" />
                  <div className="more-links" style={{ display: "none" }}>
                    <div className="link">
                      <span className="img">
                        <img src="./images/view.svg" alt="" />
                      </span>
                      <span>View</span>
                    </div>
                    <div className="link">
                      <span className="img">
                        <img src="./images/edit.svg" alt="" />
                      </span>
                      <span>Edit</span>
                    </div>
                    <div className="link">
                      <span className="img" style={{ paddingLeft: 4 }}>
                        <img src="./images/delete-2.svg" alt="" />
                      </span>
                      <span>Delete</span>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td style={{ paddingLeft: 20, textAlign: "left" }}>Codegenio</td>
                <td>Ahmed</td>
                <td>+927398319983</td>
                <td>shoiab123@gmail.com</td>
                <td>Rawalpindi</td>
                <td className="action">
                  <img src="./images/three-dot-red.svg" alt="" className="dot" />
                  <div className="more-links" style={{ display: "none" }}>
                    <div className="link">
                      <span className="img">
                        <img src="./images/view.svg" alt="" />
                      </span>
                      <span>View</span>
                    </div>
                    <div className="link">
                      <span className="img">
                        <img src="./images/edit.svg" alt="" />
                      </span>
                      <span>Edit</span>
                    </div>
                    <div className="link">
                      <span className="img" style={{ paddingLeft: 4 }}>
                        <img src="./images/delete-2.svg" alt="" />
                      </span>
                      <span>Delete</span>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td style={{ paddingLeft: 20, textAlign: "left" }}>Codegenio</td>
                <td>Ahmed</td>
                <td>+927398319983</td>
                <td>shoiab123@gmail.com</td>
                <td>Rawalpindi</td>
                <td className="action">
                  <img src="./images/three-dot-red.svg" alt="" className="dot" />
                  <div className="more-links" style={{ display: "none" }}>
                    <div className="link">
                      <span className="img">
                        <img src="./images/view.svg" alt="" />
                      </span>
                      <span>View</span>
                    </div>
                    <div className="link">
                      <span className="img">
                        <img src="./images/edit.svg" alt="" />
                      </span>
                      <span>Edit</span>
                    </div>
                    <div className="link">
                      <span className="img" style={{ paddingLeft: 4 }}>
                        <img src="./images/delete-2.svg" alt="" />
                      </span>
                      <span>Delete</span>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td style={{ paddingLeft: 20, textAlign: "left" }}>Codegenio</td>
                <td>Ahmed</td>
                <td>+927398319983</td>
                <td>shoiab123@gmail.com</td>
                <td>Rawalpindi</td>
                <td className="action">
                  <img src="./images/three-dot-red.svg" alt="" className="dot" />
                  <div className="more-links" style={{ display: "none" }}>
                    <div className="link">
                      <span className="img">
                        <img src="./images/view.svg" alt="" />
                      </span>
                      <span>View</span>
                    </div>
                    <div className="link">
                      <span className="img">
                        <img src="./images/edit.svg" alt="" />
                      </span>
                      <span>Edit</span>
                    </div>
                    <div className="link">
                      <span className="img" style={{ paddingLeft: 4 }}>
                        <img src="./images/delete-2.svg" alt="" />
                      </span>
                      <span>Delete</span>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td style={{ paddingLeft: 20, textAlign: "left" }}>Codegenio</td>
                <td>Ahmed</td>
                <td>+927398319983</td>
                <td>shoiab123@gmail.com</td>
                <td>Rawalpindi</td>
                <td className="action">
                  <img src="./images/three-dot-red.svg" alt="" className="dot" />
                  <div className="more-links" style={{ display: "none" }}>
                    <div className="link">
                      <span className="img">
                        <img src="./images/view.svg" alt="" />
                      </span>
                      <span>View</span>
                    </div>
                    <div className="link">
                      <span className="img">
                        <img src="./images/edit.svg" alt="" />
                      </span>
                      <span>Edit</span>
                    </div>
                    <div className="link">
                      <span className="img" style={{ paddingLeft: 4 }}>
                        <img src="./images/delete-2.svg" alt="" />
                      </span>
                      <span>Delete</span>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
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
   
  </>
  
  )
}

export default page