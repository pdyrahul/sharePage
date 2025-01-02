import React from 'react'
import Event from '../../../components/ui/Events/Event'
import CustomTabPanel from '../../../components/ui/muicomponents/CustomTabPanel'
import banner from '../../../public/images/banner.svg'
import vericle from '../../../public/images/vericle-banner.svg'
import map from '../../../public/images/map.svg'
import Image from 'next/image'
import TicketBooking from '../../../components/Ticket/TicketBooking'
const eventDetail = ({ slug }) => {
    const mapContainerStyle = {
        height: "400px",
        width: "100%"
    };

    const center = {
        lat: 33.6007, // Latitude for Rawalpindi, Pakistan
        lng: 72.6751  // Longitude for Rawalpindi, Pakistan
    };
    return (
        <div className="body-wrapper">
            <div className="event-wrapper">
                <div className="event-body">
                    <div className="banner-img">
                        <Image src={banner} alt="" className='potraitImg' />
                        <Image src={vericle} alt="" className='verticleImg d-none' />
                    </div>
                    <div className="event-detail">
                        <div className="detail-wrapper">
                            <div className="back">
                                <img src="./images/back.svg" alt="" />
                                <span>Return To Home</span>
                            </div>
                            <div className="date">Thursday, July 18 · 3 - 5pm PKT</div>
                            <div className="event-title">BOOTLEGGERS X PIXEL SUMMER FESTIVAL</div>
                            <div className="text">
                                Join us for an unforgettable summer experience at the Bootleggers X Pixel
                                Summer Festival! This vibrant event is packed with thrilling activities
                                and entertainment that will captivate all your senses....
                            </div>
                            <div className="heading">Event Detail</div>
                            <div className="title">Description</div>
                            <div className="text">
                                Join Us For An Unforgettable Summer Experience At The Bootleggers X Pixel
                                Summer Festival! Nestled In The Heart Of Downtown Vancouver, This Vibrant
                                Festival Promises An Eclectic Mix Of Music, Art, And Community Spirit.
                            </div>
                            <div className="title">Main Music Stage</div>
                            <ul>
                                <li>Capacity: 5000</li>
                                <li>
                                    Highlights: Groove To The Beats Of Local And Headliner DJs In An
                                    Electrifying Outdoor Music Experience. Dance The Day Away With The
                                    Stunning Backdrop Of False Creek.
                                </li>
                                <li>
                                    Special Finale: As The Sun Sets, Prepare To Be Mesmerized By A
                                    Spectacular Live Drone Show Over The Water. Enjoy Synchronized DJ Music
                                    And An Unparalleled 3D View Of The Drone Show, Exclusively Available To
                                    Ticket Holders Within The Main Music Stage Area
                                </li>
                                <li>LINE-UP TO BE ANNOUNCED</li>
                            </ul>
                            <div className="title">Amenities</div>
                            <ul>
                                <li>Capacity: 5000</li>
                                <li>
                                    Highlights: Groove To The Beats Of Local And Headliner DJs In An
                                    Electrifying Outdoor Music Experience. Dance The Day Away With The
                                    Stunning Backdrop Of False Creek.
                                </li>
                                <li>
                                    Special Finale: As The Sun Sets, Prepare To Be Mesmerized By A
                                    Spectacular Live Drone Show Over The Water. Enjoy Synchronized DJ Music
                                    And An Unparalleled 3D View Of The Drone Show, Exclusively Available To
                                    Ticket Holders Within The Main Music Stage Area
                                </li>
                                <li>LINE-UP TO BE ANNOUNCED</li>
                            </ul>
                            <div className="title">Additional Festival Features (Open To All)</div>
                            <ul>
                                <li>Capacity: 5000</li>
                                <li>
                                    Highlights: Groove To The Beats Of Local And Headliner DJs In An
                                    Electrifying Outdoor Music Experience. Dance The Day Away With The
                                    Stunning Backdrop Of False Creek.
                                </li>
                                <li>
                                    Special Finale: As The Sun Sets, Prepare To Be Mesmerized By A
                                    Spectacular Live Drone Show Over The Water. Enjoy Synchronized DJ Music
                                    And An Unparalleled 3D View Of The Drone Show, Exclusively Available To
                                    Ticket Holders Within The Main Music Stage Area
                                </li>
                                <li>LINE-UP TO BE ANNOUNCED</li>
                            </ul>
                            <div className="text">
                                Join Us For An Unforgettable Summer Experience At The Bootleggers X Pixel
                                Summer Festival! Nestled In The Heart Of Downtown Vancouver, This Vibrant
                                Festival Promises An Eclectic Mix Of Music, Art, And Community Spirit.
                            </div>
                            <div className="title">Location</div>
                            <div className="text">
                                <img src="./images/location.svg" alt="" />
                                <span>Rawalpindi, Pakistan</span>
                            </div>
                            <div className="title">Venue</div>
                            <div className="text">CICA Vancouver</div>
                            <div className="title">Refund Policy</div>
                            <div className="text">Refunds up to 7 days before event</div>
                        </div>
                        <div className="ticket-detail">
                            <div className="more-links">
                                <a href="">
                                    <img src="./images/like.svg" alt="" />
                                </a>
                                <a href="">
                                    <img src="./images/favorit.svg" alt="" />
                                </a>
                                <a href="">
                                    <img src="./images/share.svg" alt="" />
                                </a>
                            </div>
                            <div className="ticket-wrapper">
                             <TicketBooking />
                            </div>
                            <div className="become-sponsor">
                                <button data-bs-toggle="modal" data-bs-target="#become-sponsor-vender">
                                    Become a Sponsors
                                </button>
                            </div>
                            <div className="verical-banner">
                                <Image src={vericle} alt="" />
                            </div>
                            <div className="map-wrapper">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212780.22019256774!2d72.85333713221225!3d33.56140540336099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df948974419acb%3A0x984357e1632d30f!2sRawalpindi%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2sin!4v1735306281627!5m2!1sen!2sin"
                                    height={350}
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </div>
                    </div>
                    <div className='my-2'>
                        <CustomTabPanel />
                    </div>
                    <div className="event-box-wrapper">
                        <div className="main-heading">
                            <div className="heading">Similar Events</div>
                            <div className="icons">
                                <div className="arrow" id="prev-btn">
                                    <img src="./images/arrow-left.svg" alt="" />
                                </div>
                                <div className="arrow" id="next-btn">
                                    <img src="./images/arrow-right.svg" alt="" />
                                </div>
                            </div>
                        </div>
                        <Event />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default eventDetail;