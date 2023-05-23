import Link from "next/link";
import classes from "./Button.module.css";

function Button(props) {
  const { link, children } = props;

  // 페이지 이동 버튼
  if (props.link) {
    return (
      <Link href={link} className={classes.btn}>
        {children}
      </Link>
    );
  }

  // 기본 버튼
  return (
    <button className={classes.btn} onClick={props.onClick}>
      {props.onClick}
    </button>
  );
}

export default Button;
