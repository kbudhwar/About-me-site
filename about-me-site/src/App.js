import "./App.css";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import FaceIcon from "./images/face-icon.png"

import Intro from "./components/Intro/intro";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Scroll from "./components/Scroll/Scroll.js";
import AboutMe from "./components/About-me-section/About-me/about-me";
import MySkills from "./components/About-me-section/MySkills/mySkills";
import Experiences from "./components/About-me-section/Experiences/experiences";
import Projects from "./components/About-me-section/Projects-secton/projects";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <object className="pageWrap" type="image/svg+xml" aria-label="background" data="https://cdn.svgator.com/images/2021/10/animated-background-space.svg" alt="animated space background" img="" width="200%" height="100%"></object>
      <div className="pageWrap"></div>
      <div id="white-top"></div>
      <Intro></Intro>
      <NavigationBar></NavigationBar>
      <Scroll></Scroll>
      <AboutMe></AboutMe>
      <MySkills></MySkills>
      <Experiences></Experiences>
      <Projects></Projects>
      <div id="footer"></div>
    </div>
  );
}

export default App;
