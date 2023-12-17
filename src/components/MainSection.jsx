import './MainSection.scss'
import VideoCard from "./VideoCard"
// import dollie from '../assets/svg-icons/images/gussie.png'

// import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';




// import { FreeMode, Pagination } from 'swiper/modules';
const MainSection = () => {

  return (
    <main className="main">

      <div className="video_wrapper">
        <VideoCard/>
      </div>
      {/* <Swiper
        slidesPerView={3}
        spaceBetween={40}
        freeMode={true}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        
          <SwiperSlide><VideoCard/> </SwiperSlide>
        
      </Swiper> */}
    </main>
  
  )
}

export default MainSection
