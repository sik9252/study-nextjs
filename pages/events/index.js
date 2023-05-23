import { useRouter } from "next/router";
import { getAllEvents } from "../../dummy-data";

/** components */
import EventList from "../../components/events/EventList";
import EventSearch from "../../components/events/EventSearch";

function AllEventsPage() {
  const eventLists = getAllEvents();
  const router = useRouter();

  /** 입력한 년도와 월을 바탕으로 해당되는 이벤트만을 보여주는 페이지로 이동한다 */
  const findEventsHandler = (year, month) => {
    const fullPath = `/events/search/${year}-${month}`;
    router.push(fullPath);
  };

  return (
    <div>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={eventLists} />
    </div>
  );
}

export default AllEventsPage;
