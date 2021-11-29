import React from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';
import { Alert } from '@mui/material';

const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm(
            'service_m8wmxd4', 'template_8lgpk2f',
            e.target, 'user_LnXRBIAWb21hlX7e58mKB'
        ).then(res => {
            console.log(res);
        }).catch(err => console.log(err));
    }
    return (
        <div className="contact-container">
            <div>
                <h3>Email:madihajarrin1@gmail.com</h3>
                <h4>Phone: (+88) 01639645731</h4>
                <h5>Location: Dholaipar, Jatrabari, Dhaka</h5>
            </div>
            <div>

                <form onSubmit="sendEmail">
                    <h2>Reace Out to me</h2>
                    <div className="d-flex justify-content-center">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">First Name</label>
                            <input type="text" name="name" class="form-control" id="exampleFormControlInput1" placeholder="enter your first name"></input>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Last Name</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="enter your last name"></input>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" name="user_email" class="form-control" id="exampleFormControlInput1" placeholder="name@gmail.com"></input>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">your Text</label>
                        <textarea name="message" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button type="button" class="btn btn-info">Submit Email</button>
                    <Alert severity="success"></Alert>
                </form>
            </div>

        </div>
    );
};

export default Contact;