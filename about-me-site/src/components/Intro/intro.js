import "./intro.css";

function Intro() {
  return (
    <div>
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
    </div>
  );
}

export default Intro;
