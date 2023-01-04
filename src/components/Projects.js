import React from "react";
import './style.css';

class Projects extends React.Component{
    render(){
        return(
            <div>
                <div className = "container">
                    <hr className = "vertical"/>
                        <h3>PROJECTS</h3>
                        <div className = "section">
                            <ul className = "bullet">
                                <li>Udenna Land Company System (Full-time)</li>
                            </ul>
                            <div className = "li-container">
                                <div className = "sub-text">UI/UX Designer</div>
                                <div className ="date">November 2022 - December 2022</div>
                                <ul className ="sub-list">
                                    <li>Created the wireframe of the system based from the client’s requirements.</li>
                                    <li>Created the UI Design of the Applicant side and the Company side of the system.</li>
                                    <li>Created the prototype of the application.</li>
                                </ul>
                            </div>
                            <ul className = "bullet">
                                <li>OneCFO Website UI Design (Freelance/Part-time)</li>
                            </ul>
                            <div className = "li-container">
                                <div className = "sub-text">UI/UX Designer & Graphic Designer</div>
                                <div className ="date">November 2022 - December 2022</div>
                                <ul className ="sub-list">
                                    <li>Designed OneCFO’s Website and created the illustrations and vectors using Figma.</li>
                                </ul>
                            </div>
                        
                        </div>
                        
                </div>
            </div>
        )
    }
}
export default Projects;
