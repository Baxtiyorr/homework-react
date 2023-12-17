import './SidebarRow.scss'
import useTheme from './usetheme/useTheme'
const SidebarRow = (props) => {


const {isDarkMode, toggleTheme} = useTheme();

  return (
    <div className={` sidebar_row ${isDarkMode ? 'dark' : 'light'}`}>
        <props.icon className={`sidebar_row_icon `} size={25} color={'#606060'} />
        <h2  className='sidebar_row_title'>{props.title}</h2>
    </div>
  )
}

export default SidebarRow
