import { useRouter } from 'next/router';
import EventContent from '../../components/event-detail/event-content';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import clientPromise, { getDataById } from '../../util/mongodb';
// import { getEventById } from '../../dummydata';

function SomeId(props) {
  const router = useRouter();
  const id = router.query.id;

  const { data } = props;
  const event = data;

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

export async function getServerSideProps(context) {
  const { params } = context;

  try {
    const client = await clientPromise;

    const data = await getDataById(client, params.id);

    return {
      props: { data, isConnected: true },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
}

export default SomeId;
