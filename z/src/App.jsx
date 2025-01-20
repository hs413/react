import {createBrowserRouter, Navigate, RouterProvider,} from 'react-router-dom';

import Events from './components/Events/Events.jsx';
import EventDetails from './components/Events/EventDetails.jsx';
import NewEvent from './components/Events/NewEvent.jsx';
import EditEvent, { loader as editEventLoader, action as editEventAction } from './components/Events/EditEvent.jsx';
import {QueryClientProvider} from "@tanstack/react-query";
import {queryClient} from "./util/http.js";

function App() {
  return (
    <div>aa</div>
  )
}

export default App;
