import {Link} from "react-router-dom";

const DUMMY_EVENTS = [
  { id: 'e1', title: 'E 1'},
  { id: 'e2', title: 'E 2'},
]

function EventsPage() {
  return (
      <>
        <h1>EventsPage</h1>
        {DUMMY_EVENTS.map(event => (
            <li key={event.id}>
              <Link to={event.id}>{event.title}</Link>
            </li>
        ))}
      </>
  )
}

export default EventsPage;