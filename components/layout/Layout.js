import React, { Fragment } from "react";

/** components */
import MainHeader from "./MainHeader";

function Layout(props) {
  const { children } = props;

  return (
    <Fragment>
      <MainHeader />
      <main>{children}</main>
    </Fragment>
  );
}

export default Layout;
