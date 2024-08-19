
import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timerID); // Nettoyage pour éviter les fuites de mémoire
  }, []);

  return (
    <div className='clock-container' >
      <h1 className='clock-time' >{time.toLocaleTimeString()}</h1>
    </div>
  

  );
};

export default Clock;