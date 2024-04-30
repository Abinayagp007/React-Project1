// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// const TempleEvents = ({ templeEvents }) => {
//   const { date } = useParams();
//   const [filteredTempleEvents, setFilteredTempleEvents] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // Check if the templeEvents array is not undefined
//     if (templeEvents) {
//       const filteredTempleEvents = templeEvents.filter((templeEvent) => {
//         return templeEvent.eventDate === date;
//       });

//       setFilteredTempleEvents(filteredTempleEvents);
//       setIsLoading(false);
//     }
//   }, [templeEvents, date]);

//   // Render the loading indicator or event details
//   if (isLoading) {
//     return <div>Loading temple events...</div>;
//   } else {
//     return (
//       <div>
//         <h1>Temple Events</h1>
//         <TableContainer>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell>Temple Name</TableCell>
//                 <TableCell>Event Name</TableCell>
//                 <TableCell>Event Date</TableCell>
//                 <TableCell>Event Time</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {filteredTempleEvents.map((templeEvent) => (
//                 <TableRow key={templeEvent.id}>
//                   <TableCell>{templeEvent.templeName}</TableCell>
//                   <TableCell>{templeEvent.eventName}</TableCell>
//                   <TableCell>{templeEvent.eventDate}</TableCell>
//                   <TableCell>{templeEvent.eventTime}</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </div>
//     );
//   }
// };




// export default TempleEvents;


import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';

const TempleEvents = ({ templeEvents }) => {
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

export default TempleEvents;
