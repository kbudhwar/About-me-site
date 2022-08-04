import "./App.css";
import Stripes from "./stripes-background.png";
import Icon from "./code-icon.png";

function App() {
  return (
    <div className="pageWrap">
      <div className="menu">
      <object
        id="menu-icon"
        data={Icon}
        aria-label="menu icon"
      ></object>
      <div id="menu-bar">MENU</div>
  </div>
      <div className="text">
        <div id="title">
          Hi, my <br></br>
          name is{" "}
          <span style={{ fontWeight: "800" }}>
            Khushi<span style={{ color: "#e93388" }}>.</span>
          </span>
        </div>

        <div id="subText">
          I'M A SECOND-YEAR <span style={{ fontWeight: "800" }}>SOFTWARE ENGINEERING STUDENT</span> AT
          <br></br>THE UNIVERISTY OF WATERLOO
        </div>
      </div>
      <div id="scroll"> SCROLL
      </div>
    </div>
  );
}

export default App;
