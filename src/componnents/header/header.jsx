import { Link } from 'react-router-dom'
// import { useState } from 'react'
import './header.css'
import react from '../../assets/react.svg'

const Header = () =>{

return(
    <>
    <nav>
        <div className="container">
            <div className="navbar">
                <img src={react} alt="react" />
                <ul className='navbar__menu'>
                    <li className="navbar__menu-list"><Link to="/">Home</Link></li>
                    <li className="navbar__menu-list"><Link to="/todos">Todos</Link></li>
                    <li className="navbar__menu-list"><Link to="/posts">Posts</Link></li>
                    <li className="navbar__menu-list"><Link to="/albums">Albums</Link></li>
                </ul>
            </div>
        </div>
    </nav>
    </>
)


}



export  default Header