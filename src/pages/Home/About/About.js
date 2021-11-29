import React from 'react';
import about from '../images/me2.jpg'
import './About.css';


const About = () => {
    return (
        <div class="card mb-3 bg-light about-cont">
            <div class="row g-0">
                <div class="col-md-4">
                    <img className="about-image" src={about}></img>
                </div>
                <div class="col-md-8">
                    <div class="card-body position-absolute bottom-50 start-50">
                        <h5 class="card-title"><span id="about-span">About Me</span></h5>
                        <p class="card-text">Mainly I am MERN Stack Developer. I'm ready to work hard for the success of my career. I also like to learn new things.Mainly Looking for an opportunity to utilize my acquired skills and training to help the company and my future peers grow. I want my efforts to make a considerable different to the company and help in their consequent success.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;