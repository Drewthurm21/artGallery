import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './BlogModal.css';

const BlogModal = () => {
    // const dispatch = useDispatch();
    // const user = useSelector(state => state.session.user);

    return (
        <div className='blog-container'>
            <div className='blog-post-container'>
                <div className='blog-post-header'>
                    <p>Blog post title goes here</p>
                    <p>Date</p>
                </div>
                <div className='blog-post-content'>
                    <p> This is a post about great things, incredible things, they didn't believe how many incredble things we could post about but we did. We made it great. Unbelievable. </p>
                </div>
            </div>
            <div className='blog-post-container'>
                <div className='blog-post-header'>
                    <p>Blog post title goes here</p>
                    <p>Date</p>
                </div>
                <div className='blog-post-content'>
                    <p> This is a post about great things, incredible things, they didn't believe how many incredble things we could post about but we did. We made it great. Unbelievable. </p>
                </div>
            </div>
            <div className='blog-post-container'>
                <div className='blog-post-header'>
                    <p>Blog post title goes here</p>
                    <p>Date</p>
                </div>
                <div className='blog-post-content'>
                    <p> This is a post about great things, incredible things, they didn't believe how many incredble things we could post about but we did. We made it great. Unbelievable. </p>
                </div>
            </div>
            <div className='blog-post-container'>
                <div className='blog-post-header'>
                    <p>Blog post title goes here</p>
                    <p>Date</p>
                </div>
                <div className='blog-post-content'>
                    <p> This is a post about great things, incredible things, they didn't believe how many incredble things we could post about but we did. We made it great. Unbelievable. </p>
                </div>
            </div>
            <div className='blog-post-container'>
                <div className='blog-post-header'>
                    <p>Blog post title goes here</p>
                    <p>Date</p>
                </div>
                <div className='blog-post-content'>
                    <p> This is a post about great things, incredible things, they didn't believe how many incredble things we could post about but we did. We made it great. Unbelievable. </p>
                </div>
            </div>
            <div className='blog-post-container'>
                <div className='blog-post-header'>
                    <p>Blog post title goes here</p>
                    <p>Date</p>
                </div>
                <div className='blog-post-content'>
                    <p> This is a post about great things, incredible things, they didn't believe how many incredble things we could post about but we did. We made it great. Unbelievable. </p>
                </div>
            </div>
            <div className='blog-post-container'>
                <div className='blog-post-header'>
                    <p>Blog post title goes here</p>
                    <p>Date</p>
                </div>
                <div className='blog-post-content'>
                    <p> This is a post about great things, incredible things, they didn't believe how many incredble things we could post about but we did. We made it great. Unbelievable. </p>
                </div>
            </div>
        </div>
    );
};

export default BlogModal;