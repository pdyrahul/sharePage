import React from 'react'

const PhotosCard = () => {
  return (
    <div className="photos-wrapper">
    <div className="photo" data-bs-toggle="modal" data-bs-target="#view-image">
      <img src="./images/photo.svg" alt="" />
    </div>
    <div className="photo">
      <img src="./images/photo.svg" alt="" />
    </div>
    <div className="photo">
      <img src="./images/photo.svg" alt="" />
    </div>
    <div className="photo">
      <img src="./images/photo.svg" alt="" />
    </div>
 
 
  </div>
  
  )
}

export default PhotosCard