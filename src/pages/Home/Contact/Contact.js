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
        <div className="contact-container" id="contact">
            <div className="m-5 pt-5">
                <h3><b>Email:</b>madihajarrin1@gmail.com</h3>
                <h4><b>Phone:</b> (+88) 01639645731</h4>
                <h5><b>Location:</b> Dholaipar, Jatrabari, Dhaka</h5>

                <div className="mt-5">
                    <a href="https://github.com/MadihaJarrin"> <button type="button" class="btn btn-outline-success">GitHub</button></a>
                    <a href="https://github.com/MadihaJarrin"> <button type="button" class="btn btn btn-outline-success">Linked In</button></a>
                </div>
            </div>
            <div>

                <form onSubmit="sendEmail">
                    <h2 className="p-4 contact-reace"><strong>Reace Out to me</strong></h2>
                    {/* <div className="d-flex justify-content-center">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">First Name</label>
                            <input type="text" name="name" class="form-control" id="exampleFormControlInput1" placeholder="enter your first name"></input>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Last Name</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="enter your last name"></input>
                        </div>
                    </div> */}
                    <div>
                        <label for="exampleFormControlInput1" class="form-label">First Name</label>
                        <input type="text" name="name" class="form-control" id="exampleFormControlInput1" placeholder="enter your first name"></input>
                    </div>
                    <div>
                        <label for="exampleFormControlInput1" class="form-label">Last Name</label>
                        <input type="text" name="name" class="form-control" id="exampleFormControlInput1" placeholder="enter your first name"></input>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" name="user_email" class="form-control" id="exampleFormControlInput1" placeholder="name@gmail.com"></input>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">your Text</label>
                        <textarea name="message" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button type="button" class="btn btn-success">Submit Email</button>
                    {/* <Alert severity="success"></Alert> */}
                </form>
            </div>
            {/* https://drive.google.com/u/0/uc?id=1iT_njyWXG_p4BuXxxwcJPQrbfjczRTku&export=download */}


        </div>

    );
};

export default Contact;