import "./test.css";
import { gsap } from "gsap";

export default function Box() {
  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "#e77614", scale: 1.2 });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "#28a92b", scale: 1 });
  };

  return (
    <div className="box" onMouseEnter={onEnter} onMouseLeave={onLeave}></div>
  );
}
