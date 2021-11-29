import React from 'react';
import pedal from '../images/pedalpals.png';
import medicare from '../images/medicare.png';
import fight from '../images/fight.png';
import holiday from '../images/holidaa.png'

const Project = () => {
    return (
        <div className="p-5">
            <h1 className="pb-5">My Work</h1>
            <div class="row row-cols-1 row-cols-md-4 g-4">
                <div class="col">
                    <div class="card h-100">
                        <img src={pedal}></img>
                        <div class="card-body">
                            <a href="https://pedalpals-46632.web.app/"> <button type="button" class="btn btn btn-success">Live Site</button></a>
                            <a href="https://github.com/MadihaJarrin/pedal-pals-client"> <button type="button" class="btn btn-outline-success">GitHub</button></a>
                            <h5 class="card-title">Pedal Pals</h5>
                            <p class="card-text"> A full-stack responsive service seller app.

                                Users can purchase a product through login/registration system, make a review from the dashboard as well.

                                Admin can add/delete services, make another admin and manage all orders. </p>
                            <h6>Technology:React.Js, React-Router, Material Ui, Bootstrap, Axios, Node.js, Express.js, MongoDB (CRUD Operations) Firebase, Heroku. </h6>

                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={medicare}></img>
                        {/* <img src="..." class="card-img-top" alt="..."> */}
                        <div class="card-body">
                            <a href="https://simple-firebase-authenti-a4286.web.app/"> <button type="button" class="btn btn btn-success">Live Site</button></a>
                            <a href="https://github.com/MadihaJarrin/medi-care"> <button type="button" class="btn btn-outline-success">GitHub</button></a>
                            <h5 class="card-title">Medi-Care</h5>
                            <p class="card-text">A React-based responsive service app.

                                Through google sign in system users can be able to see the detail of their services

                                Users can navigate different the difference pages using navbar without reloading.</p>
                            <h6>Technology: React.js, React-Router, React-Bootstrap, Firebase.</h6>

                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={fight}></img>
                        {/* <img src="..." class="card-img-top" alt="..."> */}
                        <div class="card-body">
                            <a href="https://fight-to-fitness.netlify.app/"> <button type="button" class="btn btn-success">Live Site</button></a>
                            <a href="https://github.com/MadihaJarrin/figth-to-fitness"> <button type="button" class="btn  btn-outline-success">GitHub</button></a>
                            <h5 class="card-title">Fight to Fitness</h5>
                            <p class="card-text">1.Develop your fighting & self- defense skill .
                                2. to keep your body fit & relive stress.
                                3. Cultivate a serving attitude & be a happier person.

                            </p>
                            <h6>Technology: React.js, React-Router, React-Bootstrap, Firebase.</h6>

                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={holiday}></img>
                        {/* <img src="..." class="card-img-top" alt="..."> */}
                        <div class="card-body">
                            <a href="https://holiday-hype-8df84.web.app/"> <button type="button" class="btn btn btn-success">Live Site</button></a>
                            <a href="https://github.com/MadihaJarrin/holiday-hype-client"> <button type="button" class="btn btn-outline-success">GitHub</button></a>
                            <h5 class="card-title">Holiday Hype</h5>
                            <p class="card-text"> A full-stack responsive service app.

                                Users can add/delete services, make another service and manage their orders.

                                Users can book a service through login/registration/ google sign in system.</p>
                            <h6>Technology: React.js, React-Router, Bootstrap, Node.js, Axios, CSS, Express.js MongoDB(CRUD operations), firebase, Heroku. </h6>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;