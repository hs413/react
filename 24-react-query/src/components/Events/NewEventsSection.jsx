import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import EventItem from './EventItem.jsx';
import {useQuery} from "@tanstack/react-query";
import {fetchEvents} from "../../util/http.js";

export default function NewEventsSection() {
  const {data, isPending, isError, error} = useQuery({
    queryKey: ['events'],
    queryFn: fetchEvents,
    staleTime: 5000, // 자체 전송 전 기다릴 시간
    // gcTime: 30000 // 캐시 저장 시간
  })
  let content;

  if (isPending) {
    content = <LoadingIndicator/>;
  }

  if (isError) {
    content = (
        <ErrorBlock
            title="An error occurred"
            message={error.info?.message || 'Failed to fetch events'}
        />
    );
  }

  if (data) {
    content = (
        <ul className="events-list">
          {data.map((event) => (
              <li key={event.id}>
                <EventItem event={event}/>
              </li>
          ))}
        </ul>
    );
  }

  return (
      <section className="content-section" id="new-events-section">
        <header>
          <h2>Recently added events</h2>
        </header>
        {content}
      </section>
  );
}
