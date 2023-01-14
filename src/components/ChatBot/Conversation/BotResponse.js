export default function BotResponse({ text }) {
  return (
    <div className="sentenceContainer afterShortDelay1">
      <img src="/bot.png" alt="bot" className="botAvatar"></img>
      <p className="sentence">{text}</p>
    </div>
  );
}
