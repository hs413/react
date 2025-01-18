import EventsNavigation from "../components/EventsNavigation";
import {Outlet} from "react-router-dom";

function EventRootPage() {
  return (
      <>
        <EventsNavigation />
        <Outlet/>
      </>
  )
}

export default EventRootPage;