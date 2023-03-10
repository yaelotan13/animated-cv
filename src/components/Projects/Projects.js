import "./Projects.css";
import Project from "./Project";

export default function Projects() {
  const projects = [
    {
      title: "Freddie Mercury",
      description: "CSS art",
      image: "freddie",
      link: "https://yaelotan13.github.io/Freddie-Mercury-CSS/",
    },
    {
      title: "City",
      description: "CSS art",
      image: "city",
      link: "https://yaelotan13.github.io/city-css/",
    },
    {
      title: "Lion",
      description: "CSS art",
      image: "lion",
      link: "https://yaelotan13.github.io/lion-css/",
    },
    {
      title: "Tamagotchi",
      description:
        "Game with vanilla JS, made by coding along with the course https://frontendmasters.com/courses/front-end-game/",
      image: "tamagochi",
      link: "https://yaelotan13.github.io/tamagochi/",
    },
    {
      title: "Refactoring UI book summary",
      description:
        "An interactive book summary build with vanilla JS, HTML and CSS",
      image: "refactoringUI",
      link: "https://yaelotan13.github.io/refactoring-ui/",
      workInProgress: true,
    },
  ];
  return (
    <div className="pageContainer" id="sideProjects">
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
