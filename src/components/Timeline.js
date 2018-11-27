import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';
import timelineData from '../data/timeline.json';

const Timeline = () => {
  // Fill in your code here
  const events = timelineData["events"];
  const profileOf = timelineData["person"];

  const eventCollection = events.map((event, i) => {
    return <TimelineEvent key={i} tweeter={profileOf} tweets={event.person} />
  });

  return (
    <section>
      {eventCollection}
    </section>
  );
}

export default Timeline;
