import { useRouter } from 'next/router';
import EventContent from '../../components/event-detail/event-content';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';

import { getEventById } from '../../dummydata';

function SomeId() {
  const router = useRouter();
  const id = router.query.id;
  const event = getEventById(id);

  if (!id) return null;
  if (event === undefined) {
    return <p>No event found!</p>;
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
}

export default SomeId;
