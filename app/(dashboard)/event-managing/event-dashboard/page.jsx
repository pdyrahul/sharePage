'use client'
import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart';


const uData = [2000, 3000, 4000, 2780, 1890,];
const xLabels = [
  'Active Events',
  'Past Events',
  'Draft Events',
  'Vender',
  'Sponsor',
];
const page = () => {

  return (
    <div className="event-body">
      <div className="heading">Events Dashboard</div>
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
          <div className="top-heading">Events</div>
          <div className="events-list">
            <div className="evt purple">
              <div className="title">Active Events</div>
              <div className="count">0</div>
            </div>
            <div className="evt">
              <div className="title">Past Events</div>
              <div className="count">0</div>
            </div>
            <div className="evt purple">
              <div className="title">Draft Events</div>
              <div className="count">0</div>
            </div>
            <div className="evt">
              <div className="title">Total Venders</div>
              <div className="count">0</div>
            </div>
            <div className="evt purple">
              <div className="title">Total Sponsors</div>
              <div className="count">0</div>
            </div>
          </div>
        </div>
        <div className="event-graph">
          <div className="top-heading">Events Graph</div>
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