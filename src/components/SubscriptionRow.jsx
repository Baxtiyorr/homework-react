import './SubscriptionRow.scss'
import live from '../assets/svg-icons/live-icon.svg'

const SubscriptionRow = (props) => {
  return (
    <div className='subscriptionRow'>
      <div className="left">
        <img className='chanel_logo' src={props.img} alt='img' />
        <p className='chanel_name'>{props.name}</p>
      </div>
      <div className="right">
        <img className='live_icon' src={live} alt="live" />
      </div>
    </div>
  )
}

export default SubscriptionRow
