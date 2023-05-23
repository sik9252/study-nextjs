import React, { useRef } from "react";

/** components */
import Button from "../ui/Button";

/** styles */
import classes from "./EventSearch.module.css";

function EventSearch(props) {
  const yearInputRef = useRef();
  const monthInputRef = useRef();

  /** 검색할 년도와 월 양식 제출 핸들러 */
  const submitHandler = (event) => {
    // 브라우저가 기본 값으로 http 요청을 시도하는 일을 방지한다
    // 즉, 새로고침되어 데이터가 유실되는 것을 방지한다
    event.preventDefault();

    const selectedYear = yearInputRef.current.value;
    const selectedMonth = monthInputRef.current.value;

    // 선택된 년도와 월을 매개변수로 events 컴포넌트의 findEventsHandler 함수를 실행한다
    props.onSearch(selectedYear, selectedMonth);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select id="year" ref={yearInputRef}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">Month</label>
          <select id="month" ref={monthInputRef}>
            <option value="01">January</option>
            <option value="02">February</option>
            <option value="03">March</option>
            <option value="04">April</option>
            <option value="05">May</option>
            <option value="06">June</option>
            <option value="07">July</option>
            <option value="08">August</option>
            <option value="09">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
      <Button>이벤트 검색</Button>
    </form>
  );
}

export default EventSearch;
