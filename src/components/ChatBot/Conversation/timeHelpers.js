import * as dayjs from "dayjs";

export function updateTime(startTime, setTimeText) {
  const oneMinute = 60 * 1000;

  setInterval(() => {
    const currentTime = dayjs();
    const diffMinutes = currentTime.diff(startTime, "minutes");
    const diffHours = currentTime.diff(startTime, "hours");
    const diffDays = currentTime.diff(startTime, "days");
    setTimeText(
      diffDays > 0
        ? `${diffDays} days ago`
        : diffHours > 0
        ? `${diffMinutes} hours ago`
        : diffMinutes > 0
        ? `${diffMinutes} minutes ago`
        : "Just now"
    );
  }, oneMinute);
}
