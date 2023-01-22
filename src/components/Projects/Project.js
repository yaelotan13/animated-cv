import { useState } from "react";
import "./Projects.css";
import Freddie from "../../assets/freddieMercury.png";
import Lion from "../../assets/lion.png";
import City from "../../assets/city.png";
import Tamagochi from "../../assets/tamagochi.png";

const getImage = (image) => {
  switch (image) {
    case "lion": {
      return Lion;
    }
    case "city": {
      return City;
    }
    case "freddie": {
      return Freddie;
    }
    case "tamagochi": {
      return Tamagochi;
    }
    default: {
      return <></>;
    }
  }
};

export default function Project({ project }) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <a href={project.link} target="_blank" rel="noreferrer">
      <div
        className="projectImageWrapper"
        onMouseOver={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <img
          src={getImage(project.image)}
          className="project"
          alt={project.image}
        ></img>
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
