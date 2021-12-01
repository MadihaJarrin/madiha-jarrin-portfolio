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
            <div className='portfolio-parent '>
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

                <div className="profile-details-name position-absolute bottom-50 end-50 ps-5 ">
                    <div className="pt-5">
                        <h2 className="pt-5"> Hey There!! I'm <span className="highlighted-text fs-1 fw-bold ">Madiha Jarrin</span></h2>
                        <h6 >Mainly I am MERN Stack Developer. I'm ready to work hard for the success of my career. I also like to learn new things .</h6>
                    </div>
                    <div className="d-flex justify-content-center ">
                        <div className=" p-2 ">
                            <a href="https://drive.google.com/file/d/16pvURhThPeTfNXX47AXzJlrXu0b-v7aj/view"> <button type="button" class="btn btn-success">Download Resume</button></a>
                        </div>
                        <div className="p-2 ">
                            <a href="https://drive.google.com/file/d/16pvURhThPeTfNXX47AXzJlrXu0b-v7aj/view"> <button type="button" class="btn btn-outline-success">Hire Me</button></a>
                        </div>
                    </div>


                    {/* https://drive.google.com/u/0/uc?id=1iT_njyWXG_p4BuXxxwcJPQrbfjczRTku&export=download */}
                </div>
            </div>
            <div className="image-container ">
                <img className="" src={madiha} alt="Madiha-Jarrin"></img>
            </div>
        </div>
    );
};

export default Header;