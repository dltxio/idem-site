import { useLayoutEffect, useState } from "react";

const useWindowSize = () => {
  const [size, setSize] = useState({
    width: 0,
    height: 0
  });

  useLayoutEffect(() => {
    // set initial size
    setSize({
      width: window.innerWidth,
      height: window.innerHeight
    });

    // add resize event listener
    window.addEventListener("resize", () =>
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    );

    // remove listener when unmounted
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
