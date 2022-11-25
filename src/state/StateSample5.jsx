import { useState } from "react";

const StateSample5 = () => {
  const defaultCities = ["istanbul", "izmir", "Ankara", "Konya", "Tokya"];

  const [cities, setCities] = useState(defaultCities);
  const [name, setName] = useState("");

  const clear = () => {
    setCities([]);
  };

  const add = () => {
    setCities([...cities, name]);
    setName("");
  };

  return (
    <>
      <ul>
        {cities.map((city, key) => (
          <li key={key}>{city}</li>
        ))}
        <input type="text" value={name} onChange = {(e) => setName(e.target.value)}/>
        <button onClick={add}>Add</button>
        <button onClick={clear}>Clear</button>
      </ul>
    </>
  );
};

export default StateSample5;
