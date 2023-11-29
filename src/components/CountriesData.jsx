import { useEffect, useState } from "react";
import './CountriesData.css'
import Cards from "./Cards";

const CountriesData = () => {


  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')


  const fetchData = async () => {
    setLoading(true)
      try {
          let url = 'https://restcountries.com/v3.1/all';
           const response = await fetch(url);

           if (searchTerm.trim()) {
            url = `https://restcountries.com/v3.1/name/${searchTerm}`;
        }
          if (response.ok) {
              const data = await response.json();
              setCountries(data);
          }

      } catch (error) {
          console.log(error);
      }
      setLoading(false)
  }
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
}

  useEffect(() => {
      fetchData();
  }, [searchTerm])


    if(loading){
     return( <div className="loading">
        <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      </div>)
    }
  return (
    <section>
       
      <div className="container">

        <input className="input" value={searchTerm} onChange={handleSearch} placeholder="search countries by name" />
        <div className="card-wrapper">

         {
      countries.map((country, index) =>(
        <Cards key={index} data={country}/>
      ))
    }

      </div>
      </div>
      
   
    </section>
  )
}

export default CountriesData
