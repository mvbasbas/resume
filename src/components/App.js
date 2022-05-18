import React from "react";
import About from "./About";
import Personal from "./Personal";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";
import Achievements from "./Achievements";




class App extends React.Component{
    render() {
        return(
            <div>
                <About/>
                <Personal/>
                <Experience/>
                <Education/>
                <Skills/>
                <Projects/>
                <Achievements/>
            </div>
        );
    }
}
export default App;

