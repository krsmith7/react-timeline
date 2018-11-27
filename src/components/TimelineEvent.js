import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  // Fill in your code here


  return(
    <section className = "timelineevent">
      <Timestamp />
      <ul>
        <li>Name: {props.tweeter}
        </li>
      </ul>
    </section>
  );
};

export default TimelineEvent;
