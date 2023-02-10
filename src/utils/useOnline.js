import { useEffect, useState } from "react";

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);

  const handleOnline = (value) => {
    setIsOnline(value);
  };

  useEffect(() => {
    window.addEventListener("online", () => handleOnline(true));
    window.addEventListener("offline", () => handleOnline(false));

    return () => {
      window.removeEventListener("online", () => handleOnline(true));
      window.removeEventListener("offline", () => handleOnline(false));
    };
  }, []);

  return isOnline;
};

export default useOnline;
