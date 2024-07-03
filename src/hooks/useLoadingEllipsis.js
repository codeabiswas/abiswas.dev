import { useState, useEffect } from "react";

const useLoadingEllipsis = (intervalDuration = 500) => {
  const [dotCount, setDotCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDotCount((prevCount) => (prevCount + 1) % 4);
    }, intervalDuration);
    return () => clearInterval(interval);
  }, [intervalDuration]);

  return dotCount;
};

export default useLoadingEllipsis;
