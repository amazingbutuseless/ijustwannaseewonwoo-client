export function formatSecondsToMmss(seconds: number) {
  const humanReadable: string[] = [];

  humanReadable.push((seconds % 60).toString().padStart(2, '0'));

  const minutes = Math.floor(seconds / 60);
  humanReadable.push((minutes % 60).toString().padStart(2, '0'));

  if (minutes >= 60) {
    const hours = Math.floor(minutes / 60);
    humanReadable.push(hours.toString().padStart(2, '0'));
  }

  return humanReadable.reverse().join(':');
}

export function formatSecondsToDuration(seconds: number) {
  const duration: string[] = [];

  duration.push(`${seconds % 60}s`);

  const minutes = Math.floor(seconds / 60);
  if (minutes > 0) {
    duration.push(`${minutes % 60}m`);
  }

  const hours = Math.floor(minutes / 60);
  if (hours > 0) {
    duration.push(`${hours}h`);
  }

  return duration.reverse().join(' ');
}
