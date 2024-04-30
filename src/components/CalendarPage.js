// import React from 'react';
// import { Link } from 'react-router-dom';

// const CalendarPage = () => {

//   const events = [
//     {
//       date: '2022-12-01',
//       title: 'Event 1',
//       description: 'Description for Event 1',
//     },
//     {
//         date: '2023-01-01',
//         title: 'Event 2',
//         description: 'Description for Event 2',
//       },
//     {
//       date: '2022-12-05',
//       title: 'Event 3',
//       description: 'Description for Event 3',
//     },
//     // Add more events as needed
//   ];

//   // Assuming your events data is available as an array called "events"
//   const uniqueDates = [...new Set(events.map((event) => event.date))];

//   return (
//     <div>
//       <h1>Calendar</h1>
//       <ul>
//         {uniqueDates.map((date) => (
//           <li key={date}>
//             <Link to={`/events/${date}`}>{date}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CalendarPage;







import React, { useState } from 'react';
import {  Box, Button,Typography } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Calendar from 'react-calendar';
import Footer from './Footer';
import Header from './Header';

const events = [
  {
    date: '2022-12-01',
    title: 'Event 1',
    description: 'Description for Event 1',
  },
  {
    date: '2022-12-05',
    title: 'Event 2',
    description: 'Description for Event 2',
  },
  {
    date: '2023-09-09',
    title: 'Event 3',
    description: 'Description for Event 3',
  },
  // Add more events as needed
];

const CalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  // const history = useHistory();
  const navigate = useNavigate();
  const events = [
    {
      date: '10-10-2023',
      title: 'Event 1',
      description: 'Description for Event 1',
    },
    {
      date: '11-11-2023',
      title: 'Event 2',
      description: 'Description for Event 2',
    },
    {
      date: '09-09-2023',
      title: 'Event 3',
      description: 'Description for Event 3',
    },
    // Add more events as needed
  ];

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const handleViewEventsClick = () => {
    if (selectedDate) {
      navigate(`/events/${selectedDate}`);
    }
  };

  return (
    
//     <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
// //       <Box sx={{ textAlign: 'center' }}>
// //         <Typography variant="h4" gutterBottom>
// //           Temple Events Calendar
// //         </Typography>
// //         <Calendar
//           date={selectedDate}
//           onDateChange={handleDateClick}
//           renderDay={(day, _value) => (
//             <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//               <Typography variant="body1">{day.day}</Typography>
//               {eventsData[day.date] && (
//                 <Typography variant="body2" color="primary">
//                   {eventsData[day.date]}
//                 </Typography>
//               )}
//             </Box>
<div>
  <Header/>
<div>
      <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh', marginTop:"0px" }}>
     <Box style={{ textAlign: 'center' }}>
    <Typography variant="h4" color="navy" gutterBottom>
         Temple Events - Calendar
       </Typography>
      <Calendar
        onClickDay={handleDateClick}
        renderDay={(day, selectedDate, isInCurrentMonth, dayComponent) => (
          <Box style={{ display: 'flex', justifyContent: 'center' }}>
          {day} {selectedDate} {isInCurrentMonth}{dayComponent}
          </Box>
          
        )
      }
      />
     
      {selectedDate && (
        <Button onClick={handleViewEventsClick} variant="contained" style={{marginTop:"10px"}}>
          View Events
        </Button>
      )}
    </Box>
    </Box>
    </div>
    <Footer/>
    </div>
  );
  
};

export default CalendarPage;


// import React, { useState } from 'react';
// import { Calendar} from 'react-calendar';
// import { Typography,Box } from '@mui/material';

// const eventsData = {
//   '2022-12-25': 'Christmas',
//   '2022-12-31': 'New Year\'s Eve',
//   // Add more events here...
// };

// const CalendarPage = () => {
//   const [selectedDate, setSelectedDate] = useState(null);

//   const handleDateClick = (date) => {
//     setSelectedDate(date);
//   };

//   return (
//     <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//       <Box sx={{ textAlign: 'center' }}>
//         <Typography variant="h4" gutterBottom>
//           Temple Events Calendar
//         </Typography>
//         <Calendar
//           date={selectedDate}
//           onDateChange={handleDateClick}
//           renderDay={(day, _value) => (
//             <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//               <Typography variant="body1">{day.day}</Typography>
//               {eventsData[day.date] && (
//                 <Typography variant="body2" color="primary">
//                   {eventsData[day.date]}
//                 </Typography>
//               )}
//             </Box>
//           )}
//         />
//       </Box>
//     </Box>
//   );
// };

// export default CalendarPage;