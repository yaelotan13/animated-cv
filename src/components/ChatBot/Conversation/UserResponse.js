import { UserCircleIcon } from "@heroicons/react/24/solid";

export default function UserResponse({ text }) {
  return (
    <div className="sentenceContainer userSentence immediateDelay">
      <UserCircleIcon className="userIcon" />
      <div>
        <p className="sentence">{text}</p>
        <p className="time">You. Just now</p>
      </div>
    </div>
  );
}
