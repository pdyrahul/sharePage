import React from 'react'
import Image from 'next/image';
import BannerImage from '../../../public/images/fund-raising-detail-banner.svg'
import Event from "@/components/ui/Events/Event";

const eventDetail = ({slug}) => {
    return (<div className="event-wrapper">
        <div className="fund-rasing-body">
            <div className="banner">
                <div className="banner-img-wrapper">

                    <Image src={BannerImage} alt="test"/>
                </div>
                <div className="banner-detail">
                    <div className="detail">
                        <div className="title">Target</div>
                        <div className="text">$500,000,000</div>
                    </div>
                    <div className="detail">
                        <div className="title">Raised</div>
                        <div className="text">$500,000,000</div>
                    </div>
                    <div className="detail">
                        <div className="title">Launch Date</div>
                        <div className="text">2024-10-23</div>
                    </div>
                    <div className="detail">
                        <div className="title">Fund Raising For?</div>
                        <div className="text">Ahsan Khan</div>
                    </div>
                    <div className="detail">
                        <div className="title">Beneficiary Name</div>
                        <div className="text">Shaoib</div>
                    </div>
                    <div className="detail">
                        <div className="title">Category</div>
                        <div className="text">Medical</div>
                    </div>
                    <div className="detail">
                        <div className="title">Location</div>
                        <div className="text">
                            <img src="./images/location.svg" alt=""/>
                            Rawalpindi, Pakistan
                        </div>
                    </div>
                    <button className="main-btn">Donate Now</button>
                </div>
            </div>
            <div className="fund-rasing-detail">
                <div className="more-links">
                    <a href="">
                        <img src="./images/like.svg" alt=""/>
                    </a>
                    <a href="">
                        <img src="./images/favorit.svg" alt=""/>
                    </a>
                    <a href="">
                        <img src="./images/share.svg" alt=""/>
                    </a>
                </div>
                <div className="back">
                    <img src="./images/back.svg" alt=""/>
                    <span>Return To Home</span>
                </div>
                <div className="event-title">Save my friend life</div>
                <div className="text">
                    Join us for an unforgettable summer experience at the Bootleggers X
                    Pixel Summer Festival! This vibrant event is packed with thrilling
                    activities and entertainment that will captivate all your senses....
                </div>
                <div className="heading">Fund Raising Detail</div>
                <div className="title">Fund Raising Story</div>
                <div className="text">
                    Join Us For An Unforgettable Summer Experience At The Bootleggers X
                    Pixel Summer Festival! Nestled In The Heart Of Downtown Vancouver,
                    This Vibrant Festival Promises An Eclectic Mix Of Music, Art, And
                    Community Spirit. Join Us For An Unforgettable Summer Experience At
                    The Bootleggers X Pixel Summer Festival! Nestled In The Heart Of
                    Downtown Vancouver, This Vibrant Festival Promises An Eclectic Mix Of
                    Music, Art, And Community Spirit.
                </div>
                <ul>
                    <li>Capacity: 5000</li>
                    <li>
                        Highlights: Groove To The Beats Of Local And Headliner DJs In An
                        Electrifying Outdoor Music Experience. Dance The Day Away With The
                        Stunning Backdrop Of False Creek.
                    </li>
                    <li>
                        Special Finale: As The Sun Sets, Prepare To Be Mesmerized By A
                        Spectacular Live Drone Show Over The Water. Enjoy Synchronized DJ
                        Music And An Unparalleled 3D View Of The Drone Show, Exclusively
                        Available To Ticket Holders Within The Main Music Stage Area
                    </li>
                    <li>LINE-UP TO BE ANNOUNCED</li>
                </ul>
                <div className="title">Updates</div>
                <div style={{marginTop: 10}}>
                    <div className="title-2">24-12-23</div>
                    <div className="text">
                        Join Us For An Unforgettable Summer Experience At The Bootleggers X
                        Pixel Summer Festival! Nestled In The Heart Of Downtown Vancouver,
                        This Vibrant Festival Promises An Eclectic Mix Of Music, Art, And
                        Community Spirit.Join Us For An Unforgettable Summer Experience At
                        The Bootleggers X Pixel Summer Festival! Nestled In The Heart Of
                        Downtown Vancouver, This Vibrant Festival Promises An Eclectic Mix
                        Of Music,
                    </div>
                    <div className="title-2">Updated By Shoaib</div>
                </div>
                <div style={{marginTop: 10}}>
                    <div className="title-2">24-12-23</div>
                    <div className="text">
                        Join Us For An Unforgettable Summer Experience At The Bootleggers X
                        Pixel Summer Festival! Nestled In The Heart Of Downtown Vancouver,
                        This Vibrant Festival Promises An Eclectic Mix Of Music, Art, And
                        Community Spirit.Join Us For An Unforgettable Summer Experience At
                        The Bootleggers X Pixel Summer Festival! Nestled In The Heart Of
                        Downtown Vancouver, This Vibrant Festival Promises An Eclectic Mix
                        Of Music,
                    </div>
                    <div className="title-2">Updated By Shoaib</div>
                </div>
                <div style={{marginTop: 10}}>
                    <div className="title-2">24-12-23</div>
                    <div className="text">
                        Join Us For An Unforgettable Summer Experience At The Bootleggers X
                        Pixel Summer Festival! Nestled In The Heart Of Downtown Vancouver,
                        This Vibrant Festival Promises An Eclectic Mix Of Music, Art, And
                        Community Spirit.Join Us For An Unforgettable Summer Experience At
                        The Bootleggers X Pixel Summer Festival! Nestled In The Heart Of
                        Downtown Vancouver, This Vibrant Festival Promises An Eclectic Mix
                        Of Music,
                    </div>
                    <div className="title-2">Updated By Shoaib</div>
                </div>
                <div style={{marginTop: 10}}>
                    <div className="title-2">24-12-23</div>
                    <div className="text">
                        Join Us For An Unforgettable Summer Experience At The Bootleggers X
                        Pixel Summer Festival! Nestled In The Heart Of Downtown Vancouver,
                        This Vibrant Festival Promises An Eclectic Mix Of Music, Art, And
                        Community Spirit.Join Us For An Unforgettable Summer Experience At
                        The Bootleggers X Pixel Summer Festival! Nestled In The Heart Of
                        Downtown Vancouver, This Vibrant Festival Promises An Eclectic Mix
                        Of Music,
                    </div>
                    <div className="title-2">Updated By Shoaib</div>
                </div>
                <div style={{marginTop: 10}}>
                    <div className="title-2">24-12-23</div>
                    <div className="text">
                        Join Us For An Unforgettable Summer Experience At The Bootleggers X
                        Pixel Summer Festival! Nestled In The Heart Of Downtown Vancouver,
                        This Vibrant Festival Promises An Eclectic Mix Of Music, Art, And
                        Community Spirit.Join Us For An Unforgettable Summer Experience At
                        The Bootleggers X Pixel Summer Festival! Nestled In The Heart Of
                        Downtown Vancouver, This Vibrant Festival Promises An Eclectic Mix
                        Of Music,
                    </div>
                    <div className="title-2">Updated By Shoaib</div>
                </div>
                <div style={{marginTop: 10}}>
                    <div className="title-2">24-12-23</div>
                    <div className="text">
                        Join Us For An Unforgettable Summer Experience At The Bootleggers X
                        Pixel Summer Festival! Nestled In The Heart Of Downtown Vancouver,
                        This Vibrant Festival Promises An Eclectic Mix Of Music, Art, And
                        Community Spirit.Join Us For An Unforgettable Summer Experience At
                        The Bootleggers X Pixel Summer Festival! Nestled In The Heart Of
                        Downtown Vancouver, This Vibrant Festival Promises An Eclectic Mix
                        Of Music,
                    </div>
                    <div className="title-2">Updated By Shoaib</div>
                </div>
            </div>
            <div className="group-navigation">
                <div className="link active-link">Photos</div>
                <div className="link">Videos</div>
            </div>
            <div className="photos-wrapper">
                <div
                    className="photo"
                    data-bs-toggle="modal"
                    data-bs-target="#view-image"
                >
                    <img src="./images/photo.svg" alt=""/>
                </div>
                <div className="photo">
                    <img src="./images/photo.svg" alt=""/>
                </div>
                <div className="photo">
                    <img src="./images/photo.svg" alt=""/>
                </div>
                <div className="photo">
                    <img src="./images/photo.svg" alt=""/>
                </div>
                <div className="photo">
                    <img src="./images/photo.svg" alt=""/>
                </div>
                <div className="photo">
                    <img src="./images/photo.svg" alt=""/>
                </div>
                <div className="photo">
                    <img src="./images/photo.svg" alt=""/>
                </div>
                <div className="photo">
                    <img src="./images/photo.svg" alt=""/>
                </div>
                <div className="photo">
                    <img src="./images/photo.svg" alt=""/>
                </div>
                <div className="photo">
                    <img src="./images/photo.svg" alt=""/>
                </div>
                <div className="photo">
                    <img src="./images/photo.svg" alt=""/>
                </div>
                <div className="photo">
                    <img src="./images/photo.svg" alt=""/>
                </div>
            </div>
            <div className="event-box-wrapper">
                <div className="main-heading">
                    <div className="heading">Latest</div>
                    <div className="icons">
                        <div className="arrow" id="prev-btn">
                            <img src="./images/arrow-left.svg" alt=""/>
                        </div>
                        <div className="arrow" id="next-btn">
                            <img src="./images/arrow-right.svg" alt=""/>
                        </div>
                    </div>
                </div>
                <Event/>
            </div>
        </div>
    </div>)
}

export default eventDetail;