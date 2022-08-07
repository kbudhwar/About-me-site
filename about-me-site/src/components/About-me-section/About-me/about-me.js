import "./about-me.css";

function AboutMe() {
  return (
    <div>
      <div id="about-me-title" data-aos="fade-left" data-aos-duration="1000" >
        About me<span style={{ color: "#e4448f" }}>.</span>
      </div>
      <hr id="about-me-line" data-aos="fade-left" data-aos-duration="1000"></hr>
      <pre id="about-me-description" data-aos="fade-right" data-aos-duration="1000">
        From interative websites to scalable applications, I love working on
        complex problems and finding creative solutions. Feel free to talk to me
        about women in technology, anything{" "}
        <span>
          <a href="https://www.flickr.com/photos/nasawebbtelescope/albums/72177720300469752">
            space
          </a>
        </span>{" "}
        related and good{" "}
        <span>
          <a href="https://chamberlaincoffee.com/">coffee</a>
        </span>{" "}
        <span style={{ color: "rgb(250, 230, 98)", fontWeight: "600" }}>
          - I love meeting new people!
        </span>
      </pre>
    </div>
  );
}

export default AboutMe;
