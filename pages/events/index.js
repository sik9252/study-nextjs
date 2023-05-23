import { getAllEvents } from "../../dummy-data";

/** components */
import EventList from "../../components/events/EventList";
import EventSearch from "../../components/events/EventSearch";

function AllEventsPage() {
  const eventLists = getAllEvents();

  return (
    <div>
      <EventSearch />
      <EventList items={eventLists} />
    </div>
  );
}

export default AllEventsPage;
