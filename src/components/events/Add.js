import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class Add extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button onClick={this.addEvent}>Add Event</button>
    );
  }

  addEvent() {
    browserHistory.push('/event/add');
  }
}

export default Add;