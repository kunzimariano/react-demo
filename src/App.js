import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { eventService } from './event-service';
import Event from './Event';
import Events from './Events';

class App extends Component {
  render() {
    //console.log(eventService);

    //eventService.get(123, res => console.log(res), err => console.log(err));

    const data = [{
      "id": 123,
      "name": "Sesame Street Live - Elmo Makes Music",
      "date": "2014-01-15T10:30:00",
      "venue": {
        "id": 111,
        "name": "Broome County Forum",
        "city": "Binghamton",
        "state": "NY"
      }
    }];

    return (
      <div className="App">
        {/*<div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>*/}

        <Events events={data} />


      </div>
    );
  }
}


export default App;
