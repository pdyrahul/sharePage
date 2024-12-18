'use client'
import React from 'react'
import './my-events.css'

export default function ticketPurchasedPage() {
    return (
        <div className="event-body">
            <div className="heading">Ticket Purchased</div>
            <div className="event-page">
                <div className="page-filter">
                    <div className="left">
                        <div className="input-group event-select">
                            <select className="form-select" aria-label="Default select example">
                                <option select="">Select Event</option>
                                <option value={1}>One</option>
                                <option value={2}>Two</option>
                                <option value={3}>Three</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="ticket-detail-wrapper">
                    <div className="detail-top-filter">
                        <div className="head-for-detail">Ticket Detail</div>
                        <div className="action">
                            <img
                                src="./images/three-dot-red.svg"
                                alt=""
                                className="dot"
                                onClick="threeDot()"
                            />
                            <div
                                className="more-links"
                                id="three-dot"
                                style={{display: "none"}}
                            >
                                <div className="link">
                  <span className="img" style={{paddingLeft: 4}}>
                    <img src="./images/printer.svg" alt=""/>
                  </span>
                                    <span>Print</span>
                                </div>
                                <div className="link">
                  <span className="img" style={{paddingLeft: 4}}>
                    <img src="./images/download-2.svg" alt=""/>
                  </span>
                                    <span>Download</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ticket-detail-body">
                        <div className="in-2-col">
                            <div className="detail">
                                <div className="title">Name</div>
                                <div className="text">Music Playing</div>
                            </div>
                            <div className="detail">
                                <div className="title">Date</div>
                                <div className="text">2024-03-13</div>
                            </div>
                        </div>
                        <div className="in-2-col">
                            <div className="detail">
                                <div className="title">Venue</div>
                                <div className="text">Banquite</div>
                            </div>
                            <div className="detail">
                                <div className="title">Address</div>
                                <div className="text">
                  <span>
                    <img src="./images/location.svg" alt=""/>
                  </span>
                                    Rawalpindi, Pakistan
                                </div>
                            </div>
                        </div>
                        <div className="in-5-col">
                            <div className="detail">
                                <div className="title">Ticket Type</div>
                                <div className="text">Adult</div>
                                <div className="text">Kids</div>
                                <div className="text">Seniors</div>
                            </div>
                            <div className="detail">
                                <div className="title">Quantity</div>
                                <div className="text">2</div>
                                <div className="text">2</div>
                                <div className="text">2</div>
                            </div>
                            <div className="detail">
                                <div className="title">Price</div>
                                <div className="text">$23</div>
                                <div className="text">$23</div>
                                <div className="text">$23</div>
                            </div>
                            <div className="detail">
                                <div className="title">Tax</div>
                                <div className="text">5%</div>
                                <div className="text">5%</div>
                                <div className="text">5%</div>
                            </div>
                            <div className="detail">
                                <div className="title">Total</div>
                                <div className="text">$30</div>
                                <div className="text">$30</div>
                                <div className="text">$23</div>
                                <div className="bold-text">$200</div>
                            </div>
                        </div>
                        <div className="in-2-col">
                            <div className="detail">
                                <div className="title">Payment By</div>
                                <div className="text">Visa (.... .... ..... 1234)</div>
                            </div>
                            <div className="detail">
                                <div className="title">Date Purchased</div>
                                <div className="text">2024-03-13- 12:00 AM</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}