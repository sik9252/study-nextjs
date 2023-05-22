import { getAllEvents } from "../../dummy-data";

/** components */
import EventList from "../../components/events/EventList";

function AllEventsPage() {
  const eventLists = getAllEvents();

  return (
    <div>
      <EventList items={eventLists} />
    </div>
  );
}

export default AllEventsPage;
