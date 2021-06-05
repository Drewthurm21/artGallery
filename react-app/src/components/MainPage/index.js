import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import './MainPage.css';
import GalleryModal from './GalleryModal'
import BlogModal from './BlogModal'
import ContactModal from './ContactModal'

const MainPage = () => {
    const banner = require('../../frontend-assets/jessa_art_gallery_v2.png')
    // const dispatch = useDispatch();
    // const user = useSelector(state => state.session.user); 

    // ----- MODAL STATES ----- //
    const [openGallery, setOpenGallery] = useState(false)
    const [openBlog, setOpenBlog] = useState(false)
    const [openContact, setOpenContact] = useState(false)

    // ----- MODAL ONCLICK FUNCTIONS ----- //
    const showGallery = () => {
        if (openGallery) {
            setOpenGallery(false)
        } else {
            setOpenBlog(false)
            setOpenContact(false)
            setOpenGallery(true)
        }
    }

    const showBlog = () => {
        if (openBlog) {
            setOpenBlog(false)
        } else {
            setOpenGallery(false)
            setOpenContact(false)
            setOpenBlog(true)
        }
    }

    const showContact = () => {
        if (openContact) {
            setOpenContact(false)
        } else {
            setOpenGallery(false)
            setOpenBlog(false)
            setOpenContact(true)
        }
    }

    // ----- BASIC DISPLAY LOGIC || REPLACE WITH MODAL LATER ----- //
    let displayContent, component;
    if (openGallery || openBlog || openContact) {
        if (openGallery) component = <GalleryModal />
        if (openBlog) component = <BlogModal />
        if (openContact) component = <ContactModal />

        displayContent = (
            <div className='main-banner-container'>
                { component}
            </div>
        )
    } else (
        displayContent = (
            <>
                <div className='main-banner-container'>
                    <img className='main-banner-image' src={banner}></img>
                </div>
            </>
        )
    )
    // ------------------------------------------------------------- //


    return (
        <div className='main-container'>
            <img src='https://github.com/Drewthurm21/artGallery/blob/main/images/mushroom.JPG?raw=true' className='main-background-image'>
            </img>

            { displayContent}
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
