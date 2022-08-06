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
        <div id="about-me-title">About me<span style={{ color: "#e4448f" }}>.</span></div>
        <hr id="about-me-line"></hr>
        <pre id="about-me-description">
          From interative websites to scalable applications, I love working on complex problems and finding creative solutions. Feel free to talk
          to me about women in technology, anything <span><a href="https://www.flickr.com/photos/nasawebbtelescope/albums/72177720300469752">space</a></span> related and good <span><a href="https://chamberlaincoffee.com/">coffee</a></span> <span style={{ color: "rgb(250, 230, 98)" , fontWeight:"600"}}>- I love meeting new people!</span>
        </pre>

        <div className="subtitle" id="mySkills-title">
          My Skills<span style={{ color: "#e4448f" }}>.</span>
        </div>
        <hr id="mySkills-line"></hr>
        <pre id="mySkills-description">
        </pre>
        <div className="subtitle" id="experiences-title">
        My Experiences<span style={{ color: "#e4448f" }}>.</span>
        </div>
        <hr id="experiences-line"></hr>
        <pre id="experiences-description">
        </pre>
        <div className="subtitle" id="projects-title">
        My Projects<span style={{ color: "#e4448f" }}>.</span>
        </div>
        <hr id="projects-line"></hr>
      </div>
    </div>
  );
}

export default App;
