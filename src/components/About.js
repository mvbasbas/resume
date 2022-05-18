import React from "react";
import Img from '../images/me5.svg';
import Cp from '../images/telephone.svg';
import Email from '../images/email.svg';
import Home from '../images/home.svg';
import Pfolio from '../images/portfolio.svg';
import './style.css';

class About extends React.Component{
    render(){
        return(
            <div>
                <div className = "header-container">
                    <img className ="photo" src= {Img}/>
                    <div className = "header"> 
                        <h1>MHARGARETTE V. BASBAS </h1>
                        <br/>
                    
                        <img className = "icon" src= {Cp} /> 
                        <div className ="text">09294087259</div>

                        <br/>
                        <img className = "icon" src= {Email}/>
                        <div className ="text">mhargarettebasbas@gmail.com</div>
                    
                        <br/>
                        <img className = "icon" src= {Home}/>
                        <div className ="text">21-B Florpina St. Roxas, Quezon City</div>

                        <br/>
                        <img className = "icon" src= {Pfolio}/>
                        <div className ="text">
                        Portfolio | <a href = "https://mhargarette-basbas.webflow.io"> https://mhargarette-basbas.webflow.io</a>
                        </div>
                    </div>
                
                </div>
            </div>
        )
    }
}
export default About;
