/* eslint-disable react-refresh/only-export-components */
import React from 'react'

import './layout-right-sidebar.scss'
import search_icon from '../assets/svg/search-icon.svg'
import settings from '../assets/svg/settings.svg'
import dots from '../assets/svg/3dots.svg'
import mushtariy from '../assets/images/mushtariy.png'
import shuxrat from '../assets/images/shuxrat.png'


const Layuot__right_side = () => {
  return (
    <section>
     <div className="layout__right-sidebar-container">
        <div className="layout__right-sidebar">
           <div className="search-section">
            <div className="search_icon">
              <img src={search_icon} alt="searcg icon" />
            </div>
            <form>
              <input type="search" placeholder='Search Twitter' className='input'/>
            </form>
           </div>
           <div className="trends-section">
            <div className="title">
              <h2>Trends for you</h2>
              <img src={settings} alt="settings" />
            </div>
            <div className="trends">
               <div className="trend">
              <div className="trend__title">
                <span>Trending in Germany</span>
                <img src={dots} alt="dots" />
              </div>
                <h3>Revolution</h3>
                <span>50.4K Tweets</span>
            </div>
            <div className="trend">
              <div className="trend__title">
                <span>Trending in Germany</span>
                <img src={dots} alt="dots" />
              </div>
                <h3>Revolution</h3>
                <span>50.4K Tweets</span>
            </div><div className="trend">
              <div className="trend__title">
                <span>Trending in Germany</span>
                <img src={dots} alt="dots" />
              </div>
                <h3>Revolution</h3>
                <span>50.4K Tweets</span>
            </div>
           </div>
           <a href="#">Show more</a>
           
            </div>
           <div className="recomendations">
            <h2>You might like</h2>
            <div className="recomendet"></div>
            <div className="user">
              <img src={mushtariy} alt="mushtariy" />
              <div className="user__name">
                <h3>Mushtariy</h3>
                <span>@Mushtar565266</span>
              </div>
              <button className="user__btn">Follow</button>
            </div>
            <div className="user">
              <img src={shuxrat} alt="shuxrat" />
              <div className="user__name">
                <h3>Shuhratbek</h3>
                <span>@mrshukhrat</span>
              </div>
              <button className="user__btn sec">Follow</button>
            </div>
           </div>
        </div>
     </div>
    </section>
  )
}

export default React.memo(Layuot__right_side)
