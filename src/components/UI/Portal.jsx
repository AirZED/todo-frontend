// importing from react
import { createPortal } from "react-dom";

// importing component
import Backdrop from "../Backdrop";
import AddTodo from "../AddTodo";
import { Fragment } from "react";

const Portal = (props) => {
  const portalEl = document.getElementById("portal");

  return (
    <Fragment>
      {createPortal(<Backdrop onClose={props.onClose} />, portalEl)}
      {createPortal(<AddTodo onClose={props.onClose} />, portalEl)}
    </Fragment>
  );
};

export default Portal;
