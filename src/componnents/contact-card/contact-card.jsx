import './contact-card.css'

const Card = () =>{
return(
    <>
    <div className="card-wrapper">
    <div className="card">
        <div className="card-text">
        <h3>Name</h3>
        <h3>last name</h3>
        <h4>+998993459089</h4>
        </div>
        <div className="buttons">
            <button className='edit-btn'>Edit</button>
            <button className='delete-btn'>Delete</button>
        </div>
    </div>
    </div>
    </>
)
}

export default Card