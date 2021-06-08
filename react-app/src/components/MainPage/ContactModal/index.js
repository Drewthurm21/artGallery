import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import './ContactModal.css';

const ContactModal = () => {
    const dispatch = useDispatch();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [content, setContent] = useState('')
    const [errors, setErrors] = useState([])

    const isEmail = (email) => {
        const regex = new RegExp(/^\w+@([0-9a-zA-Z]+[.])+[a-z]{2,4}$/);
        return regex.test(email)
    }

    useEffect(() => {
        setErrors([])
        if (name.length < 1) errors.push('Please enter a name.')
        if (!(isEmail(email))) errors.push('Please enter an email.')
        if (content.length < 1) errors.push('Please enter a comment.')
    }, [name, email, content])

    const resetForm = () => {
        setName('')
        setEmail('')
        setContent('')
    }

    const postComment = (e, name, email, content) => async (dispatch) => {
        e.preventDefault()
        if (errors.length !== 0) return
        const formData = new FormData()
        formData.append('name', name)
        formData.append('email', email)
        formData.append('content', content)
        console.log(formData)
    }

    return (
        <div className='contact-container'>
            <ul>
                {errors.length > 0 &&
                    errors.map(error => (
                        <li>{error}</li>
                    ))}
            </ul>
            <form className='contact-form'>
                <h2 className='contact-header-underline'>Contact</h2>
                <div className='contact-form-inputs-container'>
                    <div className='contact-form-input'>
                        <label>NAME</label>
                        <input value={name} onChange={e => setName(e.target.value)} required ></input>
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
                    <button style={{ 'marginRight': '20px' }} onClick={(e) => postComment(e, name, email, content)} required >SEND MESSAGE</button>
                    <button onClick={resetForm}>RESET</button>
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