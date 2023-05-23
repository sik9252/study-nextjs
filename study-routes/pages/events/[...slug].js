import { Fragment } from "react";
import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";

/** components */
import EventList from "../../components/events/EventList";
import ResultsTitle from "../../components/events/ResultsTitle";
import Button from "../../components/ui/Button";
import ErrorAlert from "../../components/ui/ErrorAlert";

function FilteredEventsPage() {
  const router = useRouter();
  const filteredDate = router.query.slug;

  /** url 값이 undefined인 경우 */
  if (!filteredDate) {
    return <h1>이벤트 로딩중...</h1>;
  }

  /** url에서 파싱한 year, month 값을 코드에서 사용할 수 있게 가공한다 */
  // 문자열 앞에 +를 붙여 숫자형으로 변환
  const numYear = +filteredDate[1].split("-")[0];
  const numMonth = +filteredDate[1].split("-")[1];

  // 필터링 입력값 유효성 검사
  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <Fragment>
        <ErrorAlert>
          <h1>잘못된 필터링입니다. 입력 값을 확인해주세요!</h1>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">메인으로 돌아가기</Button>
        </div>
      </Fragment>
    );
  }

  /** 필터링 입력값으로 해당하는 이벤트 가져오기 */
  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  // 요청된 필터링에 대응하는 이벤트 데이터가 존재하는지 검사
  if (!filteredEvents || filteredEvents.length <= 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <h1>이벤트가 존재하지 않습니다!</h1>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">메인으로 돌아가기</Button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <div>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </div>
  );
}

export default FilteredEventsPage;
