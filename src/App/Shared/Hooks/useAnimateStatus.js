import { useState, useEffect } from "react";

import { Status } from "../Constants/status";

function useAnimateStatus(status) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (status && status !== Status.DISABLED) {
      return setAnimate(true);
    }
    return setAnimate(false);
  }, [status]);

  return animate;
}

export default useAnimateStatus;
