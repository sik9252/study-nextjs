import { Fragment } from "react";
import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";

/** components */
import EventSummary from "../../components/event-detail/EventSummary";
import EventLogistics from "../../components/event-detail/EventLogistics";
import EventContent from "../../components/event-detail/EventContent";

function EventDetailPage() {
  const router = useRouter();
  // url에서 eventId 파싱
  const eventId = router.query.eventId;
  // 파싱한 eventId를 통해 해당 이벤트의 정보를 가져옴
  const eventDetails = getEventById(eventId);

  if (!eventDetails) {
    return <h1>이벤트가 존재하지 않습니다!</h1>;
  }

  return (
    <Fragment>
      <EventSummary title={eventDetails.title} />
      <EventLogistics
        date={eventDetails.date}
        address={eventDetails.location}
        image={eventDetails.image}
        imageAlt={eventDetails.title}
      />
      <EventContent>
        <p>{eventDetails.description}</p>
      </EventContent>
    </Fragment>
  );
}

export default EventDetailPage;
