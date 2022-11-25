import React from 'react'

const JsxSample = () => {

    const name = "Mehmet Ali";
    const age = 30;
    const user = {
        name: "Mehmet Ali",
        surname: "Yılmaz",
        age: "30",
        city : "İzmir"

};
  return (
    <>
        <p>{name}</p>
        <p>{age}</p>
        <p>{user.city.toUpperCase()}</p>
    </>
  )
}

export default JsxSample