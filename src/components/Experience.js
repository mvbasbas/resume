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
                                <li>OneCFO</li>
                            </ul>
                            <div className = "li-container">
                                <div className = "sub-text">Senior UI/UX Designer</div>
                                <div className ="date">May 2025 - Present</div>
                                <ul className ="sub-list">
                                    <li>Promoted from UI/UX Designer to Senior UI/UX Designer, leading UI/UX design for web application, collaborating with cross-functional teams, and supporting branding and marketing design using Figma and other design tools.</li>
                                
                                </ul>

                                <div className = "sub-text">UI/UX Designer</div>
                                <div className ="date">Feb 2023 - April 2025</div>
                                <ul className ="sub-list">
                                    <li>Worked with the development team to design and deliver UI/UX solutions using Figma.</li>
                                    <li>Translated requirements into user-friendly interfaces for web and mobile applications.</li>
                                    <li>Collaborated with the digital marketing team to create branding and graphic design assets such as publication materials, presentations, and illustrations.</li>
                                    <li>Designed visual content using Figma, Canva, and PowerPoint.</li>
                                    <li>Maintained consistency across digital and marketing design outputs.</li>
                                </ul>


                            <ul className = "bullet">
                                <li>Edufied</li>
                            </ul>
                            <div className = "li-container">
                                <div className = "sub-text">Junior UI/UX Designer</div>
                                <div className ="date">July 2022 - Feb 2023</div>
                                <ul className ="sub-list">
                                    <li>Worked with the Product Development team in accomplishing UI/UX tasks using Figma.</li>
                                    <li>Worked with the Digital Marketing team in creating Graphic Design tasks such as publication materials and illustrations using Figma, Canva and Adobe Photoshop.</li>
                                </ul>
                            </div>

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
            </div>
        )
    }
}
export default Experience;
