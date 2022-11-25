const JsxSapmle3 = () => {
  const cities = ["İzmir", "İstanbul", "Londro", "Havana"];

  return (
    <>
      <ul>
        {/* {cities.map((city) => {
          return <li>{city}</li>;
        })} */
        }
        
        {cities.map((city)=><li>{city}</li>)}
      </ul>
    </>
  );
};

export default JsxSapmle3;
