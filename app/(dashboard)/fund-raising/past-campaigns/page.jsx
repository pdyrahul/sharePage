import React from 'react'

const page = () => {
  return (
    <div className="event-body">
    <div className="heading">Post Campaigns</div>
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
              <th style={{ width: "15%" }}>Title</th>
              <th className="text-center" style={{ width: "15%" }}>
                Category
              </th>
              <th className="text-center" style={{ width: "15%" }}>
                Target
              </th>
              <th className="text-center" style={{ width: "15%" }}>
                Raised
              </th>
              <th className="text-center" style={{ width: "15%" }}>
                Launch Date
              </th>
              <th className="text-center" style={{ width: "15%" }}>
                End Date
              </th>
              <th style={{ width: "10%" }} />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ paddingLeft: 20, textAlign: "left" }}>Simple music</td>
              <td>Medical</td>
              <td>$1200</td>
              <td>$1299</td>
              <td>2024-12-23</td>
              <td>2024-12-23</td>
              <td className="action">
                <img src="./images/view.svg" alt="" />
              </td>
            </tr>
            <tr>
              <td style={{ paddingLeft: 20, textAlign: "left" }}>Simple music</td>
              <td>Medical</td>
              <td>$1200</td>
              <td>$1299</td>
              <td>2024-12-23</td>
              <td>2024-12-23</td>
              <td className="action">
                <img src="./images/view.svg" alt="" />
              </td>
            </tr>
            <tr>
              <td style={{ paddingLeft: 20, textAlign: "left" }}>Simple music</td>
              <td>Medical</td>
              <td>$1200</td>
              <td>$1299</td>
              <td>2024-12-23</td>
              <td>2024-12-23</td>
              <td className="action">
                <img src="./images/view.svg" alt="" />
              </td>
            </tr>
            <tr>
              <td style={{ paddingLeft: 20, textAlign: "left" }}>Simple music</td>
              <td>Medical</td>
              <td>$1200</td>
              <td>$1299</td>
              <td>2024-12-23</td>
              <td>2024-12-23</td>
              <td className="action">
                <img src="./images/view.svg" alt="" />
              </td>
            </tr>
            <tr>
              <td style={{ paddingLeft: 20, textAlign: "left" }}>Simple music</td>
              <td>Medical</td>
              <td>$1200</td>
              <td>$1299</td>
              <td>2024-12-23</td>
              <td>2024-12-23</td>
              <td className="action">
                <img src="./images/view.svg" alt="" />
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