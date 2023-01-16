import { useState } from "react";
import "./Projects.css";

export default function Project({ project }) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <a href={project.link} target="_blank" rel="noreferrer">
      <div
        className="project"
        style={{ backgroundImage: `url(${project.image})` }}
        onMouseOver={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {isHovering && (
          <div className="innerProjectSection">
            <h3>{project.title}</h3>
            <p className="projectDescription">{project.description}</p>
          </div>
        )}
      </div>
    </a>
  );
}
