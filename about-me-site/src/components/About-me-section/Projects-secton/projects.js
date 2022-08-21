import "./projects.css";

function Projects() {
  return (
    <div>
      <div
        className="subtitle"
        id="projects-title"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        My Projects<span style={{ color: "#e4448f" }}>.</span>
      </div>
      <hr
        id="projects-line"
        data-aos="fade-right"
        data-aos-duration="1000"
      ></hr>
      <div className="projects">
        <div id="project-1" data-aos="fade-right" data-aos-duration="1000">
          <div id="project-name">This Site</div>
        </div>
        <div id="project-2" data-aos="fade-right" data-aos-duration="1000">
        <div id="project-name">Spotify Heardle</div>
        </div>
        <div id="project-3" data-aos="fade-right" data-aos-duration="1000">
        <div id="project-name">Leaf It</div>
        </div>
      </div>
    </div>
  );
}
export default Projects;
