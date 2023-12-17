import './VideoCard.scss'
import { MdOutlinePlaylistAdd, MdWatchLater } from "react-icons/md";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useMyContext } from './useMyContext';

// import useFetch from './fetch/useFetch';

const VideoCard = () => {

    const [videoData, setVideoData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [option, setOption] = useState('')
    const { inputValue } = useMyContext();
  
    useEffect(() => {
        const fetchData = async ( data = 'cars') => {
            try {
                const options = {
                    method: 'GET',
                    url: 'https://youtube-v31.p.rapidapi.com/search',
                    params: {
                        q: data,
                        part: 'snippet,id',
                        regionCode: 'US',
                        maxResults: '50',
                        order: 'date'
                    },
                    headers: {
                        'X-RapidAPI-Key': '7c49b2162amsh97cdc88030e907ap12c4d3jsn75d0dcfc477a',
                        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
                    }
                };

                const response = await axios.request(options);
                setVideoData(response.data);
                setOption(option)
                setLoading(false);
            } catch (error) {
                setError(error);
                 setLoading(false);
            }
        };

        fetchData(inputValue);
    }, [inputValue, option]);
  
//   console.log(videoData);  
  
  
  

      
      function formatDuration(duration) {
        const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
      
        const minutes = (parseInt(match[2]) || 0);
        const seconds = (parseInt(match[3]) || 0);
      
        return `${minutes}:${(seconds < 10 ? '0' : '') + seconds}`;
      }
      const duration = "PT23S";
      const formattedDuration = formatDuration(duration);
      
  
     
    
    //   const { data, loading, error } = useFetch('https://youtube-v31.p.rapidapi.com/search', options);
      if (loading) {
        return <div className='loading'>
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>;
      }
    
      if (error) {
        return <div>Error: {error.message}</div>;
      }
      
      
      
      return  (
        <>
            {videoData.items.map((videoInfo, index) => {

            function timeSince(date) {
            const seconds = Math.floor((new Date() - new Date(date)) / 1000);
            let interval = Math.floor(seconds / 31536000);
  
                if (interval > 1) {
                 return interval + " years ago";
                    }
                 interval = Math.floor(seconds / 2592000);
                if (interval > 1) {
                  return interval + " months ago";
                 }
                 interval = Math.floor(seconds / 86400);
                 if (interval > 1) {
                 return interval + " days ago";
                    }
                 interval = Math.floor(seconds / 3600);
                 if (interval > 1) {
                 return interval + " hours ago";
                    }
                     interval = Math.floor(seconds / 60);
                        if (interval > 1) {
                          return interval + " minutes ago";
                            }
                                return Math.floor(seconds) + " seconds ago";
                            }
                             const publishedAt = videoInfo.snippet.publishedAt;
                                const timeAgo = timeSince(publishedAt);  

                            return(
                                <div className='video_card' key={index}>
                                <div className="watch_later"><MdWatchLater className='video_icon' size={25} color='white'/></div>
                                <div className="playlist_add"><MdOutlinePlaylistAdd className='video_icon' size={25} color='white'/></div>
                                <Link to={`/video/${videoInfo.id.videoId}`}> 
                                <img className='video_img' src={videoInfo.snippet.thumbnails.medium.url} alt="coctail" />
                                </Link>
                                <div className="duration">{formattedDuration}</div>
            
                                <div className="video_data">
                                    <div className="chanel_details">
                                        <h5>{videoInfo.snippet.title}</h5>
                                        <p>200 views &bull; {timeAgo}</p>
                                    </div>
                                </div>
                            </div>
                            )

               
            })}
        </>
    );
}

export default VideoCard
