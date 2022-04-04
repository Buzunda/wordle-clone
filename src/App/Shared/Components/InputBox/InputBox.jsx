import React, { useRef } from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";

import styles from "./InputBox.scss";
import useAnimateStatus from "../../Hooks/useAnimateStatus";
import { CSSTransition } from "react-transition-group";

const cx = classNames.bind(styles);

const InputBox = ({ status, value, name, delay = 100 }) => {
  const nodeRef = useRef(null);
  const animate = useAnimateStatus(status);

  return (
    <CSSTransition
      in={animate}
      nodeRef={nodeRef}
      timeout={delay}
      classNames={"inputBox"}
    >
      <div className={cx("inputBox", status)} data-testid={name} ref={nodeRef}>
        {value}
      </div>
    </CSSTransition>
  );
};

InputBox.propTypes = {
  status: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  delay: PropTypes.number,
};

export default InputBox;
