import "./NavigationBar.css"
import Icon from "../../images/code-icon.png"

function NavigationBar(){
    return(
        <div>
        <div className="menu">
        <object id="menu-icon" data={Icon} aria-label="menu icon"></object>
        <div id="menu-bar">MENU</div>
      </div>
      </div>
    );
}
export default NavigationBar;