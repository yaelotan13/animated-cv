import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  BriefcaseIcon,
  BookOpenIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import TimelineElement from "./TimelineElement";

import "./Timeline.css";

export default function Timeline() {
  return (
    <div id="timeline">
      <VerticalTimeline className="timeline">
        <TimelineElement
          icon={<BriefcaseIcon />}
          dates="March 2022 - present"
          title="Fullstack developer"
          subTitle="Gluework, Tel Aviv"
          description="End to end responsibility of the system's core features, mainly focused on frontend tasks (around 70%) using react and Node.JS"
          iconBackground="rgb(33, 150, 243)"
          stackIcons={[
            "node",
            "postgresql",
            "react",
            "remix",
            "tailwind",
            "storybook",
          ]}
        />
        <TimelineElement
          icon={<BriefcaseIcon />}
          dates="July 2020 - March 2023"
          title="Fullstack developer"
          subTitle="Otorio, Tel Aviv"
          description="Worked on python microservices in a dockerized environment, primarily managing network assets classification and transforming into user friendly data"
          iconBackground="rgb(33, 150, 243)"
          stackIcons={[
            "react",
            "python",
            "docker",
            "postgresql",
            "scss",
            "rabbitmq",
            "cypress",
          ]}
        />
        <TimelineElement
          icon={<BookOpenIcon />}
          dates="April 2019 - May 2020"
          title="Fullstack bootcamp"
          subTitle="Infinity labs, Ramat Gan"
          description="One-year full time course (8:30 AM - 18:30 PM), covering a wide variety of programming topics such as data structures, networking, OOP as well as hands on experience with projects in C, Java, Javascript, React and Node"
          iconBackground="rgb(116, 201, 157)"
        />
        <TimelineElement
          icon={<BookOpenIcon />}
          dates="August 2018 - January 2019"
          title="She codes student"
          subTitle="Web track, Suloto and Google Tel Aviv"
          description="Got a first taste for software engineering on weekly based classes, learning web development fundamentals (absolutely fell in love 😍)"
          iconBackground="rgb(116, 201, 157)"
        />
        <TimelineElement
          icon={<AcademicCapIcon />}
          dates="2015 - 2018"
          title="BA Psychology"
          subTitle="ICD, Herzliya"
          description="Graduated as an Honor student with an average of 95"
          iconBackground="rgb(148, 65, 172)"
        />
        <TimelineElement
          icon={
            <div className="materialIconContainer">
              <span className="material-icons">military_tech</span>
            </div>
          }
          dates="2011 - 2013"
          title="Military Service"
          subTitle="Tel Hashomer"
          description="Served with an execeptional athlete status while still representing Israel in international tournaments"
          iconBackground="rgb(235, 84, 159)"
        />
        <TimelineElement
          icon={
            <div className="materialIconContainer">
              <span className="material-icons">sports_volleyball</span>
            </div>
          }
          dates="2007 - 2013"
          title="Israel Volleyball National Team"
          subTitle="Wingate Institute"
          description="Lived in Wingate institute for athletes from 8th grade till the army service (including). Took part in Israel youth and adult national teams"
          iconBackground="rgb(242, 157, 92)"
        />
      </VerticalTimeline>
    </div>
  );
}
