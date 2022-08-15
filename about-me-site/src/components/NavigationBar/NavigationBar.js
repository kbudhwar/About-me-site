import "./NavigationBar.css"
import Icon from "../../images/code-icon.png"

function NavigationBar(){
    return(
        <div>
        <div className="menu">
        <object id="menu-icon" data={Icon} aria-label="menu icon"></object>
        <div className="dropdown">
          <div className="menu-bar"></div>
        <button className="menu-bar" id="menu">MENU</button>
        <div class="dropdown-content">
          <a href="/#">ABOUT ME</a>
          <a href="/#">PROJECTS</a>
          <a href="/#">SKILLS</a>
          <a href="/#">EXPERIENCES</a>
        </div>
        </div>
      </div>
      </div>
    );
}
export default NavigationBar;