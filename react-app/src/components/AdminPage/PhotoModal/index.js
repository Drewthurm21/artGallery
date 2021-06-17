import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from '../../../store/posts'
import { hideModal } from '../../../store/modals'
import './PhotoModal.css';

const PhotoModal = () => {
  const dispatch = useDispatch();

  const [image, setImage] = useState(null)

  const updateImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      let imgPreview = document.getElementById('imgPreview')
      imgPreview.src = URL.createObjectURL(file)
    }
  };

  const closeForm = () => {
    dispatch(hideModal())
  }

  const uploadPhoto = () => {
    console.log('click')
    console.log(image !== undefined)
  }

  return (
    <div className='blog-form-container'>
      <form className='blog-form-form'>
        <h2 className='blog-form-header-underline'>blog</h2>
        <div className='blog-form-form-inputs-container'>
          <div style={{ 'marginLeft': '20px' }} className='blog-form-form-input'>
            <label>PHOTO</label>
            <input className='upload-image-btn' type='file' accept='image/*' id='imageUpload' onChange={updateImage} ></input>
          </div>
        </div>

        <div className='preview-img-container'>PREVIEW
          <img id='imgPreview' src='#' alt='img'></img>
        </div>

        <div className='blog-form-form-buttons'>
          <div className='blog-form-form-btn' style={{ 'marginRight': '20px' }} onClick={uploadPhoto} required >UPLOAD PHOTO</div>
        </div>

        <div className='blog-form-social-container'>
          <div className='blog-form-form-btn' onClick={closeForm}>CANCEL</div>
        </div>
      </form>
    </div >
  );
};

export default PhotoModal;