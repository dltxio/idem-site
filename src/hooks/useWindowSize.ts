import { useLayoutEffect, useState } from "react";

const useWindowSize = () => {
  const [size, setSize] = useState({
    width: 0,
    height: 0
  });

  useLayoutEffect(() => {
    window.addEventListener("resize", () =>
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    );

    return () =>
      window.removeEventListener("resize", () =>
        setSize({
          width: window.innerWidth,
          height: window.innerHeight
        })
      );
  }, []);

  return size;
};

export default useWindowSize;
