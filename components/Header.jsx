"use client";
import { useMemo, useState, useEffect } from "react";
import Image from "next/image";
import logo from "../public/images/logo.svg";
import { FaBars, FaTimes } from "react-icons/fa";
import { searchIcon, handShake, personIcon, helpIcon, notificationIcon, cartIcon, settingIcon, threeDotIcon, } from "../app/utils/ImgStore";
import Link from "next/link";
import Profile from "./Profile";
import { useSidebar } from "../Context/SidebarContext";


const Header = () => {
  const { isOpen, toggleSidebar } = useSidebar();

  const [isMobile, setIsMobile] = useState(1024);

  return (
    <div className="nav-bar">
      <div className="logo-menu">
        <div className="logo-wrapper">
          <Link href="/">
            <Image src={logo} alt="Logo" loading="lazy" />
          </Link>
        </div>
        {isMobile ? (
          <div className="menuIcon" onClick={toggleSidebar}>
            {isOpen ? (
              <FaTimes size={18} color="white" />
            ) : (
              <FaBars size={18} color="white" />
            )}
          </div>
        ) : null}
      </div>
      <div className="search-box">
        <div className="select-options">
          All Profiles
          <Image
            src="/images/down-arrow.svg"
            alt="Down Arrow"
            width={16}
            height={16}
          />
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
          <Image src={searchIcon} alt="Search Icon" height={30} width={30} />
        </div>
        <div className="utilityIcons">
          <div className="hand-shake link">
            <Image src={handShake} alt="Hand Shake" height={30} width="auto" />
          </div>
          <div className="persons link">
            <Image src={personIcon} alt="Person Icon" height={30} width="auto" />
            <div className="count">1</div>
          </div>
          <div className="help link">
            <Image src={helpIcon} alt="Help" height={30} width="auto" />
          </div>
          <div className="notification link">
            <Image
              src={notificationIcon}
              alt="Notification"
              height={30}
              width="auto"
            />
            <div className="count">2</div>
          </div>
          <div className="cart link">
            <Image src={cartIcon} alt="Cart" height={30} width="auto" />
          </div>
          <div className="setting link">
            <Image src={settingIcon} alt="Setting" height={30} width="auto" />
          </div>
        </div>

        <div className="three-dot link">
          <Image src={threeDotIcon} alt="Three Dot" height={30} width={30} />
        </div>
        <div className="line" />
        <Profile />
      </div>
    </div>
  );
};
export default Header;
