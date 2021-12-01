import React from 'react';
import './Skills.css'

const Skills = () => {
    return (

        <div>

            <div className="proficiency pt-5 ">
                <h1 className="text-center "><strong> My Proficiency</strong></h1>
            </div>

            <div className="d-flex justify-content-between m-2 p-3">

                <div className="skills.cont mb-5 p-5 " id="skills">
                    <h2>Tachnical Skills</h2>
                    <div className="skills-bar">

                        <div className="bar">
                            <div className="info">
                                <span>React.js</span>
                            </div>
                            <div className="progress-line reactjs"><span></span></div>
                        </div>
                        <div className="bar">
                            <div className="info">
                                <span>HTML</span>
                            </div>
                            <div className="progress-line html"><span></span></div>
                        </div>
                        <div className="bar">
                            <div className="info">
                                <span>CSS</span>
                            </div>
                            <div className="progress-line css"><span></span></div>
                        </div>
                        <div className="bar">
                            <div className="info">
                                <span>JavaScript</span>
                            </div>
                            <div className="progress-line javascript"><span></span></div>
                        </div>
                        <div className="bar">
                            <div className="info">
                                <span>MongoDB</span>
                            </div>
                            <div className="progress-line mongodb"><span></span></div>
                        </div>

                    </div>

                </div>
                <div>
                    <img className="img-fluid p-5 " src="https://tljconsultinggroup.com/wp-content/uploads/2016/11/Hexagon-of-Effective-PD.png"></img>
                </div>
            </div>
        </div>
    );
};

export default Skills;