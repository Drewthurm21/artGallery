import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from '../../../store/posts'
import './PostModal.css';

const PostModal = () => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [image, setImage] = useState(null)

    const updateImage = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    const resetForm = () => {
        setTitle('')
        setBody('')
        setImage(null)
    }

    const makePost = () => {
        console.log(title, body, image)
    }

    return (
        <div className='blog-container'>
            <form className='blog-form'>
                <h2 className='blog-header-underline'>blog</h2>
                <div className='blog-form-inputs-container'>
                    <div className='blog-form-input'>
                        <label>TITLE</label>
                        <input value={title} onChange={e => { setTitle(e.target.value) }} required ></input>
                    </div>
                    <div style={{ 'marginLeft': '20px' }} className='blog-form-input'>
                        <label>PHOTO</label>
                        <input className='upload-image-btn' type='file' onChange={updateImage} ></input>
                    </div>
                </div>
                <div className='blog-form-textarea'>
                    <label>MESSAGE</label>
                    <textarea value={body} onChange={e => setBody(e.target.value)}></textarea>
                </div>
                <div className='blog-form-buttons'>
                    <div className='blog-form-btn' style={{ 'marginRight': '20px' }} onClick={makePost} required >CREATE BLOGPOST</div>
                </div>
                <div className='blog-social-container'>
                    <div className='blog-form-btn' onClick={resetForm}>RESET</div>
                </div>
            </form>
        </div>
    );
};

export default PostModal;