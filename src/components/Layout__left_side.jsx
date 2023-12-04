import { Link } from 'react-router-dom';
import './layout-left-sidebar.scss';
import twitter_logo from '../assets/svg/twitter-logo.svg'
import home from '../assets/svg/home.svg'
import explore from '../assets/svg/explore.svg'
import notifications from '../assets/svg/notifications.svg'
import messages from '../assets/svg/messages.svg'
import bookmarks from '../assets/svg/bookmarks.svg'
import lists from '../assets/svg/lists.svg'
import profile from '../assets/svg/profile.svg'
import more from '../assets/svg/more.svg'
import bobur from '../assets/images/Bobur.png'
import dots from '../assets/svg/3dots.svg'

const Layout__left_side = () => {
  return (
    <section>
      <div className="layout__left-sidebar">
        <img src={twitter_logo} alt="twitter" />
        <div className="left__sidebar-menu">
                <div className="left__sidebar-menu-item">
                    <img src={home} alt="home" />
                    <h3><Link to={`/`}>Home</Link></h3>
                </div>
                <div className="left__sidebar-menu-item">
                    <img src={explore} alt="explore" />
                    <h3><Link to={`/explore`}>Explpore</Link></h3>
                </div><div className="left__sidebar-menu-item">
                    <img src={notifications} alt="notifications" />
                    <h3><Link to={`/notifications`}>Notifications</Link></h3>
                </div><div className="left__sidebar-menu-item">
                    <img src={messages} alt="messages" />
                    <h3><Link to={`/messages`}>Messages</Link></h3>
                </div><div className="left__sidebar-menu-item">
                    <img src={bookmarks} alt="bookmarks" />
                    <h3><Link to={`/bookmarks`}>Bookmarks</Link></h3>
                </div><div className="left__sidebar-menu-item">
                    <img src={lists} alt="lists" />
                    <h3><Link to={`/lists`}>Lists</Link></h3>
                </div><div className="left__sidebar-menu-item">
                    <img src={profile} alt="profile" />
                    <h3><Link to={`/profile`}>Profile</Link></h3>
                </div><div className="left__sidebar-menu-item">
                    <img src={more} alt="more" />
                    <h3><Link to={`/more`}>More</Link></h3>
                </div>
                <button className='left-sidebar-menu-btn'>Tweet</button>
                 <div className="profile">
                <img src={bobur} alt="Bobur" />
                <div className="name">
                    <h3>Bobur</h3>
                    <span>@bobur_mavlonov</span>
                </div>
                <img src={dots} alt="dots" />
            </div>
            </div>
           
      </div>
    </section>
  )
}

export default Layout__left_side
