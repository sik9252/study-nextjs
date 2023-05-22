import Link from "next/link";
import Image from "next/image";
import classes from "./EventItem.module.css";

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
            <time>{changingDateFormat(date)}</time>
          </div>
          <div className={classes.address}>
            <address>{changingAddressFormat(location)}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Link href={detailPageLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
