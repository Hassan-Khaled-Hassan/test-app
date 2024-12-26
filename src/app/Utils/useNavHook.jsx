"use client";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const useNavHook = () => {
const [windowDimensions, setWindowDimensions] = useState({
  screenWidth: undefined,
  height: undefined,
});

useEffect(() => {
  const handleResize = () => {
    setWindowDimensions({
      screenWidth: window.innerWidth,
      height: window.innerHeight,
    });
  };

  handleResize(); // Set initial dimensions
  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
}, []); // Empty array ensures this runs only on mount

return windowDimensions;
};

export default useNavHook;
