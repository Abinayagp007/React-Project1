// import React, { useState, useEffect } from 'react';
// import { Calendar, MuiPickersUtilsProvider, DayPicker } from '@material-ui/core';
// import DateFnsUtils from '@date-io/date-fns';

// const CalendarComponent = () => {
//   const [events, setEvents] = useState([]);
//   const [selectedDate, setSelectedDate] = useState(new Date());

//   useEffect(() => {
//     // Fetch temple events from an API or from a local JSON file
//     const fetchEvents = async () => {
//       const response = await fetch('https://api.example.com/temple-events');
//       const data = await response.json();
//       setEvents(data);
//     };

//     fetchEvents();
//   }, []);

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };

//   const renderEventDetails = () => {
//     const event = events.find((event) => event.date === selectedDate);
//     if (event) {
//       return (
//         <div>
//           <h2>{event.name}</h2>
//           <p>{event.description}</p>
//         </div>
//       );
//     } else {
//       return <p>No events scheduled for this date.</p>;
//     }
//   };

//   return (
//     <>
//     // <MuiPickersUtilsProvider utils={DateFnsUtils}>
//       <DayPicker
//         value={selectedDate}
//         onChange={handleDateChange}
//         renderDay={(day, date) => {
//           const event = events.find((event) => event.date === date);
//           if (event) {
//             return <div className="event-day">{day}</div>;
//           } else {
//             return <div className="normal-day">{day}</div>;
//           }
//         }}
//       />
//       <div className="event-details">
//         {renderEventDetails()}
//       </div>
//     // </MuiPickersUtilsProvider>
//     </>
//   );
// };

// export default CalendarComponent;



// import React, { useState, useEffect } from 'react';
//  import { Calendar } from 'react-calendar';
//  import {  Button } from '@material-ui/core'
// const CalendarComponent = ({ templeEvents }) => {
//   const [selectedDate, setSelectedDate] = useState(null);

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };

//   const randomDate = () => {
//     const randomIndex = Math.floor(Math.random() * templeEvents.length);
//     return templeEvents[randomIndex].eventDate;
//   };

//   return (
//     <div>
//       <Calendar onChange={handleDateChange} value={selectedDate} />
//       <Button onClick={randomDate}>Random Date</Button>
//       {selectedDate && (
//         <Button
//           href={`/temple-events/${selectedDate.toLocaleDateString()}`}
//           variant="contained"
//           color="primary"
//         >
//           View Temple Events
//         </Button>
//       )}
//     </div>
//   );
// };

// export default CalendarComponent;


// import React, { useState, useEffect } from 'react';
// import { Calendar as ReactCalendar } from 'react-calendar';
// import { Random } from 'react-random';
// import {  Button } from '@material-ui/core'
// const CalendarComponent = ({ templeEvents }) => {
//   const [selectedDate, setSelectedDate] = useState(null);

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };

//   const randomDate = () => {
//     const randomIndex = new Random().integer(0, templeEvents.length - 1);
//     return templeEvents[randomIndex].eventDate;
//   };

//   return (
//     <div>
//       <ReactCalendar
//         onChange={handleDateChange}
//         value={selectedDate}
//       />
//       <Button onClick={randomDate}>Random Date</Button>
//       {selectedDate && (
//         <Button
//           href={`/temple-events/${selectedDate.toLocaleDateString()}`}
//           variant="contained"
//           color="primary"
//         >
//           View Temple Events
//         </Button>
//       )}
//     </div>
//   );
// };

// export default CalendarComponent;





import React from 'react';
import {  Button } from '@material-ui/core';
// import CalendarComponent from './CalendarComponent';
import { Calendar as ReactCalendar } from 'react-calendar';
import templeEvents from './CalendarEvents';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import TempleEvents from './TempleEvents';
import CalanderEvents from './CalendarEvents';






const CalendarComponent = ({ templeEvents }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      
      <ReactCalendar
        onChange={handleDateChange}
        value={selectedDate}
      />
      {selectedDate && (
        <Button
          href={`/temple-events/${selectedDate.toLocaleDateString()}`}
          variant="contained"
          color="primary"
        >
          View Temple Events
        </Button>
      )}
    </div>
  );
};

export default CalendarComponent;
