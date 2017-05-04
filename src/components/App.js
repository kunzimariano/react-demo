//@ts-check
import React, { Component } from 'react';
import './App.css';
//import EventsPage from './events/EventsPage';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <p>Header here</p>
        {/*<EventsPage />*/}
        {this.props.children}
      </div>
    );
  }
}

export default App;
