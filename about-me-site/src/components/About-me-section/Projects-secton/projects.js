import "./projects.css";

function Projects() {
  return (
    <div>
      <div id="MyProjects"></div>
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
        <div
          className="project-1"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div id="project-name">
            This Site<span id="date-project-1">August 2022</span>
            <pre id="projects-description">An interactive space themed portfolio, filled{'\n'}with many different animations</pre>
            <pre className="projects-technologies">{"  "}React.js{"  "}</pre>
            <pre className="projects-technologies" id="projects-technologies-1">{"  "}CSS{"  "}</pre>
          </div>
        </div>
        <div
          className="project-2"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div id="project-name">
            Spotify Heardle<span id="date-project-2">July 2022</span>
            <pre id="projects-description">Using a users spotify profile, the website plays{'\n'}a snippit of a song in which the user names{'\n'}the title</pre>
            <pre className="projects-technologies">{"  "}React.js{"  "}</pre>
            <pre className="projects-technologies" id="projects-technologies-2">{"  "}MongoDB{"  "}</pre>
          </div>
        </div>
        <div
          className="project-3"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div id="project-name">
            Leaf It<span id="date-project-3">December 2021</span>
            <pre id="projects-description">An automatic irrigation system, that will water{'\n'}a plant depending on its moisture level and{'\n'}its species</pre>
            <pre className="projects-technologies">{"  "}Raspberry Pi{"  "}</pre>
            <pre className="projects-technologies" id="projects-technologies-3">{"  "}Python{"  "}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Projects;
