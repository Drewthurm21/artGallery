import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './MainPage.css';

const MainPage = () => {
    const banner = require('../../frontend-assets/jessa_art_gallery_v2.png')
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);

    return (
        <div className='main-container'>
            <div className='main-banner-container'>
                <img className='main-banner-image' src={banner}></img>
            </div>
            <div className='main-links-container'>
                <div className='main-link'>About</div>
                <div className='main-link'>Gallery</div>
                <div className='main-link'>Blog</div>
                <div className='main-link'>Contact</div>
            </div>
            <div className='main-foot-container'>
                © Jessa Lopez | Developed by CoolKidsCoop
            </div>
        </div>
    );
};

export default MainPage;
