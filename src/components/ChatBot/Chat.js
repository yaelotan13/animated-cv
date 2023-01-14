import { XMarkIcon } from "@heroicons/react/24/solid";
import Conversation from "./Conversation/Conversation";
import "./ChatBot.css";

export default function Chat({ show, close, firstShow }) {
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
          <div className="sentenceContainer twoSecDelay">
            <img src="/bot.png" alt="bot" className="botAvatar"></img>
            <div>
              <p className="sentence">
                Hey there my name is Pal ❤️ <br /> How can I help you?
              </p>
              <p className="time">Pola. Just now</p>
            </div>
          </div>
          <Conversation />
        </div>
      </div>
    </div>
  );
}
