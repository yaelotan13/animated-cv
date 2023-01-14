import { useState } from "react";
import { updateTime } from "./timeHelpers";

export default function BotResponse({ text, startTime, shortDelay = true }) {
  const [timeText, setTimeText] = useState("Just now");
  updateTime(startTime, setTimeText);

  return (
    <div
      className={`sentenceContainer ${
        shortDelay ? "afterShortDelay1" : "twoSecDelay"
      }`}
    >
      <img src="/bot.png" alt="bot" className="botAvatar"></img>
      <div>
        <p className="sentence">{text}</p>
        <p className="time">{`Pola, ${timeText}`}</p>
      </div>
    </div>
  );
}
