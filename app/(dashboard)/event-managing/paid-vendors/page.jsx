import React from 'react'

const page = () => {
  return (
    <div className="event-body">
    <div className="heading">Paid Vendors</div>
    <div className="event-page">
      <div className="page-filter">
        <div className="left">
          <div className="input-group event-select">
            <select className="form-select" aria-label="Default select example">
              <option selected="">Select Event</option>
              <option value={1}>One</option>
              <option value={2}>Two</option>
              <option value={3}>Three</option>
            </select>
          </div>
          <div className="search-box" style={{ width: 200 }}>
            <input type="text" placeholder="Search Sponsor " />
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
            <span>
              <img src="./images/download-doc.svg" alt="" />
            </span>
            Download List
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
              <th style={{ width: "20%" }}>Vender Name</th>
              <th className="text-center" style={{ width: "18%" }}>
                Stall Price
              </th>
              <th className="text-center" style={{ width: "18%" }}>
                Phone Number
              </th>
              <th className="text-center" style={{ width: "18%" }}>
                Date
              </th>
              <th className="text-center" style={{ width: "15%" }}>
                Type
              </th>
              <th style={{ width: "14%" }} />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ paddingLeft: 20, textAlign: "left" }}>Codegenio</td>
              <td>$500</td>
              <td>+927398319983</td>
              <td>Date</td>
              <td>Fashion</td>
              <td
                className="action"
                data-bs-toggle="modal"
                data-bs-target="#paid-vender-detail"
              >
                <img src="./images/view.svg" alt="" className="dot" />
              </td>
            </tr>
            <tr>
              <td style={{ paddingLeft: 20, textAlign: "left" }}>Codegenio</td>
              <td>$500</td>
              <td>+927398319983</td>
              <td>Date</td>
              <td>Fashion</td>
              <td
                className="action"
                data-bs-toggle="modal"
                data-bs-target="#paid-vender-detail"
              >
                <img src="./images/view.svg" alt="" className="dot" />
              </td>
            </tr>
            <tr>
              <td style={{ paddingLeft: 20, textAlign: "left" }}>Codegenio</td>
              <td>$500</td>
              <td>+927398319983</td>
              <td>Date</td>
              <td>Fashion</td>
              <td
                className="action"
                data-bs-toggle="modal"
                data-bs-target="#paid-vender-detail"
              >
                <img src="./images/view.svg" alt="" className="dot" />
              </td>
            </tr>
            <tr>
              <td style={{ paddingLeft: 20, textAlign: "left" }}>Codegenio</td>
              <td>$500</td>
              <td>+927398319983</td>
              <td>Date</td>
              <td>Fashion</td>
              <td
                className="action"
                data-bs-toggle="modal"
                data-bs-target="#paid-vender-detail"
              >
                <img src="./images/view.svg" alt="" className="dot" />
              </td>
            </tr>
            <tr>
              <td style={{ paddingLeft: 20, textAlign: "left" }}>Codegenio</td>
              <td>$500</td>
              <td>+927398319983</td>
              <td>Date</td>
              <td>Fashion</td>
              <td
                className="action"
                data-bs-toggle="modal"
                data-bs-target="#paid-vender-detail"
              >
                <img src="./images/view.svg" alt="" className="dot" />
              </td>
            </tr>
            <tr>
              <td style={{ paddingLeft: 20, textAlign: "left" }}>Codegenio</td>
              <td>$500</td>
              <td>+927398319983</td>
              <td>Date</td>
              <td>Fashion</td>
              <td
                className="action"
                data-bs-toggle="modal"
                data-bs-target="#paid-vender-detail"
              >
                <img src="./images/view.svg" alt="" className="dot" />
              </td>
            </tr>
            <tr style={{ backgroundColor: "#f1f1f1" }}>
              <td style={{ paddingLeft: 20, textAlign: "left" }}>Total</td>
              <td>$2983</td>
              <td />
              <td />
              <td />
              <td />
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