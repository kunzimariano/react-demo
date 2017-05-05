import React, { Component } from 'react';
import { eventService } from './event-service';
import Events from './Events';
import AddButton from './AddButton';


class EventsPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      events: []
    };

    eventService.all(
      res => this.setState({ events: res }),
      err => console.log(err)
    );
  }

  render() {
    return (
      <div>
        <Events data={this.state.events} />
        <AddButton />
      </div>
    );
  }
}

export default EventsPage;
