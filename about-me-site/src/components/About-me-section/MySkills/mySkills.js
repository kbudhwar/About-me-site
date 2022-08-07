import "./mySkills.css";

function mySkills() {
  return (
    <div>
      <div className="subtitle" id="mySkills-title" data-aos="fade-left" data-aos-duration="1000">
        My Skills<span style={{ color: "#e4448f" }}>.</span>
      </div>
      <hr id="mySkills-line" data-aos="fade-left" data-aos-duration="1000"></hr>
      <pre id="languages" data-aos="fade-right" data-aos-duration="1000">
        Languages
      </pre>
      <div id="languages-graph" data-aos="fade-right" data-aos-duration="1000"></div>
      <pre id="types-languages" data-aos="fade-right" data-aos-duration="1000">C++ Java C C# CSS HTML JS PHP Go</pre>
    <pre id="technologies" data-aos="fade-right" data-aos-duration="1000">
      Technologies
    </pre>
    <div id="technologies-graph" data-aos="fade-right" data-aos-duration="1000"></div>
    </div>
  );
}

export default mySkills;
