import "./Timeline.css";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function TimelineElement({
  icon,
  dates,
  title,
  subTitle,
  description,
  iconBackground,
  stackIcons,
}) {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date={dates}
      iconStyle={{
        background: iconBackground ?? "rgb(33, 150, 243)",
        color: "#fff",
      }}
      icon={icon}
      dateClassName="textClassName"
    >
      <h3 className="vertical-timeline-element-title">{title}</h3>
      <h4
        className="vertical-timeline-element-subtitle"
        style={{
          color: "rgb(95, 95, 95)",
          fontWeight: 400,
          fontSize: 14,
          marginTop: 2,
        }}
      >
        {subTitle}
      </h4>
      <p>{description}</p>
      {stackIcons && (
        <div className="stackIconsContainer">
          {stackIcons.map((icon) => (
            <div
              className="stackIcon"
              key={icon}
              style={{ backgroundImage: `url("/public/${icon}.png")` }}
            ></div>
          ))}
        </div>
      )}
    </VerticalTimelineElement>
  );
}
