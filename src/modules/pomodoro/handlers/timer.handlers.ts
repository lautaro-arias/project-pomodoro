import { useState, useEffect, useRef } from 'react';

const TimerHandlers = () => {

  const [work, setWork] = useState(1500); 
  const [breakTime, setBreakTime] = useState(300); 
  const [isActive, setIsActive] = useState(false);
  const [isWorking, setIsWorking] = useState(true); 
  const intervalRef = useRef<NodeJS.Timeout >();

  useEffect(() => {
    if (isActive) { 
      intervalRef.current = setInterval(() => {
        if (isWorking) {
          setWork(prevWork => prevWork - 1);
        } else {
          setBreakTime(prevBreak => prevBreak - 1);
        }
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    if (isWorking && work === 0) {
      setIsWorking(false);
      alert("Es hora de un descanso haz click en aceptar");
      setBreakTime(300); 
    } else if (!isWorking && breakTime === 0) {
      setIsWorking(true);
      alert("Es hora de trabajar  haz click en aceptar");
      setWork(1500); 
    }
  
    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isActive, isWorking, work, breakTime]);
  

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setWork(1500);
    setBreakTime(300);
    setIsWorking(true);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };
  
  return { 

      work,
      setWork,
      setBreakTime,
      breakTime,
      isActive,
      isWorking,
      toggleTimer,
      resetTimer,
      formatTime,
  };
};

export default TimerHandlers;