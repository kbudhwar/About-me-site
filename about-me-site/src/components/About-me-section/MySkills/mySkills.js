import "./mySkills.css";
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { PieChart } from "react-minimal-pie-chart";

function MySkills() {
  const { ref: Charts, inView: Visible } = useInView();
  const [hovered, setHovered] = useState(undefined);
  const [hoveredTech, setHoveredTech] = useState(undefined);


  const languageData = [
    { title: "C++", value: 18, color: "#c780e8" },
    { title: "Java", value: 18, color: "#9d94ff" },
    { title: "C", value: 18, color: "#59adf6" },
    { title: "C#", value: 10, color: "	#08cad1" },
    { title: "CSS", value: 10, color: "#42d6a4    " },
    { title: "HTML", value: 10, color: "#e6e05e" },
    { title: "JS", value: 10, color: "#ffb480" },
    { title: "PHP", value: 6, color: "#ff6961" },
  ];
  const technologiesData = [
    { title: "Docker", value: 15, color: "#ffb480" },
    { title: "K8s", value: 10, color: "	#42d6a4" },
    { title: "Jenkins", value: 10, color: "#08cad1" },
    { title: "GCP", value: 5, color: "#59adf6" },
    { title: "React", value: 30, color: "#9d94ff" },
    { title: "Git", value: 30, color: "#ff6961" },
  ];
  return (
    <div>
      <div
        className="subtitle"
        id="mySkills-title"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        My Skills<span style={{ color: "#e4448f" }}>.</span>
      </div>
      <hr id="mySkills-line" data-aos="fade-left" data-aos-duration="1000"></hr>

      <pre id="languages" data-aos="fade-right" data-aos-duration="1000">
        Languages
      </pre>
      <pre id="languages-chart" ref={Charts}>
        <PieChart
          label={({ dataEntry }) =>
            hovered || hovered===0?  dataEntry.value + "%" : dataEntry.title
          }
          radius={PieChart.defaultProps.radius - 6}
          segmentsStyle={{ transition: "stroke .3s", cursor: "pointer" }}
          segmentsShift={(index) => (index === hovered ? 6 : 1)}
          lineWidth={55}
          paddingAngle={2}
          labelStyle={{
            fontSize: "6px",
            fill: "white",
            fontWeight: "bold",
            fontFamily: '"Poppins", sans-serif',
            fillOpacity: "80%",
          }}
          onMouseOver={(_, index) => {
            setHovered(index);
          }}
          onMouseOut={() => {
            setHovered(undefined);
          }}
          labelPosition={80}
          data={languageData}
          animationEasing="ease-out"
          lengthAngle={-360}
          animate
          animationDuration={1000}
          reveal={Visible ? 100 : 0}
        />
      </pre>
      <pre id="technologies" data-aos="fade-right" data-aos-duration="1000">
        Technologies
      </pre>
      <pre id="technologies-chart" ref={Charts}>
        <PieChart
          label={({ dataEntry }) =>
            hoveredTech || hoveredTech===0? dataEntry.value + "%" : dataEntry.title
          }
          radius={PieChart.defaultProps.radius - 6}
          segmentsStyle={{ transition: "stroke .3s", cursor: "pointer" }}
          segmentsShift={(index) => (index === hoveredTech ? 6 : 1)}
          lineWidth={55}
          paddingAngle={2}
          labelStyle={{
            fontSize: "5.5px",
            fill: "white",
            fontWeight: "bold",
            fontFamily: '"Poppins", sans-serif',
            fillOpacity: "80%",
          }}
          onMouseOver={(_, index) => {
            setHoveredTech(index);
          }}
          onMouseOut={() => {
            setHoveredTech(undefined);
          }}
          labelPosition={75}
          data={technologiesData}
          animationEasing="ease-out"
          animate
          animationDuration={1000}
          reveal={Visible ? 100 : 0}
        />
      </pre>
    </div>
  );
}

export default MySkills;
