import React from 'react';
import { useParams } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import TempleEvents from './TempleEvents';
import Calendar from './Calander';


const EventPage = () => {
  const { date } = useParams();
  const events = [
    {
      date: '2022-12-01',
      title: 'Event 1',
      description: 'Description for Event 1',
    },
    {
        date: '2023-01-01',
        title: 'Event 2',
        description: 'Description for Event 2',
      },
      {
        date: '2023-09-09',
        title: 'Event 3',
        description: 'Description for Event 3',
      },
    {
      date: '2022-12-05',
      title: 'Event 4',
      description: 'Description for Event 4',
    },
    // Add more events as needed
  ];

  // Assuming your events data is available as an array called "events"
  const filteredEvents = events.filter((event) => event.date === date);
  console.log(filteredEvents);
  return (
    <div>
      {filteredEvents.length > 0 ? (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Description</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredEvents.map((event) => (
                <TableRow key={event.title}>
                  <TableCell>{event.date}</TableCell>
                  <TableCell>{event.title}</TableCell>
                  <TableCell>{event.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <>
        <p>No events found for the selected date.</p> 
         {/* Display a message when no events are found */}
         </>
      )}
    </div>
  );
};

export default EventPage;