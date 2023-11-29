import './Card.css'


const Cards = (props) => {
    const {name, flags, capital, population} = props.data

    
  return (

      <div className="card">
        <img src={flags.png} alt={name.common} />
        <h2>Name: {name.common}</h2><br />
        <h3>Capital: {capital}</h3><br />
        <h3>Population: {population.toLocaleString()}</h3>
      </div>
    
  )
}

export default Cards
