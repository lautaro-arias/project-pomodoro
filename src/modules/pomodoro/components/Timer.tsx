import React, { useState, useEffect,useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear ,faRepeat } from '@fortawesome/free-solid-svg-icons';

import Controls from './Controls';

const Timer: React.FC = () => {
  const [work, setWork] = useState(1500); 
  //const [break, setbreak] = useState(300); 
  //const [isActiveBreak, setIsActiveBreak] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null)


  useEffect(() => {
    if (isActive && work > 0) {
      intervalRef.current = setInterval(() => {
        setWork(prevWork => prevWork - 1);
      }, 1000);
    } else if (work === 0) {
      if (intervalRef.current !== null) { 
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current !== null) { 
        clearInterval(intervalRef.current);
      }
    };
  }, [isActive, work]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setWork(1500);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const working = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${working.toString().padStart(2, '0')}`;
  };

  const updateWorkTime = (newWorkTime: number) => {
      if(newWorkTime > 90){
          alert("Ingresa un valor correcto dentro de los 90 minutos") 
          return  
      } setWork(newWorkTime * 60);
  };

  return (
    <>
    <div className="container">
        <div className="app-container">
          <input type="text" className="app-header" value="Pomodoro" />
            <div className="clocks">
              <ul className="clock-list">
                  <li  className="activeLi"  data-tab-target="#pomodoro">Work</li>
                  <li  className="activeLi"    data-tab-target="#short">Break</li>
              </ul>
            </div>
            <div className="clocks-container">
              <div id="pomodoro" data-tab-content>
                <span className="time-left">
                  <span id="pomodoro-minutes">{ formatTime(work) }</span>
                  :
                  <span id="pomodoro-swork">00</span>
                </span>
                <button  className="button" onClick={ toggleTimer }>{ isActive ? 'Pause' : 'Start' }</button>
                <button  className="button-return"onClick={ resetTimer }>
                      <FontAwesomeIcon
                        icon={faRepeat}
                        style={{ color: "#ffffff" }}
                      />
              </button>
              </div>
            </div>
            <div className="settings">
               <button type="button"  data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                  <FontAwesomeIcon icon={ faGear }  style={ { color: "#ffffff", } } />
                </button>
            </div>
          </div>
          <Controls updateWorkTime={ updateWorkTime }  
          />
      </div>
    </>




  );
};

export default Timer;
