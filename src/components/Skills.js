import React from "react";
import './style.css';

class Skills extends React.Component{
    render(){
        return(
            <div>
                <div className = "container">
                    <hr className = "vertical"/>
                        <h3>SKILLS</h3>
                        <div className = "section">
                            <ul className = "bullet">
                                <li>Technical Skills</li>
                            </ul>
                        
                            <div className = "sub-text">Programming Languages/Libraries</div>
                        
                                <ul className ="sub-list">
                                    <div className = "skill1-container">
                                        <li>HTML/CSS</li>
                                    </div>
                                    <div className = "skill1-container">
                                        <li>Javascript</li>
                                    </div>
                                    <li>React JS</li>
                                </ul>

                            <div className = "tools-container">
                                <div className = "sub-text">Tools and Technologies</div>
                                <ul className ="sub-list">
                                <div className = "skill1-container">
                                    <li>Figma</li>
                                    <li>Adobe XD</li>
                                </div>
                                <div className = "skill1-container">
                                    <li>Adobe Photoshop</li>
                                    <li>Visual Studio Code</li>
                                </div>
                                    <li>Jira</li>
                                    <li>Github</li>
                                </ul>
                            </div>

                            <div className = "soft-container">
                                <ul className = "bullet">
                                    <li>Soft Skills</li>
                                </ul>

                                <ul className ="sub-list">
                                    <div className = "skill1-container">
                                        <li>Communication</li>
                                        <li>Teamwork</li>
                                    </div>
                                    <div className = "skill1-container">
                                        <li>Creativity</li>
                                        <li>Time Management</li>
                                    </div>
                                        <li>Resourcefulness</li>
                                        <li>Detail-oriented</li>
                                
                                </ul>
                            </div>
                        </div>
                
                </div>
            </div>
        )
    }
}
export default Skills;
