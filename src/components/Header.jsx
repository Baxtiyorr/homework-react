import { useState } from 'react'
import './Header.scss'
import YTlogo from '../assets/svg-icons/YTlogo.svg'
import Avatar from '../assets/svg-icons/Avatar.svg'
import Record_icon from '../assets/svg-icons/Record-icon.svg'
import Search_icon from '../assets/svg-icons/Search_icon.svg'
import Notifications from '../assets/svg-icons/notifications.svg'
import Menu from '../assets/svg-icons/Menu.svg'
import Apps from '../assets/svg-icons/Apps.svg'
import { Link } from 'react-router-dom'
import { MdSubscriptions, MdHome, MdExplore, MdOutlineHelp, MdFeedback, MdVideoLibrary, MdTheaters, MdOutlineHistory, MdOndemandVideo, MdWatchLater, MdOutlineKeyboardArrowDown,  } from "react-icons/md";
import { BiSolidLike } from "react-icons/bi";
import { RxAvatar } from "react-icons/rx";
import { IoLogoYoutube, IoIosMoon, IoMdSettings } from "react-icons/io";
import { IoGameController, IoFlagSharp } from "react-icons/io5";
import SidebarRow from './SidebarRow'
import './Sidebar.scss'
import gussie from '../assets/svg-icons/images/gussie.png'
import nora from '../assets/svg-icons/images/nora.png'
import belle from '../assets/svg-icons/images/belle.png'
import eunice from '../assets/svg-icons/images/eunice.png'
import emma from '../assets/svg-icons/images/emma.png'
import leah from '../assets/svg-icons/images/leah.png'
import SubscriptionRow from './SubscriptionRow'
import { useMyContext } from './useMyContext'
import useTheme from './usetheme/useTheme'

const Header = () => {

const [active, setActive] = useState('')
const [activeMiniSidebar, setActiveMiniSidebar] = useState('mini_sidebar')
const { inputValue, setInput } = useMyContext();
const { isDarkMode, toggleTheme } = useTheme();

const handleInputChange = (e) => {
    setInput(e.target.value);
  };

const toggleSidebar = ()=>{
    if(active === 'sidebar' || activeMiniSidebar === 'mini_sidebar'){
        setActive('active')
        setActiveMiniSidebar('mini_sidebar-active')
    }else{
        setActive('')
        setActiveMiniSidebar('mini_sidebar')
    }
}


  return (
    <div className={`parent_header ${isDarkMode ? 'dark' : 'light'}`}>

    <div className={`header ${isDarkMode ? 'dark' : 'light'}`}>
        <div className="header_left">
           <img className='menu_btn' onClick={toggleSidebar} src={Menu} alt="menu" />
            <Link to={'/'}><img src={YTlogo} alt="YT" /></Link>
        </div>
            <div className="header_middle">
                <input className='search_input' placeholder='search' type='text' value={inputValue} onChange={handleInputChange}/>
                <img src={Search_icon} alt="search" className='search_icon'/>
            </div>
        
        <div className="header_right">
            <button onClick={toggleTheme}><IoIosMoon size={30} color='grey'/></button>
            <img src={Record_icon} alt="Record" className='header_icons'/>
            <img src={Apps} alt="apps"  className='header_icons'/>
            <div className='notifications_wrapper'>
            <img src={Notifications} alt="notifications"  className='header_icons'/>
            <div className="notes">3</div>
            </div>
            <Link to={'/login'}>
            <RxAvatar size={37} className='header_icons'/>
            </Link>
        </div>
        
   
    </div>

    <div className={`sidebar ${active} ${isDarkMode ? 'dark' : 'light'}`}>
    <SidebarRow icon={MdHome} title={'Home'}/>
    <SidebarRow icon={MdExplore} title={'Explore'}/>
    <SidebarRow icon={MdSubscriptions} title={'Subscription'}/>
    <hr />
    <SidebarRow icon={MdVideoLibrary} title={'Library'}/>
    <SidebarRow icon={MdOutlineHistory} title={'History'}/>
    <SidebarRow icon={MdOndemandVideo} title={'Your videos'}/>
    <SidebarRow icon={MdWatchLater} title={'Watch later'}/>
    <SidebarRow icon={BiSolidLike} title={'Liked videos'}/>
    <SidebarRow icon={MdOutlineKeyboardArrowDown} title={'Show more'}/>
    <hr />
    <h4 className='sidebar_heading'>SUBSCRIPTION</h4>
    <SubscriptionRow img={gussie} name={'Gussie Singleton'}/>
    <SubscriptionRow img={nora} name={'Nora Francis'}/>
    <SubscriptionRow img={belle} name={'Belle Briggs'}/>
    <SubscriptionRow img={eunice} name={'Eunice Cortez'}/>
    <SubscriptionRow img={emma} name={'Emma Hanson'}/>
    <SubscriptionRow img={leah} name={'Leah Berry'}/>
    <SidebarRow icon={MdOutlineKeyboardArrowDown} title={'Show more'}/>
    <hr />
    <h4 className='sidebar_heading'>MORE ON YOUTUBE</h4>
    <SidebarRow icon={IoLogoYoutube} title={'Youtube premium'}/>
    <SidebarRow icon={MdTheaters} title={'Movies'}/>
    <SidebarRow icon={IoGameController} title={'Gaming'}/>
    <hr />
    <SidebarRow icon={IoMdSettings}  title={'Settings'}/>
    <SidebarRow icon={IoFlagSharp}  title={'Report history'}/>
    <SidebarRow icon={MdOutlineHelp}  title={'Help'}/>
    <SidebarRow icon={MdFeedback}  title={'Send feedback'}/>
    <hr />
    <div className="footer">
        <p>About &nbsp; Press &nbsp; Copyright</p>
        <p>Contact us &nbsp; Creators</p>
        <p>Advertise &nbsp; Developers</p>
        <br />
        <p>Terms &nbsp; Privecy &nbsp; Policy & Safety</p>
        <p>How youtube works</p>
        <p>Test new features</p>
        <br />
        <p className='date'>&#169; 2021 Google LLC</p>
    </div>
   
    </div>
    <div className={`mini_sidebar ${activeMiniSidebar}`}>
            <div className="mini_div">
                <MdHome size={25}/>
                <p>Home</p>
            </div>
            <div className="mini_div">
                <MdExplore size={25}/>
                <p>Explore</p>
            </div>
            <div className="mini_div">
                <MdSubscriptions size={25}/>
                <p>Subscription</p>
            </div>
            <div className="mini_div">
                <MdVideoLibrary size={25}/>
                <p>Library</p>
            </div>
        </div>
    </div>
  )
}

export default Header
