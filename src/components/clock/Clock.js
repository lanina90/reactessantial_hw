import React, {useEffect, useState} from 'react';

const Clock = () => {
  const [date, setDate] = useState(new Date())
  const [shouldUpdate, setShouldUpdate] = useState(false);

  useEffect(() => {
    const timerID = setInterval(tick, 1000);
    return () => clearInterval(timerID);
  }, [date]);

  useEffect(() => {
    if (shouldUpdate) {
      console.log('Код, который выполняется при обновлении');
      setShouldUpdate(false);
    }
  }, [shouldUpdate]);

  const tick = () => {
    setDate(new Date());
    setShouldUpdate(true);
  };

  return (
    <div>
      <h1>Привет, мир!</h1>
      <h2>Сейчас {date.toLocaleTimeString()}.</h2>
    </div>
  );
};

export default Clock;