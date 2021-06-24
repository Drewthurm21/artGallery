import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { uploadPhoto } from '../../../store/photos'
import { hideModal } from '../../../store/modals'
import './PhotoModal.css';

const PhotoModal = () => {
  const dispatch = useDispatch();

  const [image, setImage] = useState(null)
  const [title, setTitle] = useState('')

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

  const postPhoto = () => {
    dispatch(uploadPhoto(title, image))
    closeForm()
  }

  return (
    <div className='blog-form-container'>
      <form className='blog-form-form'>
        <h2 className='blog-form-header-underline'>Upload New Image</h2>

        <div className='blog-form-form-inputs-container'>
          <div className='blog-form-form-input'>
            <label>TITLE</label>
            <input value={title} className='upload-image-btn' type='text' onChange={e => setTitle(e.target.value)} ></input>
          </div>
          <div className='blog-form-form-input'>
            <label>PHOTO SELECT</label>
            <input className='upload-image-btn' type='file' accept='image/*' id='imageUpload' onChange={updateImage} ></input>
          </div>
        </div>

        <div className='preview-img-container'>
          <h4>PREVIEW</h4>
          <img className='preview-img' id='imgPreview' src='#' alt='image upload preview'></img>
        </div>

        {image &&
          <div className='blog-form-form-buttons'>
            <div className='blog-form-form-btn' style={{ 'marginRight': '20px' }} onClick={postPhoto} required >UPLOAD PHOTO</div>
          </div>}


        <div className='blog-form-form-btn' onClick={closeForm}>CANCEL</div>

      </form>
    </div >
  );
};

export default PhotoModal;