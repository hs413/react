import EventsList from '../components/EventsList';
import {useLoaderData} from "react-router-dom";

function EventsPage() {
  const events = useLoaderData();

  return <EventsList events={events}/>

}

export default EventsPage;

export async function loader() {
  const response = await fetch('http://localhost:8080/events');
  if (!response.ok) {
    throw new Response(JSON.stringify({ message: 'Could not fetch events'}), {status: 500})
  } else {
    const resData = await response.json();
    return resData.events;
  }
}