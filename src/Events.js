import React from 'react';
import Event from './Event';

const Events = (props) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Event Name</th>
            <th>Date</th>
            <th>Venue</th>
            <th>City</th>
            <th>State</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.events.map(event => <Event {...event} key={event.id} />)}
        </tbody>
      </table>
    </div>
  );
};

export default Events;