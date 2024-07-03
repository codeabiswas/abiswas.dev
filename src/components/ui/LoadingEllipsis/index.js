import React from "react";
import useLoadingEllipsis from "../../../hooks/useLoadingEllipsis";

// Default interval is 500ms
const LoadingEllipsis = ({ intervalDuration = 500 }) => {
  const dotCount = useLoadingEllipsis(intervalDuration);

  return <h1>Loading{".".repeat(dotCount)}</h1>;
};

export default LoadingEllipsis;
