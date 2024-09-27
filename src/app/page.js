import React from 'react';
import { DateProvider } from './/context/DateContext'; 

import DatePicker from './/components/DatePicker';

const App = () => {
    return (
        <DateProvider>
            <div className="app">
                <h1>Recurring Date Picker</h1>
                <DatePicker />
            </div>
        </DateProvider>
    );
};

export default App;
