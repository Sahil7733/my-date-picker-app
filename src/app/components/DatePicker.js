
"use client"; 

import React from 'react';
import { useDateContext } from '../context/DateContext';  
const DatePicker = () => {
 
  const {
    recurrence,
    setRecurrence,
    everyX,
    setEveryX,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    selectedDaysOfWeek,
    setSelectedDaysOfWeek,
    nthDayOfMonth,
    setNthDayOfMonth,
  } = useDateContext();

  const handleRecurrenceChange = (e) => setRecurrence(e.target.value);
  const handleEveryXChange = (e) => setEveryX(Number(e.target.value));
  const handleStartDateChange = (e) => setStartDate(new Date(e.target.value));
  const handleEndDateChange = (e) => setEndDate(new Date(e.target.value));

  const handleSelectedDaysOfWeekChange = (e) => {
    const value = e.target.value;
    if (selectedDaysOfWeek.includes(value)) {
      setSelectedDaysOfWeek(selectedDaysOfWeek.filter(day => day !== value));
    } else {
      setSelectedDaysOfWeek([...selectedDaysOfWeek, value]);
    }
  };

  const handleNthDayOfMonthChange = (e) => setNthDayOfMonth(e.target.value);

  return (
    <div>
      <h2>Date Picker with Recurrence</h2>

      {/* Start and End Date */}
      <div>
        <label>Start Date: </label>
        <input type="date" value={startDate.toISOString().substr(0, 10)} onChange={handleStartDateChange} />
      </div>

      <div>
        <label>End Date: </label>
        <input type="date" value={endDate ? endDate.toISOString().substr(0, 10) : ''} onChange={handleEndDateChange} />
      </div>

      {/* Recurrence Options */}
      <div>
        <label>Recurrence: </label>
        <select value={recurrence} onChange={handleRecurrenceChange}>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>

      {/* Custom Recurrence Pattern */}
      {recurrence === 'weekly' && (
        <div>
          <label>Specific Days of the Week:</label>
          {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day) => (
            <label key={day}>
              <input
                type="checkbox"
                value={day}
                checked={selectedDaysOfWeek.includes(day)}
                onChange={handleSelectedDaysOfWeekChange}
              />
              {day}
            </label>
          ))}
        </div>
      )}

      {recurrence === 'monthly' && (
        <div>
          <label>Nth Day of the Month: </label>
          <input type="number" value={nthDayOfMonth || ''} onChange={handleNthDayOfMonthChange} min="1" max="31" />
        </div>
      )}

      {/* Preview */}
      <div>
        <h3>Selected Recurrence</h3>
        <p>Recurrence: {recurrence}</p>
        <p>Start Date: {startDate.toDateString()}</p>
        {endDate && <p>End Date: {endDate.toDateString()}</p>}
        {recurrence === 'weekly' && <p>Days of Week: {selectedDaysOfWeek.join(', ')}</p>}
        {recurrence === 'monthly' && <p>Nth Day: {nthDayOfMonth}</p>}
      </div>
    </div>
  );
};

export default DatePicker;
