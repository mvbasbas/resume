import React from "react";
import './style.css';

class Education extends React.Component{
    render(){
        return(
            <div>
                <div className = "container">
                    <hr className = "vertical"/>
                        <h3>EDUCATION</h3>
                        <div className = "section">
                            <ul className = "bullet">
                                <li>University of Santo Tomas</li>
                            </ul>
                            <div className = "li-container">
                                <div className = "sub-text">Bachelor of Science in Information Technology: Web and Mobile Application Development </div>
                                <div className ="date">August 2018 - May 2022</div>

                                <ul className ="sub-list">
                                    <li>Dean's List (August 2018 - May 2022)</li>
                                    <li>Latin Honors: Runnning for Magna Cum Laude (June 2022)</li>
                                </ul>
                            </div>
                            <ul className = "bullet">
                                <li>University of Santo Tomas</li>
                            </ul>
                            <div className = "li-container">
                                <div className = "sub-text">Senior High School: Science, Technology, Engineering and Mathematics Track</div>
                                <div className ="date">August 2016 - May 2018</div>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}
export default Education;
