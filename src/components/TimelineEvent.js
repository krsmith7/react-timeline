import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  // Fill in your code here

  return(
    <section className="timeline-event">

        <p className="event-person">Name: {props.tweeter}
        </p>
        <p className="event-status">Status: {props.status}
        </p>
        <p className="event-time">Posted:
          <Timestamp time={props.time} />
        </p>

    </section>
  );
};

export default TimelineEvent;
