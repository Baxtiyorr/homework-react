import { Link } from 'react-router-dom'
import './Card.css'


const Cards = (props) => {
    const {imageUrl, id, title, publishedAt} = props.data

    
  return (

      <div className="card">
        <h4 className='id'>ID: {id}</h4>
        <img src={imageUrl} alt={title} />
        <h3>Title: {title}</h3><br />
        <h3>Published at: {publishedAt}</h3>
        <Link to={`/details/${id}`}>For more details</Link>
      </div>
    
  )
}

export default Cards
