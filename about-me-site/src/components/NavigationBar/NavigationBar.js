import "./NavigationBar.css"
import Icon from "../../images/code-icon.png"
import {useState} from 'react';
import {HashLink as Link} from 'react-router-hash-link';
import { useNavigate } from 'react-router-dom';  

function NavigationBar(){
  const [isShown, setIsShown] = useState(false);
  const navigate = useNavigate();

  const handleClick = (e, replace) => {
    navigate("/#"+replace);
    setIsShown(current => !current);
    console.log('The link was clicked.');
  }

    return(
        <div>
        <div className="menu">
        <object id="menu-icon" data={Icon} aria-label="menu icon"></object>
          <div className="menu-bar"></div>
        <button className="menu-bar" id="menu" onClick={e=> handleClick(e, "")}>MENU</button>
{isShown &&(
        <div className="flyDown" data-aos="fade-down" >
          <object id="menu-icon" data-aos="fade-down" data={Icon} aria-label="menu icon"></object>
          <div className="menu-bar" data-aos="fade-down"></div>
          <button className="menu-bar" id="menu" onClick={e=> handleClick(e, "")}>CLOSE</button>
          <hr id="menu-line" data-aos="fade-left" data-aos-duration="1000"/>
          <Link to='#about-me-title' className="links" id="About-me-title" data-aos="fade-right" data-aos-duration="1000" onClick={e=> handleClick(e, "about-me-title")}>About Me</Link>
          <Link to='#projects-title' className="links" id="Projects-title" data-aos="fade-right" data-aos-duration="1000" onClick={e=> handleClick(e, "projects-title")}>My Projects</Link>
          <Link to='#mySkills-title' className="links" id="Skills-title" data-aos="fade-right" data-aos-duration="1000" onClick={e=> handleClick(e, "mySkills-title")}>My Skills</Link>
          <Link to='#experiences-title' className="links"href="/#" id="Experiences-title" data-aos="fade-right" data-aos-duration="1000" onClick={e=> handleClick(e, "experiences-title")}>My Experiences</Link>
        </div>
)
}
        
        </div>
      </div>
    );
}
export default NavigationBar;