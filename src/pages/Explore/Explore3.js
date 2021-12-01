import React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import pedal1 from '../Explore/images/fight/fight1.png'
import pedal2 from '../Explore/images/fight/fight2.png'
import pedal3 from '../Explore/images/fight/fight3.png'
import pedal4 from '../Explore/images/fight/fight4.png'
import pedal5 from '../Explore/images/fight/fight5.png'


const Explore3 = () => {
    return (

        <div >
            <div className="d-flex justify-content-between">
                <div class="card bg-light text-white">
                    <img className="img-fluid p-5" src={pedal1}></img>
                    <div class="card-img-overlay">
                        {/* <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text">Last updated 3 mins ago</p> */}
                    </div>
                </div>
                <div class="card bg-light text-white">
                    <img className="img-fluid p-5" src={pedal2}></img>
                    <div class="card-img-overlay">
                        {/* <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text">Last updated 3 mins ago</p> */}
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-between">
                <div class="card bg-ligh text-white">
                    <img className="img-fluid p-5" src={pedal3}></img>
                    <div class="card-img-overlay">
                        {/* <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text">Last updated 3 mins ago</p> */}
                    </div>
                </div>
                <div class="card bg-ligh text-white">
                    <img className="img-fluid p-5" src={pedal4}></img>
                    <div class="card-img-overlay">
                        {/* <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text">Last updated 3 mins ago</p> */}
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-between">
                <div class="card bg-ligh text-white">
                    <img className="img-fluid p-5" src={pedal5}></img>
                    <div class="card-img-overlay">
                        {/* <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text">Last updated 3 mins ago</p> */}
                    </div>
                </div>
                <div class="card bg-ligh text-white">
                    <img className="img-fluid p-5" src={pedal1}></img>
                    <div class="card-img-overlay">
                        {/* <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text">Last updated 3 mins ago</p> */}
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Explore3;