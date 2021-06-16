import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SinglePhotoModal from './SinglePhoto'
import { hideModal, setCurrentModal, showModal } from "../../../store/modals";
import { getPhotos } from '../../../store/photos'
import './GalleryModal.css';

const GalleryModal = () => {
    const collageClasses = ['row1-L', 'row1-S', 'row2-W', 'row3-S', 'row3-L'];
    const dispatch = useDispatch();
    const photos = useSelector(state => state.photos.photos);
    if (photos) console.log(photos[0].photo_url)

    let showPhoto = (photo) => {
        console.log('click')
        hideModal()
        setCurrentModal(SinglePhotoModal)
        showModal()
    }

    useEffect(() => {
        if (!photos) dispatch(getPhotos())
    }, [dispatch, photos])

    return (
        <div className='gallery-container'>
            { photos && photos.map((photo, idx) => {
                return <div onClick={(e => showPhoto(photo))} style={{ 'backgroundImage': `url(${photo.photo_url})`, 'backgroundSize': 'cover' }} className={`${collageClasses[idx % 5]}`} key={photo.id}></div>
            })}
        </div>
    );
};

export default GalleryModal;