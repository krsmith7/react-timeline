import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';
import data from '../data/timeline.json';

const Timeline = () => {
  const events = data.events;

  const eventCollection = events.map((event, i) => {
    return <TimelineEvent key={i} tweeter={event.person} status={event.status} time={event.timeStamp} />
  });

  return (
    <section>
      {eventCollection}
    </section>
  );
}

export default Timeline;
