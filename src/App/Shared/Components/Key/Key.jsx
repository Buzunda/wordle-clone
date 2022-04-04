import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import classNames from "classnames/bind";
import { CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";

import styles from "./Key.scss";
import { setKeyPressed } from "../../../Store/keyPressedSlice";
import useAnimateStatus from "../../Hooks/useAnimateStatus";

const cx = classNames.bind(styles);

const Key = ({ children, status, delay = 100 }) => {
  const nodeRef = useRef(null);
  const dispatch = useDispatch();
  const animate = useAnimateStatus(status);

  const handleClick = () => {
    dispatch(setKeyPressed(children));
  };

  return (
    <>
      <CSSTransition
        in={animate}
        nodeRef={nodeRef}
        timeout={delay}
        classNames={"key"}
      >
        <button
          onClick={handleClick}
          className={cx(status, "key")}
          ref={nodeRef}
        >
          {children}
        </button>
      </CSSTransition>
    </>
  );
};

Key.propTypes = {
  status: PropTypes.string,
  delay: PropTypes.number,
};

export default Key;
