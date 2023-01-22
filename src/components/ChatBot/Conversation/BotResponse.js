import { useState } from "react";
import { updateTime } from "./timeHelpers";
import BotImage from "../../../assets/bot.png";

export default function BotResponse({ text, startTime, shortDelay = true }) {
  const [timeText, setTimeText] = useState("Just now");
  updateTime(startTime, setTimeText);

  return (
    <div
      className={`sentenceContainer ${
        shortDelay ? "afterShortDelay1" : "twoSecDelay"
      }`}
    >
      <img src={BotImage} alt="bot" className="botAvatar" />
      <div>
        <p className="sentence">{text}</p>
        <p className="time">{`Pola, ${timeText}`}</p>
      </div>
    </div>
  );
}
