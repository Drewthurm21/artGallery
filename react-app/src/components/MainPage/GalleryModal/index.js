import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhotos } from '../../../store/photos'
import './GalleryModal.css';

const GalleryModal = () => {
    const collageClasses = ['row1-L', 'row1-S', 'row2-W', 'row3-S', 'row3-L'];
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    const photos = useSelector(state => state.photos.photos);
    if(photos) console.log(photos[0].photo_url)

    useEffect(() => {
        if(!photos) dispatch(getPhotos())
    }, [dispatch, photos])

    return (
        <div className='gallery-container'>
            { photos && photos.map((photo, idx) => {
                return <div style={{ 'backgroundImage': `url(${photo.photo_url})`, 'backgroundSize': 'cover' }} className={`${collageClasses[idx % 5]}`}></div>
            }) }
        </div>
    );
};

export default GalleryModal;