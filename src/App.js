import React, { Component } from 'react';
import './App.css';
import timelineData from './data/timeline.json';
import TimelineEvent from './components/TimelineEvent';
import Timeline from './components/Timeline';

class App extends Component {
  const profileOf = timelineData["person"];
  const eventsTimeline = timelineData["events"];
  render() {
    // timelineData =>
    // {person: "Ada Lovelace", events: Array(6)}

    //eventsTimeline =>
    // [{…}, {…}, {…}, {…}, {…}, {…}]

    // const eventCollection = eventsTimeline.map((event, i) => {
    const eventCollection = () => {
      return <Timeline tweets={App.eventsTimeline} />
    };
    console.log(eventCollection);

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Timeline for profileOf</h1>
        </header>
        <main className="App-main">
          <p><Timeline /></p>
        </main>
      </div>
    );
  }
}

export default App;
