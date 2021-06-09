import React, { useEffect, useState } from "react";
// import { showModal, setCurrentModal } from '../../store/modals'
import { useDispatch, useSelector } from "react-redux";
import { getComments } from '../../store/comments'
import './AdminPage.css';
import NavBar from './NavBar'


const AdminPage = () => {
    const dispatch = useDispatch();
    const comments = useSelector(state => state.comments.comments);

    useEffect(() => {
        dispatch(getComments())
        console.log(comments)
    }, [])

    let commentsSection;
    if (comments) {
        commentsSection =
            comments.map(comment => (
                <div className='comment-post-container'>
                    <div className='comment-post-header'>
                        <p>From: {comment.name}</p>
                        <p>Email: {comment.email}</p>
                    </div>
                    <div className='comment-post-content'>
                        <p>{comment.content}</p>
                    </div>
                </div>))
    }

    return (
        <div className='admin-container'>
            <div className='admin-header'>
                <NavBar />
            </div>
            <div className='admin-content'>
                <div className='comment-container'>
                    {comments && comments.map(comment => (
                        <div className='comment-post-container'>
                            <div className='comment-post-header'>
                                <p>From: {comment.name}</p>
                                <p>Email: {comment.email}</p>
                            </div>
                            <div className='comment-post-content'>
                                <p>{comment.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="admin-footer">
            </div>
        </div>
    );
};

export default AdminPage;
