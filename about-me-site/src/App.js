import "./App.css";
import FaceIcon from "./face-icon.png"

function App() {
  return (
    <div className="pageWrap">
      <div className="title">
        Hi, my <br></br>
        name is <span style={{ fontWeight: "800" }}>Khushi!</span>
      </div>
      <object className="faceIcon"  data={FaceIcon} aria-label="face icon"></object>
      <div className="subText">
        I'm a second-year{" "}
        <span style={{ fontWeight:"900" }}>Software-Engineering student</span> at<br></br>
        the University of Waterloo.
      </div> 
    </div>
  );
}

export default App;