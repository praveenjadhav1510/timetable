import React, { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faObjectUngroup, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Timetable = ({ schedule }) => {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const getDayOfWeek = () => {
    const now = new Date();
    return days[now.getDay()];
  };

  const [currentDay, setCurrentDay] = useState(getDayOfWeek());
  const handleDayChange = (day) => {
    setCurrentDay(day);
  };

  const renderSchedule = (day) => {
    if (day === "Sunday") {
      return <h2 className='head'>ENJOY YOUR SUNDAY</h2>;
    }

    const daySchedule = schedule[day];
    return (
      <div className='main'> 
        <h2>{day} <FontAwesomeIcon icon={faObjectUngroup} /></h2>
        {Object.keys(daySchedule).map((time) => (
          <div key={time+day}>
            <strong>{time}:</strong> {daySchedule[time]}
          </div>
        ))}
        <p>How to reach me <a href="mailto:praveenjadhav1510@gmail.com?subject=Want%20to%20Collaborate%20for%20Future%20Projects&body=%3C--Your%20details--%3E"> praveenjadhav1510@gmail.com <FontAwesomeIcon icon={faEnvelope} /></a>
        </p>
      </div>
    );
  };

  return (
    <div>
    <h1 className='head'>Daily Timetable {new Date().toLocaleDateString()} <FontAwesomeIcon icon={faCalendarDays} /></h1>
      <div className='days'>
        {days.map((day) => (
          <button key={day} onClick={() => handleDayChange(day)}> {day}</button>
        ))}
      </div>
      {renderSchedule(currentDay)}
    </div>
  );
};

export default Timetable;
