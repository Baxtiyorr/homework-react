import { useState } from 'react'
import './header.css'
import vitelog from '/vite.svg'
import burgerlog from '../../assets/BurgerMenu.svg'

const MenuBar = () =>{


const [isActive, setIsActive] = useState(false);

const handleClick = () => {
  setIsActive(current => !current);
};
    return(
        <header>
            <nav>
                <div className="container">
                    <div className="navbar">
                        <img src={vitelog} alt="vite" />
                        <ul className={`navbar__menu ${isActive ? 'is-active' : ''}`}>
                            <li className='navbar__menu-list'><a href="#">Home</a></li>
                            <li className='navbar__menu-list'><a href="#">About us</a></li>
                            <li className='navbar__menu-list'><a href="#">Contacts</a></li>
                            <li className='navbar__menu-list'><a href="#">Other products</a></li>
                            <li className='navbar__menu-btn'><button>Learn more</button></li>
                        </ul>
                        <button className='burger-btn' onClick={handleClick}><img src={burgerlog} alt="Burger button" /></button>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export  default MenuBar