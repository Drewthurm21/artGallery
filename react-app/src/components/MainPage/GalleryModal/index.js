import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './GalleryModal.css';

const GalleryModal = () => {
    // const banner = require('../../frontend-assets/jessa_art_gallery_v2.png')
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);

    return (
        <div className='gallery-container'>
            <div className='gallery-row-1'>
                <div className='row1-L flex-center'>p1</div>
                <div className='row1-S flex-center'>p2</div>
            </div>
            <div className='gallery-row-2'>
                <div className='row2-W flex-center'>p3</div>
            </div>
            <div className='gallery-row-3'>
                <div className='row3-S flex-center'>p4</div>
                <div className='row3-L flex-center'>p5</div>
            </div>
            <div className='gallery-row-2'>
                <div className='row2-W flex-center'>p3</div>
            </div>
            <div className='gallery-row-1'>
                <div className='row1-L flex-center'>p1</div>
                <div className='row1-S flex-center'>p2</div>
            </div>
            <div className='gallery-row-2'>
                <div className='row2-W flex-center'>p3</div>
            </div>
            <div className='gallery-row-3'>
                <div className='row3-S flex-center'>p4</div>
                <div className='row3-L flex-center'>p5</div>
            </div>
        </div>
    );
};

export default GalleryModal;
