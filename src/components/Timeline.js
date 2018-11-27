import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  const events = props["tweets"];
  // const profileOf = timelineData["person"];
  // console.log(events);
  // console.log(props);

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
