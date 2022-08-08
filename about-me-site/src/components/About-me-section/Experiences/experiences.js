import "./experiences.css";

function Experiences() {
  return (
    <div>
      <div
        className="subtitle"
        id="experiences-title"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        My Experiences<span style={{ color: "#e4448f" }}>.</span>
      </div>
      <hr
        id="experiences-line"
        data-aos="fade-left"
        data-aos-duration="1000"
      ></hr>
      <pre id="experiences-description"></pre>
      <div id="timeline"></div>
    </div>
  );
}

export default Experiences;
