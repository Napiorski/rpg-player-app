import { useState, useEffect } from "react";

export const useNightMode = () => {
  const [isNightMode, setIsNightMode] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body");

    if (body) {
      if (isNightMode) {
        body.classList.add("night-mode");
      } else {
        body.classList.remove("night-mode");
      }
    }
  }, [isNightMode]);

  const toggleNightMode = () => {
    setIsNightMode(!isNightMode);
  };

  return { isNightMode, toggleNightMode };
};
