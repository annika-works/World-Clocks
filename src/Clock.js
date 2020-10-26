import React, { useState } from 'react';
import getTime from './helper/getTime';
import './styles/clock.scss';

const Clock = ({ tz, city }) => {
  const startTime = getTime(tz);
  const [time, setTime] = useState(startTime);

  setInterval(() => {
    const newTime = getTime(tz);
    setTime(newTime);
  }, 1000);

  return (
    <article className="card">
      <h3 className="time">{time}</h3>
      <h4 className="city">{city}</h4>
    </article>
  );
};

export default Clock;
