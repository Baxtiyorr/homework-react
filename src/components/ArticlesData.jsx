import { useEffect, useState } from "react";
import './CountriesData.css'
import Cards from "./Cards";

const ArticlesData = () => {


  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false)


  const fetchData = async () => {
    setLoading(true)
      try {
          let url = 'https://api.spaceflightnewsapi.net/v3/articles';
           const response = await fetch(url);

           
          if (response.ok) {
              const data = await response.json();
              setArticles(data);
          }

      } catch (error) {
          console.log(error);
      }
      setLoading(false)
  }
 

  useEffect(() => {
      fetchData();
  }, [])

 

    if(loading){
     return( <div className="loading">
        <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      </div>)
    }
  return (
    <section>
       
      <div className="container">

        <div className="card-wrapper">

         {
      articles.map((country, index) =>(
        <Cards key={index} data={country}/>
      ))
    }

      </div>
      </div>
      
   
    </section>
  )
}

export default ArticlesData
