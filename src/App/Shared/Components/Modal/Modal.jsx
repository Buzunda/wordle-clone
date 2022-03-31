import React from "react";

import classNames from "classnames/bind";

import styles from "./Modal.module.scss";

import Button from "../Button/Button";
const cx = classNames.bind(styles);

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "displayBlock" : "displayNone";

  return (
    <div className={cx("modal", showHideClassName)}>
      <section className={styles.modalMain}>
        {children}
        <Button onClick={handleClose}>Close</Button>
      </section>
    </div>
  );
};

export default Modal;
