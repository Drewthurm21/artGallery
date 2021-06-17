import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentModal } from '../../../store/modals'
import { getBlogPhoto } from '../../../store/photos'
import { getPosts } from '../../../store/posts'
import SinglePhotoModal from '../GalleryModal/SinglePhoto'
import './BlogModal.css';

const BlogModal = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.posts)


    let showBlogPhoto = async (post) => {
        await dispatch(getBlogPhoto(post.id))
        dispatch(setCurrentModal(SinglePhotoModal))
    }


    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])

    return posts && (
        <div className='blog-container'>
            {posts.map(post => (
                <div key={post.id} className='blog-post-container'>

                    {post.photo_url &&
                        <div className='blog-img-container'>
                            <div onClick={e => showBlogPhoto(post)}>
                                <img className='blog-img' src={post.photo_url} alt=''></img>
                            </div>
                        </div>
                    }
                    <div className='blog-post-header'>
                        <p>{post.title}</p>
                        <p>{post.date}</p>
                    </div>
                    <div className='blog-post-content'>
                        <p>{post.body}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BlogModal;