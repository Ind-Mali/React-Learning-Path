import {useState} from "react"

const StateSample4 = () => {

    const [plus, setPlus] = useState(0)

    const handleClick = ()=>{
        setPlus(prev => prev +=1
        )
    }

    const minusClick = ()=>{
        setPlus(prev => prev === 0 ? prev :prev-1)
    }

    
  return (
    <>
    <button onClick={minusClick} >-</button>
    <h1>{plus}</h1>
    <button onClick={handleClick}>+</button>
        
    </>
  )
}

export default StateSample4