import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  // Fill in your code here

  return(
    <section className="timeline-event">

        <p className="event-person"> {props.tweeter}
        </p>
        <p className="event-status"> {props.status}
        </p>
        <p className="event-time">
          <Timestamp time={props.time} />
        </p>

    </section>
  );
};

export default TimelineEvent;
