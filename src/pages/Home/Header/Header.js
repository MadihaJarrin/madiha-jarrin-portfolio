import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import madiha from '../images/Madiha.png';
import "./Header.css";
<style>
    @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@1,500;1,600;1,700&display=swap');
</style>

const Header = () => {
    return (
        <div className='porfolio-container p-5 m-5 '>
            <div className='portfolio-parent'>
                {/* <div className='portfolio-details'>
                    <a href="#" >
                        <i className='fa fa-facebook-square'></i>
                    </a>
                    <a href="#" >
                        <i className='fa fa-google-plus-square'></i>
                    </a>
                    <a href="#" >
                        <i className='fa fa-instagram'></i>
                    </a>
                    <a href="#" >
                        <i className='fa fa-twitter'></i>
                    </a>
                </div> */}

                <div className="profile-details-name position-absolute bottom-50 end-50">
                    <h2> Hey There!! I'm <span className="highlighted-text fs-1 fw-bold">Madiha Jarrin</span></h2>
                    <h6 >Mainly I am MERN Stack Developer. I'm ready to work hard for the success of my career. I also like to learn new things .</h6>
                    <a href="https://drive.google.com/drive/folders/1hYsG11cWfC4Lmcnw3n2xPSxy8LEOPkWP"> <button type="button" class="btn btn-success">Download Resume</button></a>
                    <button type="button" class="btn btn-outline-success">Hire Me</button>
                </div>
            </div>
            <div className="image-container ">
                <img className="" src={madiha} alt="Madiha-Jarrin"></img>
            </div>
        </div>
    );
};

export default Header;