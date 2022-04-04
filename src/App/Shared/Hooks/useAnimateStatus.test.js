import { renderHook } from "@testing-library/react-hooks";

import useAnimateStatus from "./useAnimateStatus";
import { Status } from "../Constants/status";

test("useAnimateStatus returns animate value correctly based on status", async () => {
  const { result, rerender } = renderHook(
    ({ initialValue }) => useAnimateStatus(initialValue),
    {
      initialProps: { initialValue: null },
    }
  );
  expect(result.current).toEqual(false);

  rerender({ initialValue: Status.DISABLED });
  expect(result.current).toEqual(false);

  [Status.CORRECT, Status.MISPLACED, Status.WRONG].forEach((status) => {
    rerender({ initialValue: status });
    expect(result.current).toEqual(true);
  });

  rerender({});
  expect(result.current).toEqual(false);
});
