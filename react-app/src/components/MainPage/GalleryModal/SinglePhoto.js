import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'

const SinglePhotoModal = () => {

  const photo = useSelector(state => state.photos.photo)

  return (
    <div className='single-img-container'>
      <img className='single-img' src={photo.photo_url} alt=''></img>
    </div>
  )
}

export default SinglePhotoModal