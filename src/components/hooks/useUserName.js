import { useState, useEffect } from "react";

const useUserName = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      setName(storedName);
    }
  }, []);

  const saveName = (newName) => {
    setName(newName);
    localStorage.setItem("userName", newName);
  };

  return [name, saveName];
};

export default useUserName;
