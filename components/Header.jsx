'use client';
import Image from 'next/image';
import logo from '../public/images/logo.svg';
import UserProfile from '../public/images/profile-img.svg';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import React Icons
import searchIcon from '../public/images/search-2.svg';
import handShake from '../public/images/hand-shake.svg';
import personIcon from '../public/images/person-2.svg';
import helpIcon from '../public/images/help.svg';
import notificationIcon from '../public/images/notification.svg';
import cartIcon from '../public/images/cart.svg';
import settingIcon from '../public/images/setting.svg';
import threeDotIcon from '../public/images/three-dot.svg';
import Link from "next/link";
import { useSidebar } from '@/Context/SidebarContext';
import { useState, useEffect } from 'react';

const Header = () => {
  const { isOpen, toggleSidebar } = useSidebar();
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);

  }, [])

  return (
    <div className="nav-bar">
      <div className="logo-menu">
        <div className="logo-wrapper">
          <Link href={'/'}>
            <Image src={logo} alt="Logo" />
          </Link>
        </div>
       {isMobile? <div className="menu" onClick={toggleSidebar}>
          {isOpen ? (
            <FaTimes size={18} color="white" />
          ) : (
            <FaBars size={18} color="white" />
          )}
        </div>: null}
      </div>
      <div className="search-box">
        <div className="select-options">
          All Profiles
          <Image src="/images/down-arrow.svg" alt="Down Arrow" width={16} height={16} />
        </div>
        <div className="search-box-wrapper">
          <input type="text" placeholder="Search" />
          <div className="search-icon">
            <Image src={searchIcon} alt="Search Icon" />
          </div>
        </div>
      </div>
      <div className="import-links">
        <div className="search-mobile link">
          <Image src={searchIcon} alt="Search Icon" />
        </div>
        <a href="" className="hide-mobile">
          <div className="hand-shake link">
            <Image src={handShake} alt="Hand Shake" />
          </div>
        </a>
        <a href="" className="hide-mobile">
          <div className="persons link">
            <Image src={personIcon} alt="Person Icon" />
            <div className="count">1</div>
          </div>
        </a>
        <a href="" className="hide-mobile">
          <div className="help link">
            <Image src={helpIcon} alt="Help" />
          </div>
        </a>
        <a href="" className="hide-mobile">
          <div className="notification link">
            <Image src={notificationIcon} alt="Notification" />
            <div className="count">2</div>
          </div>
        </a>
        <a href="" className="hide-mobile">
          <div className="cart link">
            <Image src={cartIcon} alt="Cart" />
          </div>
        </a>
        <a href="" className="hide-mobile">
          <div className="setting link">
            <Image src={settingIcon} alt="Setting" />
          </div>
        </a>
        <div className="three-dot link">
          <Image src={threeDotIcon} alt="Three Dot" />
        </div>
        <div className="line" />
        <div className="perfile-detail">
          <div className="img-wrapper">
            <div className="circle">
              <Image src={UserProfile} alt="" />
            </div>
          </div>
          <div className="profile-detail-wrapper">
            <div className="name">Amelia Joseph</div>
            <div className="title">Personal Profile</div>
          </div>
          <div className="down-icon">
            <img src="./images/down-arrow-2.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
