import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';
import data from '../data/timeline.json';

// const Timeline = (props) => {
//   const events = props.events;
//
//   const eventCollection = events.map((event, i) => {
//     return <TimelineEvent key={i} tweeter={event.person} status={event.status} time={event.timeStamp} />
//   });
//
//   return (
//     <section className="timeline">
//       {eventCollection}
//     </section>
//   );
// }
//
// export default Timeline;

class Timeline extends React.Component {
  render() {
  const events = this.props.events;

  const eventCollection = events.map((event, i) => {
    return <TimelineEvent key={i} tweeter={event.person} status={event.status} time={event.timeStamp} />
  });

  return (
    <section className="timeline">
      {eventCollection}
    </section>
  );
}
}
export default Timeline;
