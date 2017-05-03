import React from 'react';

const Event = (props) => {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.date}</td>
      <td>{props.venue.name}</td>
      <td>{props.venue.city}</td>
      <td>{props.venue.state}</td>
      <td>Action</td>
    </tr>
  );
};

export default Event;