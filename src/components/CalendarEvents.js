
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TempleEvents from './TempleEvents';
import React from 'react';
import ReactDOM from 'react-dom';
import CalendarComponent from './CalendarComponent';
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

const CalendarEvents = () => {
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
    <div>
      <CalendarComponent templeEvents={templeEvents} />
      <TempleEvents templeEvents={templeEvents} />
    </div>
  );
};

export default CalendarEvents;
