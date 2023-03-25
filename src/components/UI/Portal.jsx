// importing from react
import { createPortal } from "react-dom";

// importing component
import Backdrop from "../Backdrop";
import AddTodo from "../AddTodo";
import { Fragment } from "react";

const Portal = () => {
  const portalEl = document.getElementById("portal");

  return (
    <Fragment>
      {createPortal(<Backdrop />, portalEl)}
      {createPortal(<AddTodo />, portalEl)}
    </Fragment>
  );
};

export default Portal;
