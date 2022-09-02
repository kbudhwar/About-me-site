import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { useNavigate } from "react-router-dom";

import "./NavigationBar.css";
import Icon from "../../images/code-icon.png";
import Chat from "../../images/chat.png";
import Resume from "../../images/resume.png";
import Github from "../../images/github.png";
import Linkidin from "../../images/linkidin.png";
import Email from "../../images/email.png";

function NavigationBar() {
  const [isShown, setIsShown] = useState(false);
  const navigate = useNavigate();

  const handleClick = (e, replace) => {
    navigate("/#" + replace);
    setIsShown((current) => !current);
  };

  return (
    <div>
      <div className="menu">
        <Link to="/#">
          <object id="menu-icon" data={Icon} aria-label="menu icon"></object>
        </Link>
        <div className="menu-bar"></div>
        <button
          className="menu-bar"
          id="menu"
          onClick={(e) => handleClick(e, "")}
        >
          menu
        </button>
        {isShown && (
          <div className="flyDown" data-aos="fade-down">
            <div className="menu-bar"></div>
            <button
              className="menu-bar"
              id="menu"
              onClick={(e) => handleClick(e, "")}
            >
              close
            </button>
            <hr id="menu-line" data-aos="fade-left" data-aos-duration="1000" />
            <a href="Khushi Budhwar Resume.pdf" download>
              <object
                id="resume-icon"
                data={Resume}
                aria-label="resume icon"
                data-aos="fade-left"
                data-aos-duration="1000"
              ></object>
            </a>
            <a href="https://github.com/kbudhwar">
              <object
                id="github-icon"
                data={Github}
                aria-label="github icon"
                data-aos="fade-left"
                data-aos-duration="1000"
              ></object>
            </a>
            <a href="https://linkedin.com/in/khushi-budhwar">
              <object
                id="linkidin-icon"
                data={Linkidin}
                aria-label="linkidin icon"
                data-aos="fade-left"
                data-aos-duration="1000"
              ></object>
            </a>
            <a href="mailto: khushi.budhwar@gmail.com">
              <object
                id="email-icon"
                data={Email}
                aria-label="email icon"
                data-aos="fade-left"
                data-aos-duration="1000"
              ></object>
            </a>
            <Link
              to="#AboutMe"
              className="links"
              id="About-me-title"
              data-aos="fade-right"
              data-aos-duration="1000"
              onClick={(e) => handleClick(e, "AboutMe")}
            >
              About Me
            </Link>
            <span
              id="aboutMeDescription"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              A little bit about me.
            </span>
            <Link
              to="#MyProjects"
              className="links"
              id="Projects-title"
              data-aos="fade-right"
              data-aos-duration="1000"
              onClick={(e) => handleClick(e, "MyProjects")}
            >
              My Projects
            </Link>
            <span
              id="projectsDescription"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              Some cool things I have worked on.
            </span>
            <Link
              to="#MySkills"
              className="links"
              id="Skills-title"
              data-aos="fade-right"
              data-aos-duration="1000"
              onClick={(e) => handleClick(e, "MySkills")}
            >
              My Skills
            </Link>
            <span
              id="skillsDescription"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              The things I am good at.
            </span>
            <Link
              to="#experiences-title"
              className="links"
              href="/#"
              id="Experiences-title"
              data-aos="fade-right"
              data-aos-duration="1000"
              onClick={(e) => handleClick(e, "experiences-title")}
            >
              My Experiences
            </Link>
            <span
              id="experiencessDescription"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              Some of my previous jobs.
            </span>
          </div>
        )}
      </div>
      <object id="chat-icon" data={Chat} aria-label="chat icon"></object>

      <button id="chat">
        message me
      </button>
    </div>
  );
}
export default NavigationBar;
