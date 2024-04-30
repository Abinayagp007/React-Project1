// import React, { useState, useEffect, useMemo } from "react";
// import { Calendar } from 'react-calendar';

// import {  Button } from "@mui/material";
// import { useLocation, useNavigate } from "react-router-dom";

// const Calendartwo = () => {
//   const navigate = useNavigate();

//   const [events, setEvents] = useState([]);
//   const [selectedDate, setSelectedDate] = useState(new Date());


//   useEffect(() => {
//     fetch("./temple-events.json")
//       .then((response) => response.json())
//       .then((data) => setEvents(data));
//   }, []);

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };

//   const handleClick = () => {
//     navigate(`/events/${selectedDate.getDate()}`,{replace: true});
    
//   };

//   return (
//     <div>
//       <Calendar
//         value={selectedDate}
//         onChange={handleDateChange}
//       />
//       <Button onClick={handleClick}>View Event Details</Button>
//     </div>
//   );
// };

// export default Calendartwo;




import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';

// import CalendarComponentt from './CalendarComponent';
import TempleEvents from './TempleEvents';

const Calendar = () => {
  const templeEvents = [
    {
      id: 1,
      templeName: 'Tirumala Venkateswara Temple',
      eventName: 'Brahmotsavam',
      eventDate: '2023-09-27',
      eventTime: '06:00 AM - 06:00 PM',
    },
    {
      id: 2,
      templeName: 'Meenakshi Amman Temple',
      eventName: 'Navaratri',
      eventDate: '2023-10-07',
      eventTime: '09:00 AM - 06:00 PM',
    },
    {
      id: 3,
      templeName: 'Shirdi Sai Baba Temple',
      eventName: 'Guru Poornima',
      eventDate: '2023-07-04',
      eventTime: '06:00 AM - 12:00 AM',
    },
  ];

  return (
    // <Router>
    //   <div>
    //     <CalendarComponentt templeEvents={templeEvents} />
    //     <Route path="/temple-events/:date">
    //       <TempleEventstwo templeEvents={templeEvents} />
    //     </Route>
    //   </div>
    // </Router>
    <CalendarComponentt templeEvents={templeEvents}/>
  );
};

const CalendarComponentt = ({ templeEvents }) => {
  const [selectedDate, setSelectedDate] = React.useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <Calendar onChange={handleDateChange} value={selectedDate} />
      {selectedDate && (
        <NavLink to={`/temple-events/${selectedDate.toLocaleDateString()}`}>
          View Temple Events
        </NavLink>
      )}
    </div>
  );
};

const TempleEventstwo = ({ templeEvents }) => {
  return (
    <div>
      <h1>Temple Events</h1>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Temple Name</TableCell>
              <TableCell>Event Name</TableCell>
              <TableCell>Event Date</TableCell>
              <TableCell>Event Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {templeEvents.map((templeEvent) => (
              <TableRow key={templeEvent.id}>
                <TableCell>{templeEvent.templeName}</TableCell>
                <TableCell>{templeEvent.eventName}</TableCell>
                <TableCell>{templeEvent.eventDate}</TableCell>
                <TableCell>{templeEvent.eventTime}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Calendar;

