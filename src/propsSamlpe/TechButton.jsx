
const TechButton = (props) => {
    const {buton, style} = props;
  return (
    <>
    <div style={style}>
        <p>{buton}</p>
        <button>Click</button>   
     </div>
    </>
  )
}

export default TechButton