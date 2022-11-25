import {useState} from "react"

const StateSample2 = () => {
    const [isOnline, setIsOnline] = useState(false)

    const handleClick = () =>{
        //setIsOnline(!isOnline); Bunu kullanmak mantıklı değil
        setIsOnline((prev)=>!prev)
    }


  return (
    <>
        {isOnline ? <p>Kullanıcı Online</p> : <p>Kullanıcı Offline!</p> }   
        <button onClick={handleClick}>Change Status</button>
    </>
  )
}

export default StateSample2