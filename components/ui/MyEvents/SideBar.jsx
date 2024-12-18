import * as React from 'react';
import Link from 'next/link';
export function SideBar({Props}) {
    return (
        <div className="side-bar" id="side-bar">
            <div className="profile-detail">
                <div className="img-wrapper">
                    <img src="./images/profile-user.svg" alt=""/>
                </div>
                <div className="name">Amelia Joseph</div>
                <div className="title">Personal Profile</div>
            </div>
            <ul className="menu">
                <li className="menu-item">
                    <div className="title">Notes</div>
                </li>
                <li className="menu-item">
                    <div className="title">Reminder</div>
                </li>
                <div className="divider"/>
                <li className="menu-item">
                    <div className="title">My Events</div>
                    <div className="icon" id="my-event-icon">
                        <img src="images/expland.svg" alt=""/>
                    </div>
                    <ul className="sub-menu" id="my-event-sub-menu">
                        <ul className="active">
                            <li className="sub-menu-item">Tickets purchased</li>
                        </ul>
                        <ul>
                            <li className="sub-menu-item">Past Events Attended</li>
                        </ul>
                        <ul>
                            <li className="sub-menu-item">Favorite Events</li>
                        </ul>
                        <ul>
                            <li className="sub-menu-item">Upcoming Events</li>
                        </ul>
                        <ul>
                            <li className="sub-menu-item">Online Events</li>
                        </ul>
                        <ul>
                            <li className="sub-menu-item">From Connections</li>
                        </ul>
                        <ul>
                            <li className="sub-menu-item">My Interest</li>
                        </ul>
                    </ul>
                </li>
                <div className="divider"/>
                <li className="menu-item">
                    <div className="title">Event Managing</div>
                    <div className="icon" id="my-event-managing">
                        <img src="images/expland.svg" alt=""/>
                    </div>
                    <ul className="sub-menu" id="my-event-managing-sub-menu">
                        <ul>
                            <li className="sub-menu-item">Dashboard</li>
                        </ul>
                        <ul>
                            <li className="sub-menu-item">Submit an Event</li>
                        </ul>
                        <ul>
                            <li className="sub-menu-item">Active Events</li>
                        </ul>
                        <ul>
                            <li className="sub-menu-item">Past Events</li>
                        </ul>
                        <ul>
                            <li className="sub-menu-item">Draft Events</li>
                        </ul>
                        <ul>
                            <li className="sub-menu-item">Sponsors List</li>
                        </ul>
                        <ul>
                            <li className="sub-menu-item">Paid Sponsors</li>
                        </ul>
                        <ul>
                            <li className="sub-menu-item">Paid Venders</li>
                        </ul>
                    </ul>
                </li>
                <div className="divider"/>
                <li className="menu-item">
                    <div className="title">My Fund Raising</div>
                    <div className="icon" id="my-fund-raising-icon">
                        <img src="images/expland.svg" alt=""/>
                    </div>
                    <ul className="sub-menu" id="my-fund-raising-sub-menu">
                        <ul>
                            <li className="sub-menu-item">Dashboard</li>
                        </ul>
                        <ul>
                            <li className="sub-menu-item">Create a campaign</li>
                        </ul>
                        <ul>
                            <li className="sub-menu-item">Active campaigns</li>
                        </ul>
                        <ul>
                            <li className="sub-menu-item">Past campaigns</li>
                        </ul>
                        <ul>
                            <li className="sub-menu-item">Draft campaigns</li>
                        </ul>
                        <ul>
                            <li className="sub-menu-item">Updates</li>
                        </ul>
                    </ul>
                </li>
            </ul>
            <div className="return">
                <img src="./images/return.svg" alt=""/>
                <span>Return To Home</span>
            </div>
        </div>
    );
};