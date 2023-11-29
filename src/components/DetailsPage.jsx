import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import './DetailsPage.css'


const DetailsPage = () => {
    const {detailsId} = useParams()
    const [info, setInfo] = useState({})
    const [loading, setLoading] = useState(false)


    const fetchData = async () => {
      setLoading(true)
        try {
            let url = `https://api.spaceflightnewsapi.net/v3/articles/${detailsId}`;
             const response = await fetch(url);
  
             
            if (response.ok) {
                const data = await response.json();
                setInfo(data);
            }
  
        } catch (error) {
            console.log(error);
        }
        setLoading(false)
    }
   
  
    useEffect(() => {
        fetchData();
    }, [detailsId])

  
        console.log(info);
  
      if(loading){
       return( <div className="loading">
          <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>)
      }
      const {imageUrl, title, summary, } = info
  return (
    <div className="container">
        <div className="detail-wrapper">
       <div className="detail-card">
        <img src={imageUrl} alt={title} /><br /><br />
        <h2>Title: {title}</h2><br />
        <p>Introduction: {summary}</p><br />
       </div>
        </div>
    </div>
  )
}

export default DetailsPage
