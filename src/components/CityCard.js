
const CityCard = (props) => {
    return(
        <div className="city-card">
           <img src={props.image} alt={props.name} />
           <h3>{props.name}, {props.country}</h3>
           <h5>Read More(add a link later)</h5>    
        </div>
    )
}

export default CityCard