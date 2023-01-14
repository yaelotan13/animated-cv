import { useState } from "react";
import { updateTime } from "./timeHelpers";
import { UserCircleIcon } from "@heroicons/react/24/solid";

export default function UserResponse({ text, startTime }) {
  const [timeText, setTimeText] = useState("Just now");
  updateTime(startTime, setTimeText);

  return (
    <div className="sentenceContainer userSentence immediateDelay">
      <UserCircleIcon className="userIcon" />
      <div>
        <p className="sentence">{text}</p>
        <p className="time">{`You, ${timeText}`}</p>
      </div>
    </div>
  );
}
