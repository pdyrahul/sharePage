import React from 'react'

const page = () => {
  return (
    <div className="event-body">
    <div className="heading">Fund Rasing Dashboard</div>
    <div className="earning-summary">
      <div className="top-heading">Earning Summary</div>
      <div className="count-wrapper">
        <div className="count">
          <div className="count-border">
            <div className="title">$135</div>
            <div className="sub-line">Lifetime Sale</div>
          </div>
        </div>
        <div className="count">
          <div className="count-border">
            <div className="title">$135</div>
            <div className="sub-line">Withdrawal</div>
          </div>
        </div>
        <div className="count">
          <div className="count-border">
            <div className="title">$135</div>
            <div className="sub-line">Amount Left</div>
          </div>
        </div>
      </div>
    </div>
    <div className="detail">
      <div className="events">
        <div className="top-heading">Fund Rasings</div>
        <div className="events-list">
          <div className="evt purple">
            <div className="title">Active Campaign</div>
            <div className="count">0</div>
          </div>
          <div className="evt">
            <div className="title">Past Campaign</div>
            <div className="count">0</div>
          </div>
          <div className="evt purple">
            <div className="title">Draft Campaign</div>
            <div className="count">0</div>
          </div>
          <div className="evt">
            <div className="title">Updates</div>
            <div className="count">0</div>
          </div>
        </div>
      </div>
      <div className="event-graph">
        <div className="top-heading">Fund Rasing Graph</div>
        <div className="graph-img">
          <img src="./images/dashboard.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default page