import "./App.css";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
      <div className="pageWrap"></div>
      <div id="white-top"></div>
      <div id="white-bottom"></div>
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
