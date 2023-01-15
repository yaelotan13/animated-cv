import * as dayjs from "dayjs";

export function updateTime(startTime, setTimeText) {
  const oneMinute = 60 * 1000;

  setInterval(() => {
    const currentTime = dayjs();
    const diffMinutes = currentTime.diff(startTime, "minutes");
    const diffHours = currentTime.diff(startTime, "hours");
    const diffDays = currentTime.diff(startTime, "days");

    const humanize = (diff, entity) => {
      return diff < 2
        ? `${entity === "hour" ? "an" : "a"} ${entity} ago`
        : `${diff} ${entity}s ago`;
    };

    setTimeText(
      diffDays > 0
        ? humanize(diffDays, "day")
        : diffHours > 0
        ? humanize(diffHours, "hour")
        : diffMinutes > 0
        ? humanize(diffMinutes, "minute")
        : "just now"
    );
  }, oneMinute);
}
