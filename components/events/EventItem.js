import Link from "next/link";
import Image from "next/image";

/** styles */
import classes from "./EventItem.module.css";

/** components */
import Button from "../ui/Button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";

function EventItem(props) {
  const { title, image, date, location, eventId } = props;

  // 이벤트의 date 형식을 변환합니다
  const changingDateFormat = (date) => {
    const changedDateFormat = new Date(date).toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    return changedDateFormat;
  };

  // 이벤트의 주소 형식을 변환합니다.
  const changingAddressFormat = (location) => {
    const changedAddressFormat = location.replace(",", "\n");

    return changedAddressFormat;
  };

  // 이벤트 상세페이지로 이동하는 링크를 정의합니다
  const detailPageLink = `/events/${eventId}`;

  return (
    <li className={classes.item}>
      <Image src={"/" + image} alt="" width={300} height={200} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{changingDateFormat(date)}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{changingAddressFormat(location)}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={detailPageLink}>
            <span>이벤트 바로가기</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
