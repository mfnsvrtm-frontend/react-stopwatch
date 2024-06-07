import { useEffect, useState } from 'react';

interface StopwatchProps {
  isRunning?: boolean
}

const Stopwatch = ({ isRunning = false }: StopwatchProps): React.ReactNode => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (!isRunning)
      return;

    const id = setInterval(() => setTime(prev => prev + 1000), 1000);
    return () => clearInterval(id);
  }, [isRunning])

  const { seconds, minutes, hours } = msToDuration(time);

  return (
    `${hours}:${minutes}:${seconds}`
  );
};

const msToDuration = (milliseconds: number) => {
  const totalSeconds = milliseconds / 1000;
  const totalMinutes = totalSeconds / 60;
  const totalHours = totalMinutes / 60;
  const totalDays = totalHours / 24;

  return {
    seconds: Math.floor(totalSeconds % 60).toString().padStart(2, '0'),
    minutes: Math.floor(totalMinutes % 60).toString().padStart(2, '0'),
    hours: Math.floor(totalHours % 24).toString().padStart(2, '0'),
    days: Math.floor(totalDays)
  }
}

export default Stopwatch;