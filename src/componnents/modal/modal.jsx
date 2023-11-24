import { useState } from 'react'
import './modal.css'
import pumping from '../../assets/pumping.jpg'


const Modal = () => {
    const [isActive, setIsActive] = useState(false);

const handleClick = () => {
  setIsActive(current => !current);
};
    return(
        <>
        <section>
            <div className="container">
                <div className="modalka">
                    <button className="modalka__btn" onClick={handleClick}>Click Me) and you won't regret</button>
                    <div className={`modalka__content ${isActive ? 'is-active' : ''}`}>
                        <img src={pumping} alt="pumping" />
                        <h2 className='push-ups'>20 push ups NOW!!</h2>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Modal