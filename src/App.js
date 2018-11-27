import React, { Component } from 'react';
import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';

class App extends Component {
  render() {
    console.log(timelineData);
    // timelineData =>
    // {person: "Ada Lovelace", events: Array(6)}
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{timelineData.person} Social Media Feed</h1>
        </header>
        <main className="App-main">
          <p><Timeline events={timelineData.events} /></p>
        </main>
      </div>
    );
  }
}

export default App;
