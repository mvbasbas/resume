import React from "react";
import './style.css';

class Personal extends React.Component{
    render(){
        return(
            <div>
                <div className = "container">
                    <div className ="content">
                        <hr className = "hr"/>
                        <hr className = "vertical"/>
                        <h3>ABOUT</h3>

                        <div className = "About-text">

                            A Bachelor of Science in Information Technology specializing in Web and Mobile Application Development graduate,
                            inclined in UI/UX design and Graphic Design, seeking to develop and enhance the appropriate skills and knowledge for UI/UX Design.
                        </div>
                        

                    </div>
                </div>
            </div>
        );
    }
}
export default Personal;