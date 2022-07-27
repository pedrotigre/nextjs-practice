import Button from '../ui/button';
import classes from './event-item.module.css';
import AddressIcon from '../icons/address-icon';
import ArrowRight from '../icons/arrow-right-icon';
import DateIcon from '../icons/date-icon';

function EventItem(props) {
  const { item } = props;
  const exploreLink = `/events/${item.id}`;
  return (
    <li className={classes.item}>
      <img src={item.image} alt={item.title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{item.title}</h2>
          <div className={classes.date}>
            <time>
              <DateIcon />
              <strong>Date:</strong> {item.date}
            </time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{item.location}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={classes.icon}>
              <ArrowRight />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
