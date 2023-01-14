import { XMarkIcon } from "@heroicons/react/24/solid";

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
      <XMarkIcon className="xIcon" onClick={close} />
      <div className="topSection">
        <p className="chatTitle">Chat</p>
      </div>
      <div className="conversationContainer">
        <div className="botSentence sentence1">
          <img src="/bot.png" alt="bot" className="botAvatar"></img>
          <p className="sentence">
            Hey there my name is Pal and I will be following you 👀
          </p>
        </div>
        <div className="botSentence sentence2">
          <img src="/bot.png" alt="bot" className="botAvatar"></img>
          <p className="sentence">Just for fun 😬</p>
        </div>
      </div>
    </div>
  );
}
