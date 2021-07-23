import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from '../../../store/posts'
import { hideModal } from '../../../store/modals'
import './PostModal.css';

const PostModal = () => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
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

    const resetForm = () => {
        setTitle('')
        setBody('')
        setImage(null)
    }

    const makePost = () => {
        dispatch(createPost(title, body, image))
        dispatch(hideModal())
    }

    return (
        <div className='blog-form-container'>
            <form className='blog-form-form'>
                <h2 className='blog-form-header-underline'>Blog</h2>
                <div className='blog-form-form-inputs-container'>
                    <div className='blog-form-form-input'>
                        <label>TITLE</label>
                        <input value={title} onChange={e => { setTitle(e.target.value) }} required ></input>
                    </div>
                    <div className='blog-form-form-input'>
                        <label>PHOTO SELECT</label>
                        <input className='upload-image-btn' type='file' accept='image/*' onChange={updateImage} ></input>
                    </div>
                </div>
                <div className='preview-img-container'>
                    <h4>PREVIEW</h4>
                    <img className='preview-img' id='imgPreview' src='#' alt='image upload preview'></img>
                </div>
                <div className='blog-form-form-textarea'>
                    <label>MESSAGE</label>
                    <textarea value={body} onChange={e => setBody(e.target.value)}></textarea>
                </div>
                <div className='blog-form-form-buttons'>
                    <div className='blog-form-form-btn' onClick={makePost} required >POST</div>
                    <div className='blog-form-form-btn' onClick={resetForm}>RESET</div>
                    <div className='blog-form-form-btn' onClick={closeForm}>CANCEL</div>
                </div>
            </form>
        </div>
    );
};

export default PostModal;