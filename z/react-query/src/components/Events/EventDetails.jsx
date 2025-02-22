import {Link, Outlet, useNavigate, useParams} from 'react-router-dom';

import Header from '../Header.jsx';
import {useMutation, useQuery} from "@tanstack/react-query";
import {deleteEvent, fetchEvent, queryClient} from "../../util/http.js";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import Modal from "../UI/Modal.jsx";
import {useState} from "react";

export default function EventDetails() {
  const [isDeleting, setIsDeleting] = useState(false);

  const params = useParams();
  const id = params.id;
  const navigate = useNavigate();

  const {data, isPending, isError, error} = useQuery({
    queryKey: ['events', id],
    queryFn: ({signal}) => fetchEvent({signal, id})
  })

  function handleStartDelete() {
    setIsDeleting(true);
  }

  function handleStopDelete() {
    setIsDeleting(false);
  }

  function handleDelete() {
    mutate({id})
  }

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
        <ErrorBlock
            title="Failed fetch event data"
            message={error.info?.message || 'failed fetch event data'}
        />
    )
  }

  if (data) {
    content = (
        <>
          <header>
            <h1>{data.title}</h1>
            <nav>
              <button onClick={handleStartDelete}>Delete</button>
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

  const {mutate, isPending: isPendingDeletion} = useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['events'], refetchType: 'none'});
      navigate('/events')
    }
  })

  return (
      <>
        {isDeleting && (
            <Modal onClose={handleStopDelete}>
              <h2>Are you sure?</h2>
              <p>delete this event?</p>
              <div className="form-actions">
                {isPendingDeletion && <p>Deleting...</p>}
                {!isPendingDeletion && (
                    <>
                      <button onClick={handleStopDelete}
                              className="button-text">
                        Cancel
                      </button>
                      <button onClick={handleDelete} className="button">Delete
                      </button>
                    </>
                )}
              </div>
            </Modal>
        )}
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
