import { useState } from "react";

const StateSample3 = () => {
  const [user, setUser] = useState({ name: "Mehmet Ali", surname: "Yılmaz" });
  const handleClick = () => {
    setUser((prev) => {
      return { ...prev, name: "Aslı" };
    });
  };

  return (
    <>
      <p>{user.name}</p>
      <p>{user.surname}</p>
      <button onClick={handleClick}>Change</button>
    </>
  );
};

export default StateSample3;
