import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faRepeat } from '@fortawesome/free-solid-svg-icons';

import '../styles/timer.css'
import Controls from './Controls';
import TimerHandlers from '../handlers/timer.handlers';

const Timer: React.FC = () => {

  const{
    work,
    setWork,
    setBreakTime,
    breakTime,
    isActive,
    isWorking,
    toggleTimer,
    resetTimer,
    formatTime
  } = TimerHandlers();

  
  
  return (
    <>
      <div className="container">
        <div className="app-container">
          <div className="clocks">
            <ul className="clock-list">
              <li className="activeLi" data-tab-target="pomodoro">
                Pomodoro
              </li>
            </ul>
          </div>
          <div className="clocks-container">
            <div id="pomodoro" data-tab-content>
              <span className="time-left">
                <span id="pomodoro-minutes">{formatTime(isWorking ? work : breakTime)}</span>
              </span>
              <button className="button" onClick={toggleTimer}>
                {isActive ? 'Pausar' : 'Comenzar'}
              </button>
              <button className="button-return" onClick={resetTimer}>
                <FontAwesomeIcon icon={faRepeat} style={{ color: '#ffffff' }} />
              </button>
            </div>
          </div>
          <div className="settings">
            <button
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              <FontAwesomeIcon icon={faGear} style={{ color: '#ffffff' }} />
            </button>
          </div>
        </div>
        <Controls updateWorkTime={setWork} updateBreakTime={setBreakTime} />
      </div>
    </>
  );
};

export default Timer;
