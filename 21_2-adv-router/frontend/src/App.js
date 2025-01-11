import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./pages/Home";
import EventsPage, { loader as eventsLoader } from "./pages/Events";
import EventDetailPage from "./pages/EventDetail";
import EditEventPage from "./pages/EditEvent";
import NewEventPage from "./pages/NewEvent";
import RootPage from "./pages/Root";
import EventsRoot from "./pages/EventsRoot";

const router = createBrowserRouter([
  {
    id: '/',
    element: <RootPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'events',
        element: <EventsRoot />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          { path: 'new', element: <NewEventPage/> },
          { path: ':id', element: <EventDetailPage /> },
          { path: ':id/edit', element: <EditEventPage /> },
        ]
      },
    ]
  }
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
