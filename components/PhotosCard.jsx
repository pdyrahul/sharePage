import React from 'react'
import Photo from '../public/images/photo.svg'
import Image from 'next/image'

const PhotosCard = () => {
  return (
    <div className="photos-wrapper">
    <div className="photo" data-bs-toggle="modal" data-bs-target="#view-image">
      <Image src={Photo} alt="" />
    </div>
    <div className="photo">
      <Image src={Photo} alt="" />
    </div>
    <div className="photo">
      <Image src={Photo} alt="" />
    </div>
    <div className="photo">
      <Image src={Photo} alt="" />
    </div>
 
 
  </div>
  
  )
}

export default PhotosCard