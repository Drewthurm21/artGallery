import React, { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from '../../../store/posts'
import './BlogModal.css';

const BlogModal = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.posts)
    // const user = useSelector(state => state.session.user);

    useEffect(() => {
        dispatch(getPosts())
    }, [])

    return posts && (
        <div className='blog-container'>
            {posts.map(post => (
                <div className='blog-post-container'>
                    {post.photo_url &&
                        <div className='blog-img-container'>
                            <NavLink to='/'>
                                <img className='blog-img' src={post.photo_url} alt=''></img>
                            </NavLink>
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