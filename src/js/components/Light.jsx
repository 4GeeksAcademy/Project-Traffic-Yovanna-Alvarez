function Light(props) {
   return (
    <div
            key={"c"}
            // onClick={() => setColor(c)}
            className={`light ${props.ligthState} ${props.ligthState==props.currentLight ? "active":""}`}
          />
   ) 
}

export default Light;