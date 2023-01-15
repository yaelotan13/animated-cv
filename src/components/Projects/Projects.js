import "./Projects.css";
import Project from "./Project";

export default function Projects() {
  const projects = [
    {
      title: "Freddie Mercury",
      description: "CSS art",
      image: "/freddieMercury.png",
      link: "www.google.com",
    },
    {
      title: "City",
      description: "CSS art",
      image: "/city.png",
      link: "www.google.com",
    },
    {
      title: "Lion",
      description: "CSS art",
      image: "/lion.png",
      link: "www.google.com",
    },
    {
      title: "Tamagotchi",
      description: "Game with vanilla JS",
      image: "/tamagochi.png",
      link: "www.google.com",
    },
  ];
  return (
    <div className="pageContainer">
      <h1 className="title">
        <span className="side">Side </span>Projects
      </h1>
      <div className="projectsContainer">
        {projects.map((project) => {
          return <Project key={project.title} project={project} />;
        })}
      </div>
    </div>
  );
}
