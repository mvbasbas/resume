import React from "react";
import './style.css';

class Experience extends React.Component{
    render(){
        return(
            <div>
                <div className = "container">
                    <hr className = "vertical"/>
                        <h3>EXPERIENCE</h3>
                        <div className = "section">
                            <ul className = "bullet">
                                <li>Edufied</li>
                            </ul>
                            <div className = "li-container">
                                <div className = "sub-text">UI/UX Designer Intern</div>
                                <div className ="date">December 2021 - June 2022</div>
                                <ul className ="sub-list">
                                    <li>Worked with the Product Development team in accomplishing UI/UX tasks and  assist in Front-end development tasks using Angular JS.</li>
                                    <li>Worked with the Digital Marketing team in creating Graphic Design tasks such as Publication materials and Illustrations.</li>
                                </ul>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}
export default Experience;
