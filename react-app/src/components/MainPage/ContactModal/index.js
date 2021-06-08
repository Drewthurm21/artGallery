import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { postComment } from '../../../store/comments'
import './ContactModal.css';

const ContactModal = () => {
    const dispatch = useDispatch();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [content, setContent] = useState('')
    let errors = []

    const isEmail = (email) => {
        const regex = new RegExp(/^\w+@([0-9a-zA-Z]+[.])+[a-z]{2,4}$/);
        return regex.test(email)
    }

    useEffect(() => {
        if (name.length < 1) errors.push('Please enter a name.')
        if (!(isEmail(email))) errors.push('Please enter an email.')
        if (content.length < 1) errors.push('Please enter a comment.')
        console.log(errors)
    }, [name, email, content, errors])

    // const checkErrors = () => {
    // }

    const resetForm = () => {
        setName('')
        setEmail('')
        setContent('')
    }

    const addComment = () => {
        errors = []
        if (errors.length > 0) return

        console.log(name, email, content)
        dispatch(postComment(name, email, content))
    }

    return (
        <div className='contact-container'>
            <ul>
                {
                    errors.map(error => (
                        <li style={{ 'color': 'red' }}>{error}</li>
                    ))
                }
            </ul>
            <form className='contact-form'>
                <h2 className='contact-header-underline'>Contact</h2>
                <div className='contact-form-inputs-container'>
                    <div className='contact-form-input'>
                        <label>NAME</label>
                        <input value={name} onChange={e => { setName(e.target.value) }} required ></input>
                    </div>
                    <div style={{ 'marginLeft': '20px' }} className='contact-form-input'>
                        <label>EMAIL</label>
                        <input type='email' value={email} onChange={e => setEmail(e.target.value)} required ></input>
                    </div>
                </div>
                <div className='contact-form-textarea'>
                    <label>MESSAGE</label>
                    <textarea value={content} onChange={e => setContent(e.target.value)}></textarea>
                </div>
                <div className='contact-form-buttons'>
                    {errors.length === 0 &&
                        <div className='contact-form-btn' style={{ 'marginRight': '20px' }} onClick={addComment} required >SEND MESSAGE</div>
                    }
                    <div className='contact-form-btn' onClick={resetForm}>RESET</div>
                </div>
                <div className='contact-social-container'>
                    <div className='contact-social-icon'>INST</div>
                    <div className='contact-social-icon'>TWTR</div>
                </div>
            </form>
        </div>
    );
};

export default ContactModal;