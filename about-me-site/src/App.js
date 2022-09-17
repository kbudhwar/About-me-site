import "./App.css";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Intro from "./components/Intro/intro";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Scroll from "./components/Scroll/Scroll.js";
import AboutMe from "./components/About-me-section/About-me/about-me";
import MySkills from "./components/About-me-section/MySkills/mySkills";
import Experiences from "./components/About-me-section/Experiences/experiences";
import Projects from "./components/About-me-section/Projects-secton/projects";
import {BrowserRouter} from 'react-router-dom';


class App extends React.Component{
  authenticate(){
    return new Promise(resolve => setTimeout(resolve, 2000)) // 2 seconds
  }

  componentDidMount(){
    this.authenticate().then(() => {
      const ele = document.getElementById('ipl-progress-indicator')
      if(ele){
        // fade out
        ele.classList.add('available')
        setTimeout(() => {
          // remove from DOM
          ele.outerHTML = ''
        }, 2000)
      }
    })
  }
  render(){
  return (
    <BrowserRouter>
    {AOS.init()}
    { AOS.refresh()}
      <object className="pageWrap" type="image/svg+xml" aria-label="background" data="https://cdn.svgator.com/images/2021/10/animated-background-space.svg" alt="animated space background" img="" width="200%" height="100%"></object>
      <Intro></Intro>
      <NavigationBar></NavigationBar>
      <Scroll></Scroll>
      <AboutMe></AboutMe>
      <MySkills></MySkills>
      <Projects></Projects>
      <div id="footer"></div>
    </BrowserRouter>
  );
  }
}

export default App;
