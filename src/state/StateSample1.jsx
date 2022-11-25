import {useState} from "react"

const StateSample1 = () => {
    const [nameSurname, setNameSurname] = useState("Mehmet ali YILMAZ")

    const changeName = (e)=>{
        setNameSurname("Aslı Güzeldir")
    }
  return (
    <>
      <h1>{nameSurname}</h1>
      <button onClick={changeName}>Change My Name</button>
    </>
  );
};

export default StateSample1;
