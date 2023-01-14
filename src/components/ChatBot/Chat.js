import { XMarkIcon } from "@heroicons/react/24/solid";
import Conversation from "./Conversation/Conversation";
import * as dayjs from "dayjs";
import "./ChatBot.css";

export default function Chat({ show, close, firstShow }) {
  const startTime = dayjs();
  return (
    <div
      className={
        firstShow
          ? "chatContainer fadeIn firstFadeIn"
          : show
          ? "chatContainer fadeIn"
          : "chatContainer fadeAway"
      }
    >
      <div className="innerContainer">
        <XMarkIcon className="xIcon" onClick={close} />
        <div className="topSection">
          <p className="chatTitle">Chat</p>
        </div>
        <div className="conversationContainer">
          <Conversation startTime={startTime} />
        </div>
      </div>
    </div>
  );
}
