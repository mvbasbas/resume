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

                        A graduate of Bachelor of Science in Information Technology, specialized in Web and Mobile Application Development with 6 months of professional experience as a UI/UX Designer. 
                        </div>
                        

                    </div>
                </div>
            </div>
        );
    }
}
export default Personal;