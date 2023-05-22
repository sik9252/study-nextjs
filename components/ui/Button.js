import Link from "next/link";
import classes from "./Button.module.css";

function Button(props) {
  const { link, children } = props;

  return (
    <Link href={link} className={classes.btn}>
      {children}
    </Link>
  );
}

export default Button;
