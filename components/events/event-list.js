import EventItem from './event-item';
import classes from './event-list.module.css';

function EventList(props) {
  const { items } = props;

  if (!items) {
    return <p>Loading...</p>;
  } else if (items.length === 0) {
    return <p>No event found!</p>;
  }

  return (
    <ul className={classes.list}>
      {items.map((item) => (
        <EventItem item={item} key={item.id} />
      ))}
    </ul>
  );
}

export default EventList;
