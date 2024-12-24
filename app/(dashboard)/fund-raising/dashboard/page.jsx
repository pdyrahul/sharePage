'use client'
import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart';


const uData = [2000, 3000, 4000, 2780,];
const xLabels = [
  'Active Fund ',
  'Past Fund ',
  'Draft Fund ',
  'Updates',
];
const page = () => {

  return (
    <div className="event-body">
      <div className="heading">Fund Raising Dashboard</div>
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
              <div className="title">Active Campaigns</div>
              <div className="count">2000</div>
            </div>
            <div className="evt">
              <div className="title">Past Campaigns</div>
              <div className="count">3000</div>
            </div>
            <div className="evt purple">
              <div className="title">Draft Campaigns</div>
              <div className="count">4000</div>
            </div>
            <div className="evt">
              <div className="title">Updates</div>
              <div className="count">2780</div>
            </div>
          </div>
        </div>
        <div className="event-graph">
          <div className="top-heading">Fund Rasing Graph</div>
          <div className="graph-img">
            <BarChart
              height={300}
              series={[
                { data: uData, label: 'uv', id: 'uvId' },
              ]}
              xAxis={[{ data: xLabels, scaleType: 'band' }]}
            />
          </div>
        </div>
      </div>
    </div>

  )
}

export default page