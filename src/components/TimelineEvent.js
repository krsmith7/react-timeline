import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  // Fill in your code here

  return(
    <section>
      <ul>
        <li>Name: {props.tweeter}
        </li>
        <li>Status: {props.status}
        </li>
        <li>Posted: {props.time}
        </li>
      </ul>
    </section>
  );
};

export default TimelineEvent;
