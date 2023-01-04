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
                        

                            <div className = "tools-container">
                                <div className = "sub-text">Tools and Technologies</div>
                                <ul className ="sub-list">
                                <div className = "skill1-container">
                                    <li>Figma</li>
                                    <li>Adobe XD</li>
                                </div>
                                <div className = "skill1-container">
                                    <li>Adobe Photoshop</li>
                                    <li>Adobe Illustrator</li>
                                </div>
                                <div className = "skill1-container">
                                    <li>Canva</li>
                                    <li>Github</li>
                                </div>
                                    <li>Jira</li>
                                    <li>Microsoft Powerpoint</li>
                                
                                </ul>
                            </div>

                            
                        </div>
                
                </div>
            </div>
        )
    }
}
export default Skills;
