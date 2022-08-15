import "./about-me.css";
import { useInView } from "react-intersection-observer";
import RocketIcon from "../../../images/rocket.png"

function AboutMe() {
  const { ref: Rocket, inView: Visible } = useInView();

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
      <div ref={Rocket} id="rocket" data-aos="fade-left" style={ {animation: (Visible ? "animate-rocket 8s cubic-bezier(0.215, 0.61, 0.355, 1) 0.25s": "")}}><object id="rocket" data={RocketIcon} aria-label="rocket"></object></div>
    </div>
  );
}

export default AboutMe;
