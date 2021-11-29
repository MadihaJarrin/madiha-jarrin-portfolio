import React from 'react';
import './Skills.css'

const Skills = () => {
    return (
        <div className="skills.cont">
            <h2>My Skills</h2>
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
    );
};

export default Skills;