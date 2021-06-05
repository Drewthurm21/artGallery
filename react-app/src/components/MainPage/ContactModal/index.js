import React, { useState } from "react";
import { useDispatch } from "react-redux";
import './ContactModal.css';

const ContactModal = () => {
    // const dispatch = useDispatch();

    return (
        <div className='contact-container'>
            <form className='contact-form'>  
                <h2 className='contact-header-underline'>Contact</h2>
                <div className='contact-form-inputs-container'> 
                    <div className='contact-form-input'>
                        <label>NAME</label>
                        <input></input>
                    </div>
                    <div style={{'marginLeft':'20px'}} className='contact-form-input'>
                        <label>EMAIL</label>
                        <input></input>
                    </div>
                </div>
                <div className='contact-form-textarea'>
                    <label>MESSAGE</label>
                    <textarea></textarea>
                </div>
                <div className='contact-form-buttons'>
                    <button>SEND MESSAGE</button>
                    <button style={{ 'marginLeft': '20px' }}>RESET</button>
                </div>
                <div className='contact-social-container'>
                    <div className='contact-social-icon'>FB</div>
                    <div className='contact-social-icon'>INST</div>
                    <div className='contact-social-icon'>TWTR</div>
                </div>
            </form>
        </div>
    );
};

export default ContactModal;