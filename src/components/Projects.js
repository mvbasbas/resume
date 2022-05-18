import React from "react";
import './style.css';

class Projects extends React.Component{
    render(){
        return(
            <div>
                <div className = "container">
                    <hr className = "vertical"/>
                        <h3>ACADEMIC PROJECTS</h3>
                        <div className = "section">
                            <ul className = "bullet">
                                <li>PharmFinder: Pharmacy Locator</li>
                            </ul>
                            <div className = "li-container">
                                <div className = "sub-text">UI/UX Designer &#38; Documentations Manager</div>
                                <div className ="date">June 2021 - December 2021</div>
                                <ul className ="sub-list">
                                    <li>Collaborated with the team in creating the UI design of the application.</li>
                                    <li>Created the prototype of the application.</li>
                                    <li>Accomplished the paper deliverables</li>
                                </ul>
                            </div>
                            <ul className = "bullet">
                                <li>Web-based Inventory and Ordering System For Blaze Athletics </li>
                            </ul>
                            <div className = "li-container">
                                <div className = "sub-text">System Analyst</div>
                                <div className ="date">August 2020 - May 2021</div>
                                <ul className ="sub-list">
                                    <li>Defined system requirements by identifying the problems of the business.</li>
                                </ul>
                            </div>
                            <ul className = "bullet">
                                <li>Kiddy Quiz </li>
                            </ul>
                            <div className = "li-container">
                                <div className = "sub-text">Front-End Developer &#38; UI/UX Designer</div>
                                <div className ="date">August 2020 - December 2020</div>
                                <ul className ="sub-list">
                                    <li>Coded the front-end design of the application.</li>
                                    <li>Designed the User Interface of the application.</li>
                                </ul>
                            </div>
                        </div>
                        
                </div>
            </div>
        )
    }
}
export default Projects;
