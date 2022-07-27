import { getAllEvents } from '../../dummydata';
import EventList from '../../components/events/event-list';
import EventSearch from '../../components/events/event-search';
import { useState } from 'react';

function Events() {
  const [events, setEvents] = useState(getAllEvents());
  const showFiltered = (eventsFiltered) => {
    setEvents(eventsFiltered);
  };

  return (
    <>
      <EventSearch showFiltered={showFiltered} />
      <EventList items={events} />
    </>
  );
}

export default Events;
