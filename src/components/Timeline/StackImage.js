import Tailwind from "../../assets/tailwind.png";
import Storybook from "../../assets/storybook.png";
import Scss from "../../assets/scss.png";
import Remix from "../../assets/remix.png";
import ReactImage from "../../assets/react.png";
import RabbitMQ from "../../assets/rabbitmq.png";
import Python from "../../assets/python.png";
import NodeJS from "../../assets/node.png";
import Docker from "../../assets/docker.png";
import Cypress from "../../assets/cypress.png";
import Postgresql from "../../assets/postgresql.png";
import "./Timeline.css";

export default function stackImage({ name }) {
  const getImage = () => {
    switch (name) {
      case "tailwind":
        return Tailwind;
      case "storybook":
        return Storybook;
      case "scss":
        return Scss;
      case "remix":
        return Remix;
      case "react":
        return ReactImage;
      case "rabbitmq":
        return RabbitMQ;
      case "python":
        return Python;
      case "node":
        return NodeJS;
      case "docker":
        return Docker;
      case "cypress":
        return Cypress;
      case "postgresql":
        return Postgresql;
      default:
        return <></>;
    }
  };
  return <img src={getImage()} alt={name} className="stackIcon" />;
}
