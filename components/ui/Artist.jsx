import React from 'react'
import dot from '../../public/images/three-dot-red.svg';
import user2 from '../../public/images/user-02.svg';
import Image from 'next/image';
import { IoMdChatboxes } from "react-icons/io";
const Artist = () => {
  return (
    <div className="friend-list-wrapper">
  <div className="friend">
    <div className="img-wrapper">
    <Image src={user2}alt="" />
    </div>
    <div className="detail">
      <div className="name">Audrey Alexander</div>
      <div className="mutual">Mutual Friends (3)</div>
    </div>
    <div className="icons">
      <div className="three-dot">
       <Image src={dot}
          alt=""
          onClick="threeDot() "
          className="option-icon"
        />
        <div
          className="three-dot-wrapper"
          id="three-dot"
          style={{ display: "none" }}
        >
          <div className="option">
            <span>
              <img src="./images/follow-2.svg" alt="" />
            </span>
            <span>Follow</span>
          </div>
          <div className="option">
            <span>
              <img src="./images/add-to-group.svg" alt="" />
            </span>
            <span>Add To Group</span>
          </div>
          <div className="option">
            <span>
              <img src="./images/connect.svg" alt="" />
            </span>
            <span>Connect</span>
          </div>
        </div>
      </div>
      <div className="message">
      <IoMdChatboxes />
      </div>
    </div>
  </div>
  <div className="friend">
    <div className="img-wrapper">
    <Image src={user2}alt="" />
    </div>
    <div className="detail">
      <div className="name">Audrey Alexander</div>
      <div className="mutual">Mutual Friends (3)</div>
    </div>
    <div className="icons">
      <div className="three-dot">
     <Image src={dot}alt="" className="option-icon" />
        <div className="three-dot-wrapper" style={{ display: "none" }}>
          <div className="option">
            <span>
              <img src="./images/follow-2.svg" alt="" />
            </span>
            <span>Follow</span>
          </div>
          <div className="option">
            <span>
              <img src="./images/add-to-group.svg" alt="" />
            </span>
            <span>Add To Group</span>
          </div>
          <div className="option">
            <span>
              <img src="./images/connect.svg" alt="" />
            </span>
            <span>Connect</span>
          </div>
        </div>
      </div>
      <div className="message">
      <IoMdChatboxes />
      </div>
    </div>
  </div>
  <div className="friend">
    <div className="img-wrapper">
    <Image src={user2}alt="" />
    </div>
    <div className="detail">
      <div className="name">Audrey Alexander</div>
      <div className="mutual">Mutual Friends (3)</div>
    </div>
    <div className="icons">
      <div className="three-dot">
     <Image src={dot}alt="" className="option-icon" />
        <div className="three-dot-wrapper" style={{ display: "none" }}>
          <div className="option">
            <span>
              <img src="./images/follow-2.svg" alt="" />
            </span>
            <span>Follow</span>
          </div>
          <div className="option">
            <span>
              <img src="./images/add-to-group.svg" alt="" />
            </span>
            <span>Add To Group</span>
          </div>
          <div className="option">
            <span>
              <img src="./images/connect.svg" alt="" />
            </span>
            <span>Connect</span>
          </div>
        </div>
      </div>
      <div className="message">
      <IoMdChatboxes />
      </div>
    </div>
  </div>
  <div className="friend">
    <div className="img-wrapper">
    <Image src={user2}alt="" />
    </div>
    <div className="detail">
      <div className="name">Audrey Alexander</div>
      <div className="mutual">Mutual Friends (3)</div>
    </div>
    <div className="icons">
      <div className="three-dot">
     <Image src={dot}alt="" className="option-icon" />
        <div className="three-dot-wrapper" style={{ display: "none" }}>
          <div className="option">
            <span>
              <img src="./images/follow-2.svg" alt="" />
            </span>
            <span>Follow</span>
          </div>
          <div className="option">
            <span>
              <img src="./images/add-to-group.svg" alt="" />
            </span>
            <span>Add To Group</span>
          </div>
          <div className="option">
            <span>
              <img src="./images/connect.svg" alt="" />
            </span>
            <span>Connect</span>
          </div>
        </div>
      </div>
      <div className="message">
      <IoMdChatboxes />
      </div>
    </div>
  </div>
  <div className="friend">
    <div className="img-wrapper">
    <Image src={user2}alt="" />
    </div>
    <div className="detail">
      <div className="name">Audrey Alexander</div>
      <div className="mutual">Mutual Friends (3)</div>
    </div>
    <div className="icons">
      <div className="three-dot">
     <Image src={dot}alt="" className="option-icon" />
        <div className="three-dot-wrapper" style={{ display: "none" }}>
          <div className="option">
            <span>
              <img src="./images/follow-2.svg" alt="" />
            </span>
            <span>Follow</span>
          </div>
          <div className="option">
            <span>
              <img src="./images/add-to-group.svg" alt="" />
            </span>
            <span>Add To Group</span>
          </div>
          <div className="option">
            <span>
              <img src="./images/connect.svg" alt="" />
            </span>
            <span>Connect</span>
          </div>
        </div>
      </div>
      <div className="message">
      <IoMdChatboxes />
      </div>
    </div>
  </div>

</div>

  )
}

export default Artist