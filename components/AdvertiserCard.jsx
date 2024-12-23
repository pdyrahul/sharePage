import React from 'react'
import advertiser from '../public/images/photo.svg';
import Image from 'next/image';
const AdvertiserCard = () => {
  return (
    <div className="advertiser-wrapper">
  <div className="photo" data-bs-toggle="modal" data-bs-target="#view-image">
   <Image src={advertiser} alt="Advertiser" />
  </div>
  <div className="photo">
   <Image src={advertiser} alt="Advertiser" />
  </div>
  <div className="photo">
   <Image src={advertiser} alt="Advertiser" />
  </div>

  
</div>

  )
}

export default AdvertiserCard