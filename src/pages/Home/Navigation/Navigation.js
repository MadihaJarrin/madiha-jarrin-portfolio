import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navigation.css'

const Navigation = () => {
    return (
        <div className=' text-light'>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
                <div class="container-fluid d-flex justify-content-between">
                    <div className="">
                        <a class="navbar-brand text-danger" href="#">MJ</a>
                    </div>
                    {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button> */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#about">About Me</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#skills">My Skills</a>
                            </li>
                            <li class="nav-item">
                                <NavLink to="/blogs"> <a className="nav-link active blogs" aria-current="page" >My Blogs</a></NavLink>

                            </li>
                            <li class="nav-item">
                                <a className="nav-link active" aria-current="page" href="#contact">Contact</a>
                            </li>

                        </ul>
                        <form className="d-flex">
                            {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"> */}
                            <a href="https://drive.google.com/file/d/16pvURhThPeTfNXX47AXzJlrXu0b-v7aj/view"> <button type="button" className="btn btn-outline-success">Download Resume</button></a>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;