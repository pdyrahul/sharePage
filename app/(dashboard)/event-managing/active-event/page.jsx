import React from 'react'

const page = () => {
  return (
    <div className="event-body">
  <div className="heading">Active Events</div>
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
      <div className="right">
        <div className="input-group view">
          <div className="icon">
            <img src="./images/list.svg" alt="" />
          </div>
          <select className="form-select" aria-label="Default select example">
            <option selected="">View</option>
            <option value={1}>List</option>
            <option value={2}>Grid</option>
          </select>
        </div>
      </div>
    </div>
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th style={{ width: "20%" }}>Title</th>
            <th className="text-center" style={{ width: "20%" }}>
              Ticket Type
            </th>
            <th className="text-center" style={{ width: "18%" }}>
              Category
            </th>
            <th className="text-center" style={{ width: "17%" }}>
              Total Tickets Sold
            </th>
            <th className="text-center" style={{ width: "15%" }}>
              Status
            </th>
            <th style={{ width: "10%" }} />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ paddingLeft: 20, textAlign: "left" }}>Simple music</td>
            <td>Paid</td>
            <td>Music</td>
            <td>13</td>
            <td>
              <span className="status">Active</span>
            </td>
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
                    <img src="./images/pause.svg" alt="" />
                  </span>
                  <span>Pause</span>
                </div>
                <div className="link">
                  <span className="img">
                    <img src="./images/edit.svg" alt="" />
                  </span>
                  <span>Edit</span>
                </div>
                <div
                  className="link"
                  data-bs-toggle="modal"
                  data-bs-target="#sponsor-add"
                >
                  <span className="img">
                    <img src="./images/add-icon.svg" alt="" />
                  </span>
                  <span>Add sponsors</span>
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
            <td style={{ paddingLeft: 20, textAlign: "left" }}>Simple music</td>
            <td>Paid</td>
            <td>Music</td>
            <td>13</td>
            <td>
              <span className="status">Active</span>
            </td>
            <td className="action">
              <img src="./images/three-dot-red.svg" alt="" className="dot" />
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
                    <img src="./images/pause.svg" alt="" />
                  </span>
                  <span>Pause</span>
                </div>
                <div className="link">
                  <span className="img">
                    <img src="./images/edit.svg" alt="" />
                  </span>
                  <span>Edit</span>
                </div>
                <div className="link">
                  <span className="img">
                    <img src="./images/add-icon.svg" alt="" />
                  </span>
                  <span>Add sponsors</span>
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
            <td style={{ paddingLeft: 20, textAlign: "left" }}>Simple music</td>
            <td>Paid</td>
            <td>Music</td>
            <td>13</td>
            <td>
              <span className="status">Active</span>
            </td>
            <td className="action">
              <img src="./images/three-dot-red.svg" alt="" className="dot" />
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
                    <img src="./images/pause.svg" alt="" />
                  </span>
                  <span>Pause</span>
                </div>
                <div className="link">
                  <span className="img">
                    <img src="./images/edit.svg" alt="" />
                  </span>
                  <span>Edit</span>
                </div>
                <div className="link">
                  <span className="img">
                    <img src="./images/add-icon.svg" alt="" />
                  </span>
                  <span>Add sponsors</span>
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
            <td style={{ paddingLeft: 20, textAlign: "left" }}>Simple music</td>
            <td>Paid</td>
            <td>Music</td>
            <td>13</td>
            <td>
              <span className="status">Active</span>
            </td>
            <td className="action">
              <img src="./images/three-dot-red.svg" alt="" className="dot" />
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
                    <img src="./images/pause.svg" alt="" />
                  </span>
                  <span>Pause</span>
                </div>
                <div className="link">
                  <span className="img">
                    <img src="./images/edit.svg" alt="" />
                  </span>
                  <span>Edit</span>
                </div>
                <div className="link">
                  <span className="img">
                    <img src="./images/add-icon.svg" alt="" />
                  </span>
                  <span>Add sponsors</span>
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
            <td style={{ paddingLeft: 20, textAlign: "left" }}>Simple music</td>
            <td>Paid</td>
            <td>Music</td>
            <td>13</td>
            <td>
              <span className="status">Active</span>
            </td>
            <td className="action">
              <img src="./images/three-dot-red.svg" alt="" className="dot" />
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
                    <img src="./images/pause.svg" alt="" />
                  </span>
                  <span>Pause</span>
                </div>
                <div className="link">
                  <span className="img">
                    <img src="./images/edit.svg" alt="" />
                  </span>
                  <span>Edit</span>
                </div>
                <div className="link">
                  <span className="img">
                    <img src="./images/add-icon.svg" alt="" />
                  </span>
                  <span>Add sponsors</span>
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
            <td style={{ paddingLeft: 20, textAlign: "left" }}>Simple music</td>
            <td>Paid</td>
            <td>Music</td>
            <td>13</td>
            <td>
              <span className="status">Active</span>
            </td>
            <td className="action">
              <img src="./images/three-dot-red.svg" alt="" className="dot" />
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
                    <img src="./images/pause.svg" alt="" />
                  </span>
                  <span>Pause</span>
                </div>
                <div className="link">
                  <span className="img">
                    <img src="./images/edit.svg" alt="" />
                  </span>
                  <span>Edit</span>
                </div>
                <div className="link">
                  <span className="img">
                    <img src="./images/add-icon.svg" alt="" />
                  </span>
                  <span>Add sponsors</span>
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

  )
}

export default page