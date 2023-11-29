import { Link } from 'react-router-dom'
import './header.css'


const Header = () => {
  return (
    <header>
      <nav>
        <div className="container">
          <div className="navbar">
            <h2><Link to='/articles'>Articles</Link></h2>
            <button className="navbar__btn">LOG IN</button>
          </div>
        </div>
      </nav>
     
    </header>
  )
}

export default Header
