import "./App.css";
import Icon from "./components/code-icon.png";

function App() {
  return (
    <div className="pageWrap">
      <div className="menu">
        <object id="menu-icon" data={Icon} aria-label="menu icon"></object>
        <div id="menu-bar">MENU</div>
      </div>
      <div id="title">
        Hi, my <br></br>
        name is{" "}
        <span style={{ fontWeight: "800" }}>
          Khushi<span style={{ color: "#e93388" }}>.</span>
        </span>
      </div>

      <div id="subText">
        I'M A SECOND-YEAR{" "}
        <span style={{ fontWeight: "800" }}>SOFTWARE ENGINEERING STUDENT</span>{" "}
        AT
        <br></br>THE UNIVERISTY OF WATERLOO
      </div>
      <div id="scroll"></div>
      <span className="scroll-text" id="s">
        S
      </span>
      <span className="scroll-text" id="c">
        C
      </span>
      <span className="scroll-text" id="r">
        R
      </span>
      <span className="scroll-text" id="o">
        O
      </span>
      <span className="scroll-text" id="l">
        L
      </span>
      <span className="scroll-text" id="l1">
        L
      </span>
      <div>
        <div id="about-me-title">About me.</div>
        <pre id="about-me-description">
          From interative websites to scalable applications, I love working on complex problems and finding creative solutions. Feel free to talk
          to me about women in technology, anything space related and good coffee <span style={{ color: "rgb(250, 230, 98)" , fontWeight:"600"}}>- I love meeting new people!</span>
        </pre>
      </div>
    </div>
  );
}

export default App;
