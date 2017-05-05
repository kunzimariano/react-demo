//@ts-check
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <ul className="nav nav-tabs">
          <li><a href="#all">All Events</a></li>
          <li><a href="#upcoming">Upcoming Events</a></li>
          <li><a href="#local">Local Events</a></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

export default App;
