const zeroPad = (num, places) => String(num).padStart(places, "0");

function humanReadable(seconds) {
  const hours = parseInt(seconds / 3600);
  const minutes = parseInt((seconds % 3600) / 60);
  const leftSeconds = parseInt((seconds % 3600) % 60);
  if (seconds < 0 || seconds > 359999) {
    return null;
  }
  if (seconds === 0) {
    return "00:00:00";
  }
  if (seconds <= 59) {
    return `00:00:${zeroPad(seconds, 2)}`;
  }
  if (seconds <= 3599 && seconds >= 60) {
    return `00:${zeroPad(minutes, 2)}:${zeroPad(leftSeconds, 2)}`;
  }
  if (seconds <= 359999 && seconds >= 3600) {
    return `${zeroPad(hours, 2)}:${zeroPad(minutes, 2)}:${zeroPad(
      leftSeconds,
      2
    )}`;
  }
}
