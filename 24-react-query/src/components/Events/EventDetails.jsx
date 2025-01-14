import {Link, Outlet, useNavigate, useParams} from 'react-router-dom';

import Header from '../Header.jsx';
import {useMutation, useQuery} from "@tanstack/react-query";
import {deleteEvent, fetchEvent, queryClient} from "../../util/http.js";
import ErrorBlock from "../UI/ErrorBlock.jsx";

export default function EventDetails() {
  const params = useParams();
  const id = params.id;
  const navigate = useNavigate();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ['events', id],
    queryFn: ({ signal }) => fetchEvent({ signal, id })
  })

  let content;

  if (isPending) {
    content = (
        <div id="event-details-content" className="center">
          <p>Fetching event data...</p>
        </div>
    )
  }

  if (isError) {
    content = (
        <div id="event-details-content" className="center">
          <ErrorBlock
              title="Failed to load event"
              message={error.info?.message || 'failed to fetch event data' }
          />
        </div>
    )
  }

  if (data) {
    content = (
        <>
          <header>
            <h1>{data.title}</h1>
            <nav>
              <button onClick={handleDelete}>Delete</button>
              <Link to="edit">Edit</Link>
            </nav>
          </header>
          <div id="event-details-content">
            <img src={`http://localhost:3000/${data.image}`} alt=""/>
            <div id="event-details-info">
              <div>
                <p id="event-details-location">{data.location}</p>
                <time
                    dateTime={`Todo-DateT$Todo-Time`}>{data.date} @ {data.time}</time>
              </div>
              <p id="event-details-description">{data.description}</p>
            </div>
          </div>
        </>
    )
  }

  const {mutate} = useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['events']})
      navigate('/events')
    }
  })

  function handleDelete() {
    mutate({id})
  }

  return (
      <>
        <Outlet/>
        <Header>
          <Link to="/events" className="nav-item">
            View all Events
          </Link>
        </Header>

        <article id="event-details">

          {content}
        </article>
      </>
  );
}
