import {Link, useNavigate, useParams} from 'react-router-dom';

import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import {useQuery} from "@tanstack/react-query";
import {fetchEvent} from "../../util/http.js";
import LoadingIndicator from "../UI/LoadingIndicator.jsx";

export default function EditEvent() {
  const navigate = useNavigate();
  const params = useParams();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ['events', params.id],
    queryFn: ({ signal }) => fetchEvent({ signal, id: params.id }),
  })

  let content

  if (isPending) {
    content = (
        <div className="center" >
          <LoadingIndicator />
        </div>
    )
  }

  if (data) {
    content = (
        <EventForm inputData={data} onSubmit={handleSubmit}>
          <Link to=".." className="button-text">
            Cancel
          </Link>
          <button type="submit" className="button">
            Update
          </button>
        </EventForm>
    )
  }

  function handleSubmit(formData) {}

  function handleClose() {
    navigate('../');
  }

  return (
    <Modal onClose={handleClose}>
      {content}
    </Modal>
  );
}
