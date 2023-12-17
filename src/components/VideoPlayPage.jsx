import { useEffect, useState } from 'react';
import './VideoPlayPage.scss'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { AiFillLike, AiFillDislike  } from "react-icons/ai";
import { IoMdShareAlt, IoIosMore  } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import VideoCard from './VideoCard';
import sircle from '../assets/svg-icons/knob.svg'
import './Header.scss'
import YTlogo from '../assets/svg-icons/YTlogo.svg'
import Avatar from '../assets/svg-icons/Avatar.svg'
import Record_icon from '../assets/svg-icons/Record-icon.svg'
import Search_icon from '../assets/svg-icons/Search_icon.svg'
import Notifications from '../assets/svg-icons/notifications.svg'
import Menu from '../assets/svg-icons/Menu.svg'
import Apps from '../assets/svg-icons/Apps.svg'
import { Link } from 'react-router-dom'

const VideoPlayPage = () => {
    const {videoId} = useParams()
    const [video, setVideo] = useState(null);
    const [error, setError] = useState(null);
    const [option, setOption] = useState('')
    const [count, setCount] = useState(150)
    const [text, setText] = useState('Show more')

    const hendleClick = ()=>{
      if(text === 'Show more'){
        setCount(100000000000)
        setText('Hide')
      }else{
        setCount(150)
        setText('Show more')
      }
    }
  
    useEffect(() => {
        const fetchData = async () => {
            try {
                const options = {
                    method: 'GET',
                    url: 'https://youtube-v31.p.rapidapi.com/videos',
                    params: {
                      part: 'contentDetails,snippet,statistics',
                      id: `${videoId}`
                    },
                    headers: {
                      'X-RapidAPI-Key': 'f00e2aab33msh1b5d04d049d7ed2p15fa84jsneb930adedfcf',
                      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
                    }
                  };

                const response = await axios.request(options);
                setVideo(response.data);
                setOption(option)
                
            } catch (error) {
                setError(error);
            }
        };

        fetchData();
    }, [option, videoId]);
  
  console.log(video);

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <>
     <div className='header'>
        <div className="header_left">
           <img className='menu_btn'  src={Menu} alt="menu" />
            <Link to={'/'}><img src={YTlogo} alt="YT" /></Link>
        </div>
            <div className="header_middle">
                <input className='search_input' placeholder='search' type='text' />
                <img src={Search_icon} alt="search" className='search_icon'/>
            </div>
        
        <div className="header_right">
            <img src={Record_icon} alt="Record" className='header_icons'/>
            <img src={Apps} alt="apps"  className='header_icons'/>
            <div className='notifications_wrapper'>
            <img src={Notifications} alt="notifications"  className='header_icons'/>
            <div className="notes">3</div>
            </div>
            <img src={Avatar} alt="Avatar"  className='header_icons'/>
        </div>
        
   
    </div>
    <div className='main_wrapper'>
        
        {video && video.items && video.items.map((singleVideo, index) => (
            <div key={index} className="video_content">
                <iframe
                    width="1063"
                    height="504"
                    src={`https://www.youtube.com/embed/${singleVideo.id}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
                <div className="video_details">
                <h2>{singleVideo.snippet.title}</h2>
                <div className="stats">
                  <span>{singleVideo.statistics.viewCount} views</span>
                  <div className="rates"><h3><AiFillLike size={23}/>{singleVideo.statistics.likeCount}</h3>  
                  <AiFillDislike size={23}/>
                  <h3><IoMdShareAlt size={23} color='grey'/> Share</h3>
                  <IoIosMore size={23}/>
                  </div>
                </div>
                </div>
                <div className="video_desc">
                  <div className="chanel">
                    <div className="porfile">
                      <RxAvatar size={54}/>
                      <div>
                        <h3>{singleVideo.snippet.channelTitle}</h3>
                      </div>
                    </div>
                    <button>Subscribe 2.3m</button>
                  </div>
                  <div className="description">
                    <p>{singleVideo.snippet.description.substring(0, count)}</p>
                    <button onClick={hendleClick}>{text}</button>
                  </div>
                </div>
                
            </div>
        ))}
        <div className="next_vids">
          <div className='next_vids_title'>
            <h2 >Next</h2>
            <h3>Autoplay <img src={sircle} alt="knob" /></h3>
          </div>
        <VideoCard/>
        </div>
    </div>
    </>
    
)
}

export default VideoPlayPage
