import React, { useState } from "react";
import { showModal, setCurrentModal } from '../../store/modals'
import { useDispatch, useSelector } from "react-redux";

import './MainPage.css';
import GalleryModal from './GalleryModal'
import BlogModal from './BlogModal'
import ContactModal from './ContactModal'


const MainPage = () => {
    const banner = require('../../frontend-assets/logo_v2.png')
    const dispatch = useDispatch();
    // const user = useSelector(state => state.session.user); 

    // ----- MODAL STATES ----- //
    const [openGallery, setOpenGallery] = useState(false)
    const [openBlog, setOpenBlog] = useState(false)
    const [openContact, setOpenContact] = useState(false)

    // ----- MODAL ONCLICK FUNCTIONS ----- //
    const showGallery = () => {
        dispatch(setCurrentModal(GalleryModal))
        dispatch(showModal())
    }

    const showBlog = () => {
        dispatch(setCurrentModal(BlogModal))
        dispatch(showModal())
    }

    const showContact = () => {
        dispatch(setCurrentModal(ContactModal))
        dispatch(showModal())
    }

    return (
        <div className='main-container'>
            <div class="bg-image img1"></div>
            <div class="bg-image img2"></div>
            <div class="bg-image img3"></div>
            <div class="bg-image img4"></div>
            <div class="bg-image img5"></div>
            <div class="bg-image img6"></div>
            <div className='main-banner-container'>
                <img className='main-banner-image' src={banner}></img>
            </div>
            <div className='main-links-container'>
                <div onClick={showGallery} className='main-link'>Gallery</div>
                <div onClick={showBlog} className='main-link'>Blog</div>
                <div onClick={showContact} className='main-link'>Contact</div>
            </div>
            <div className='main-foot-container'>
                © Jessa Lopez | Developed by CoolKidsCoop
            </div>
        </div>
    );
};

export default MainPage;
