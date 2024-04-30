// EventDetails.js

import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';

const events = [
  {
    id: 1,
    date: '2022-12-25',
    title: 'Christmas',
    description: 'Celebrate Christmas with family and friends.',
  },
  // Add more events here...
];

function EventDetailsthree() {
  const { eventId } = useParams();
  const event = events.find((e) => e.id === parseInt(eventId));

  if (!event) {
    return (
      <Typography variant="h6" align="center">
        Event not found.
      </Typography>
    );
  }

  return (
    <>
      <Typography variant="h4" align="center" gutterBottom>
        {event.title}
      </Typography>

      <Typography variant="body1">{event.description}</Typography>
    </>
  );
}

export default EventDetailsthree;