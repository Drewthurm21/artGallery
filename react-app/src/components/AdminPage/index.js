import React, { useState } from "react";
// import { showModal, setCurrentModal } from '../../store/modals'
// import { useDispatch, useSelector } from "react-redux";
import './AdminPage.css';
import NavBar from './NavBar'


const AdminPage = () => {
    // const banner = require('../../frontend-assets/jessa_art_gallery_v2.png')
    // const dispatch = useDispatch();
    // const user = useSelector(state => state.session.user);

    return (
        <div className='admin-container'>
            <div className='admin-header'>
                <NavBar />
            </div>
            <div className='admin-content'>
                <div className='comment-container'>
                    <div className='comment-post-container'>
                        <div className='comment-post-header'>

                        </div>
                        <div className='comment-post-content'>

                        </div>
                    </div>
                    <div className='comment-post-container'>
                        <div className='comment-post-header'>

                        </div>
                        <div className='comment-post-content'>

                        </div>
                    </div>
                    <div className='comment-post-container'>
                        <div className='comment-post-header'>

                        </div>
                        <div className='comment-post-content'>

                        </div>
                    </div>
                    <div className='comment-post-container'>
                        <div className='comment-post-header'>

                        </div>
                        <div className='comment-post-content'>

                        </div>
                    </div>
                    <div className='comment-post-container'>
                        <div className='comment-post-header'>

                        </div>
                        <div className='comment-post-content'>

                        </div>
                    </div>
                </div>
            </div>
            <div className="admin-footer">
            </div>
        </div>
    );
};

export default AdminPage;
