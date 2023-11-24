import Card from '../contact-card/contact-card'
import './contacts.css'

const ContactList = () =>{
    return(
        <section>
            <div className="container">
                    <div className="form-wrapper">
                        <form>
                            <label>
                            First name
                            <br />
                            <input type="text" className='first-name' placeholder='First name'/>
                            </label>
                            <label>
                                Last name
                                <br />
                            <input type="text" className='last-name' placeholder='Last name'/>
                            </label>
                            <label>
                                Phone number
                                <br />
                            <input type="number" className='phone-number' placeholder='Phone number'/>
                            </label>
                            <button onClick={(e) =>{e.preventDefault()}} className='form-btn'>Submit </button>
                        </form>
                    </div>


                <Card/>

            </div>
        </section>
    )
}

export default ContactList