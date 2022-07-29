// import { getFeaturedEvents } from '../dummydata';
import EventList from '../components/events/event-list';
import clientPromise, { getFeaturedData } from '../util/api-mongodb';

function HomePage(props) {
  const { isConnected, data } = props;
  // console.log(isConnected, data);

  // getting data from mongodb

  const featuredEvents = data;

  return (
    <>
      <EventList items={featuredEvents} />
    </>
  );
}

export async function getStaticProps(context) {
  try {
    const client = await clientPromise;

    const data = await getFeaturedData(client);

    return {
      props: { data, isConnected: true },
      revalidate: 3600,
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
}

export default HomePage;
