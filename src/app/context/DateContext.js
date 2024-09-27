
"use client"; 

import React, { createContext, useContext, useState } from 'react';


const DateContext = createContext();


export const useDateContext = () => {
  const context = useContext(DateContext);
  if (!context) {
    throw new Error('useDateContext must be used within a DateProvider');
  }
  return context;
};


export const DateProvider = ({ children }) => {
  const [recurrence, setRecurrence] = useState('daily');
  const [everyX, setEveryX] = useState(1);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [selectedDaysOfWeek, setSelectedDaysOfWeek] = useState([]);
  const [nthDayOfMonth, setNthDayOfMonth] = useState(null);

  const value = {
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
  };

  return <DateContext.Provider value={value}>{children}</DateContext.Provider>;
};
