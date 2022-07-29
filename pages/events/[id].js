import { useRouter } from 'next/router';
import EventContent from '../../components/event-detail/event-content';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import LoadingIcon from '../../components/icons/loading-svg';
import clientPromise, {
  getDataById,
  getFeaturedData,
} from '../../util/api-mongodb';
// import { getEventById } from '../../dummydata';

function SomeId(props) {
  // const router = useRouter();
  // const id = router.query.id;

  const { data } = props;

  const event = data;

  if (!event) {
    return <LoadingIcon />;
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

export async function getStaticProps(context) {
  try {
    const { params } = context;
    const client = await clientPromise;

    const data = await getDataById(client, params.id);
    if (!data) return { notFound: true };

    return {
      props: { data, isConnected: true },
      revalidate: 30,
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
}

export async function getStaticPaths() {
  try {
    const client = await clientPromise;
    // const data = await getAllData(client);
    // Instead of pre-rendering all the data, I will pre-render only the featured ones
    const data = await getFeaturedData(client);
    const paths = data.map((item) => {
      return {
        params: { id: item.id },
      };
    });

    return { paths: paths, fallback: true };
  } catch (e) {
    console.error(e);
  }
}

export default SomeId;
