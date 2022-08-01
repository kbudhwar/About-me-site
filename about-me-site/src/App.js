import "./App.css";
import FaceIcon from "./face-icon.svg"

function App() {
  return (
    <div className="pageWrap">
      <div className="title">
        Hi, my <br></br>
        name is <span style={{ fontWeight: "800" }}>Khushi!</span>
      </div>
      <div className="subText">
        I'm a second-year{" "}
        <span style={{ fontWeight: "800" }}>Software-Engineering student</span> at<br></br>
        the University of Waterloo.
      </div>
      <object className="faceIcon" type="image/svg+xml" data={FaceIcon} aria-label="face icon"></object>
    </div>
  );
}

export default App;
